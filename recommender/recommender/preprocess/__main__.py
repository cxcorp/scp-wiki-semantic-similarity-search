from collections.abc import Iterable
import re
import sqlite3
from glob import glob
import sys
import os
from tqdm import tqdm
import multiprocessing as mp
from multiprocessing.pool import Pool
import orjson

from recommender.common.constants import WIKI_REPO_JSONS_PATH, DB_PATH
from recommender.preprocess.content_cleaner import cleanup_html_to_text
from recommender.preprocess.tags import tag_allowlist, tag_to_category


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
            CREATE TABLE IF NOT EXISTS pages(
                link        TEXT PRIMARY KEY,
                title       TEXT NOT NULL,
                url         TEXT NOT NULL,
                raw_content TEXT NOT NULL,
                raw_source  TEXT NOT NULL,
                text        TEXT NULL DEFAULT NULL
                -- references
            );

            CREATE TABLE IF NOT EXISTS tags(
                tag TEXT PRIMARY KEY,
                category TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS tags_pages(
                page_link TEXT NOT NULL,
                tag TEXT NOT NULL,
                PRIMARY KEY(page_link, tag)
            );

            CREATE TABLE IF NOT EXISTS hubs(
                link        TEXT PRIMARY KEY
            );

            CREATE TABLE IF NOT EXISTS hubs_pages(
                page_link   TEXT NOT NULL,
                hub_link    TEXT NOT NULL,
                PRIMARY KEY(page_link, hub_link)
            );
            """
    )
    con.commit()


def json_loads(path: str):
    with open(path, "r") as fp:
        json = fp.read()
    return orjson.loads(json)


def cleanp_content_mp_task(input):
    index, raw_content = input
    return (index, cleanup_html_to_text(raw_content))


def parse_and_cleanup_content_from_json(
    pool: Pool, json_values: list[dict], tqdm_description: str | None
):
    results = pool.imap_unordered(
        cleanp_content_mp_task,
        ((i, item["raw_content"]) for i, item in enumerate(json_values)),
        chunksize=16,
    )
    for i, text in tqdm(
        results, total=len(json_values), desc=tqdm_description, position=0
    ):
        json_values[i]["text"] = text
    # return (cleanup_content_json_to_items(x) for x in json_values)


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
    parse_and_cleanup_content_from_json(
        pool, json_values, tqdm_description=tqdm_description
    )
    params = [item_dict_to_sqlite_tuple(item) for item in json_values]
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
        "featured-scp-archive-ii",
        "featured-scp-archive",
        "featured-tale-archive-ii",
        "featured-tale-archive",
        "foundation-tales-audio-edition",
        "foundation-tales",
        "goi-formats",
        "lowest-rated-articles",
        "new-pages-feed",
        "news",
        "reviewers-spotlight-archive-ii",
        "reviewers-spotlight-archive",
        "scp-international",
        "scp-series",
        "shortest-pages-by-month",
        "tf-alpha-440",
        "top-rated-goi-formats",
        "top-rated-pages-by-month",
        "top-rated-pages-by-year",
        "top-rated-pages-this-month",
        "top-rated-pages",
        "top-rated-tales",
        "young-and-under-30",
        # non-story hubs
        "art-exchange",
        "reading-and-writing-club",
        # podcasts
        "advent-calendar-2015",
        "advent-calendar-2017",
        "author-s-corner-podcast-hub",
        "discovering-scp-hub",
        "fam-radio-season-02",
        "findusalivehub",
        "kaktuskast-hub",
        "object-class-podcast",
        "randomini-does-the-mouth-word-things",
        "scp-cafe-hub",
        "scp-play-podcast-hub",
        "simply-creative-people-hub",
        "the-scip-squad-podcast-hub",
        "theresacactusinthecorner",
        "tpias-hub",
        "ttrimmd",
        "wttf-podcast-hub",
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
        r"advent-calendar-\d+",
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
    con.executemany(
        "INSERT INTO hubs (link) VALUES (?) ON CONFLICT DO NOTHING",
        [(p[1],) for p in params],
    )


def is_tag_allowed(tag: str):
    return tag in tag_allowlist


def insert_page_tags(con: sqlite3.Connection, json_values: list[dict]):
    params = [
        (v["link"], tag)
        for v in json_values
        for tag in v["tags"]
        if is_tag_allowed(tag)
    ]
    con.executemany("INSERT INTO tags_pages (page_link, tag) VALUES (?, ?)", params)

    uniq_tags = list(
        set(tag for v in json_values for tag in v["tags"] if is_tag_allowed(tag))
    )
    tags_with_descriptions = [
        (tag, tag_to_category.get(tag)) for tag in uniq_tags if tag in tag_to_category
    ]
    con.executemany(
        "INSERT INTO tags(tag, category) VALUES (?, ?) ON CONFLICT DO NOTHING",
        tags_with_descriptions,
    )


def read_content_to_db(con: sqlite3.Connection, pool: Pool, path: str):
    json_values = list(json_loads(path).values())
    parse_and_insert_page_content(
        con, pool, json_values, tqdm_description=os.path.basename(path)
    )
    parse_and_insert_page_hub_links(con, json_values)
    insert_page_tags(con, json_values)


def main():
    con = sqlite3.connect(DB_PATH, autocommit=False)

    with con, mp.Pool(16) as pool:
        db_create_tables(con)

        paths = list(get_content_json_paths())

        for path in tqdm(paths, total=len(paths), position=1):
            read_content_to_db(con, pool, path)

    with con:
        con.executescript(
            """
            CREATE INDEX IF NOT EXISTS pages_link_idx ON pages(link);
            CREATE INDEX IF NOT EXISTS hubs_link_idx ON hubs(link);
            CREATE INDEX IF NOT EXISTS hubs_pages_page_link ON hubs_pages(page_link);
            CREATE INDEX IF NOT EXISTS hubs_pages_hub_link ON hubs_pages(hub_link);
            CREATE INDEX IF NOT EXISTS tags_pages_tag ON tags_pages(tag);
            CREATE INDEX IF NOT EXISTS tags_pages_page_link ON tags_pages(page_link);
            CREATE INDEX IF NOT EXISTS tags_tag ON tags(tag);
            """
        )

    con.close()

    return 0


if __name__ == "__main__":
    sys.exit(main())
