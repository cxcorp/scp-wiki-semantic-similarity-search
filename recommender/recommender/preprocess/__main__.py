from collections.abc import Iterable
import re
import sqlite3
from glob import glob
import sys
import os
from bs4 import BeautifulSoup
from tqdm import tqdm
import multiprocessing as mp
from multiprocessing.pool import Pool
import orjson

from recommender.common.constants import WIKI_REPO_JSONS_PATH, DB_PATH


def get_content_json_paths() -> Iterable[str]:
    blocklist = [
        "/index.json",
        "/content_index.json",
        "/content_archived.json",
        "/content_decommissioned.json",
        "/content_explained.json",
        "/content_international.json",
        "/content_joke.json",
    ]

    json_paths = glob(f"{WIKI_REPO_JSONS_PATH}/**/*.json")
    return (
        p for p in json_paths if not any(p.endswith(blocked) for blocked in blocklist)
    )


def db_create_tables(con: sqlite3.Connection):
    cur = con.cursor()
    cur.executescript(
        """
            CREATE TABLE pages(
                link        TEXT PRIMARY KEY,
                title       TEXT NOT NULL,
                url         TEXT NOT NULL,
                raw_content TEXT NOT NULL,
                raw_source  TEXT NOT NULL,
                text        TEXT NULL DEFAULT NULL
                -- references
            );

            CREATE TABLE hubs(
                link        TEXT PRIMARY KEY
            );

            CREATE TABLE hubs_pages(
                page_link   TEXT NOT NULL,
                hub_link    TEXT NOT NULL
            );
            """
    )
    con.commit()


# Components for metadata (https://scp-wiki.wikidot.com/components-hub)
wiki_metadata_components_selectors = [
    # Info Rating Module
    ".page-rate-widget-box",
    # Advanced Navigation Toolbar (ANT)
    # this one uses same classname (.cell-container) as some actual
    # page content components, so we need to check for specific children
    ".cell-container:has(> div.normal):has(> div.end):has(> div.main-text-cell):has(> div.normal.small)",
    # ACS
    # remove the danger diamond from the anomaly classification system banner (https://scp-wiki.wikidot.com/classification-committee-memo)
    # as it contains invisible text
    ".anom-bar .diamond-part",
    ".anom-bar .level",
    # Audio player woed
    "div.player-wrapper",
    # Author link
    "div.authorlink-wrapper",
    # Document Transcript Swapper
    ".document-swapper .docbox-selector",
    # ID Cards
    ".foundation-id-card .expire",
    ".foundation-id-card .barcode",
    # Info Rating Module
    ".creditRate",
    # Passcode
    "#logic",
    # Ratio bar
    ".rate_t3",
    # Wikimodule
    ".collection:has(> .collapsible-block)",
    # Adult warning
    "#u-adult-warning",
]

unwanted_element_selectors = [
    ".footnotes",
    ".footnotes-footer",
    ".licensebox",
    ".pseudocrumbs",
    ".modal-wrapper",
    *wiki_metadata_components_selectors,
    ".footer-wikiwalk-nav",
    # some GOI pages have a hidden element that shows the page source
    'div[style]:has(> div[style] > div.collapsible-block > div.collapsible-block-folded > a.collapsible-block-link:-soup-contains("+\u00A0CODE"))',
    # https://scp-wiki.wikidot.com/component:info-ayers
    ".info-container",
    ".collapsible-block-link",
    "div.code > .hl-main",
]


def remove_unwanted_elements(soup: BeautifulSoup):
    unwanted = []

    for selector in unwanted_element_selectors:
        matches = list(soup.css.select(selector))
        unwanted += matches
        pass

    for el in unwanted:
        if el is not None and not el.decomposed:
            el.decompose()


def remove_excessive_newlines_and_spaces(text: str) -> str:
    # replace whitespace characters with single space, collapse multiple to one
    text = re.sub(r"[ \t\f\v\u00a0]+", " ", text)
    # remove lines that contain only whitespace
    text = re.sub(r"\n[ \t\f\v\u00a0]+\n", "\n", text)
    # collapse more than 3 sequential newlines to two newlines
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text


def remove_excessive_censorship_symbols(text: str) -> str:
    # █ symbol
    return re.sub(r"\u2588{4,}", "\u2588\u2588\u2588", text)


unwanted_regexes = [
    r"\nby qntm(\s+Previously\s)?",
    r"Secondary Class:\n\{\$secondary-class\}\s*",
]


def remove_by_regex(text: str) -> str:
    for r in unwanted_regexes:
        text = re.sub(r, "", text)
    return text


def cleanup_html_to_text(html: str) -> str:
    soup = BeautifulSoup(html, "lxml")
    remove_unwanted_elements(soup)

    text = soup.get_text()
    text = remove_by_regex(text)
    text = remove_excessive_censorship_symbols(text)
    text = remove_excessive_newlines_and_spaces(text)
    text = text.strip()

    return text


def cleanup_content_json_to_items(item: dict) -> dict:
    text = cleanup_html_to_text(item["raw_content"])
    return {
        "link": item["link"],
        "title": item["title"],
        "url": item["url"],
        "raw_content": item["raw_content"],
        "raw_source": item["raw_source"],
        "text": text,
    }


def json_loads(path: str):
    with open(path, "r") as fp:
        json = fp.read()
    return orjson.loads(json)


def parse_and_cleanup_content_from_json(
    pool: Pool, json_values: list[dict], tqdm_description: str | None
) -> Iterable[dict]:
    result = pool.imap_unordered(
        cleanup_content_json_to_items, json_values, chunksize=16
    )
    return tqdm(result, total=len(json_values), desc=tqdm_description, position=0)
    # return (cleanup_content_json_to_items(x) for x in json_loads(path).values())


def item_dict_to_sqlite_tuple(item: dict):
    return (
        item["link"],
        item["title"],
        item["url"],
        item["raw_content"],
        item["raw_source"],
        item.get("text", None),
    )


def parse_and_insert_page_content(
    con: sqlite3.Connection,
    pool: Pool,
    json_values: list[dict],
    tqdm_description: str | None = None,
):
    params = [
        item_dict_to_sqlite_tuple(item)
        for item in parse_and_cleanup_content_from_json(
            pool, json_values, tqdm_description=tqdm_description
        )
    ]
    con.executemany(
        "INSERT INTO pages (link, title, url, raw_content, raw_source, text) VALUES (?,?,?,?,?,?)",
        params,
    )
    con.commit()


ignored_hub_links = set(
    [
        # meta hubs
        "articles-eligible-for-rewrite",
        "artist-showcase-archive",
        "audio-adaptations",
        "black-highlighter-themes",
        "contest-archive",
        "curated-tale-series",
        "event-featured-archive",
        "featured-goi-format-archive",
        "featured-scp-archive",
        "featured-scp-archive-ii",
        "featured-tale-archive",
        "featured-tale-archive-ii",
        "foundation-tales-audio-edition",
        "foundation-tales",
        "goi-formats",
        "lowest-rated-articles",
        "news",
        "new-pages-feed",
        "reviewers-spotlight-archive",
        "reviewers-spotlight-archive-ii",
        "scp-international",
        "scp-series",
        "shortest-pages-by-month",
        "top-rated-goi-formats",
        "top-rated-pages-by-month",
        "top-rated-pages-by-year",
        "top-rated-pages-this-month",
        "top-rated-pages",
        "top-rated-tales",
        "young-and-under-30",
        # non-story hubs
        "art-exchange",
        # podcasts
        "kaktuskast-hub",
        "simply-creative-people-hub",
        "discovering-scp-hub",
        "the-scip-squad-podcast-hub",
    ]
)
ignored_hub_regexes = [
    re.compile(pattern)
    for pattern in [
        # meta hubs
        r"scp-series-\d+",
        r"scp-series-\d+-audio-edition",
        r"scp-series-\d+-tales-edition",
        r"tales-by-date-\d+",
    ]
]


def is_hub_ignored(hub_link: str) -> bool:
    if hub_link.startswith("archived:"):
        return True
    if hub_link in ignored_hub_links:
        return True
    for regex in ignored_hub_regexes:
        if regex.fullmatch(hub_link):
            return True
    return False


def parse_and_insert_page_hub_links(con: sqlite3.Connection, json_values: list[dict]):
    params = [
        (v["link"], hub_link)
        for v in json_values
        for hub_link in v["hubs"]
        if not is_hub_ignored(hub_link)
    ]

    con.executemany(
        "INSERT INTO hubs_pages (page_link, hub_link) VALUES (?, ?)", params
    )


def read_content_to_db(con: sqlite3.Connection, pool: Pool, path: str):
    json_values = list(json_loads(path).values())
    parse_and_insert_page_content(
        con, pool, json_values, tqdm_description=os.path.basename(path)
    )
    parse_and_insert_page_hub_links(con, json_values)


def main():
    con = sqlite3.connect(DB_PATH, autocommit=False)

    with con:
        con.execute("DELETE FROM hubs_pages")

    with con, mp.Pool(16) as pool:
        # db_create_tables(con)

        paths = list(get_content_json_paths())

        for path in tqdm(paths, total=len(paths), position=1):
            read_content_to_db(con, pool, path)

    con.close()

    return 0


if __name__ == "__main__":
    sys.exit(main())
