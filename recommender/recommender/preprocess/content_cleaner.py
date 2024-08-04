import re
import time
import unicodedata
from bs4 import BeautifulSoup

unwanted_element_selectors = [
    # ACS
    # remove the danger diamond from the anomaly classification system banner (https://scp-wiki.wikidot.com/classification-committee-memo)
    # as it contains invisible text
    ".anom-bar .diamond-part",
    ".anom-bar .level",
    # ACS but only extra column used, still leaves the main part in the DOM
    # untemplated but display:hidden
    'div[style*="display: none"]:has(> .anom-bar-container)',
    # Document Transcript Swapper
    ".document-swapper .docbox-selector",
    # ID Cards
    ".foundation-id-card .expire",
    ".foundation-id-card .barcode",
    # Wikimodule
    ".collection:has(> .collapsible-block)",
    # some GOI pages have a hidden element that shows the page source
    'div[style]:has(> div[style] > div.collapsible-block > div.collapsible-block-folded > a.collapsible-block-link:-soup-contains("+\u00A0CODE"))',
    "div.code > .hl-main",
]

unwanted_ids = {
    # Passcode
    "logic",
    # Adult warning
    "u-adult-warning",
}

unwanted_classnames = {
    # Audio player woed
    "player-wrapper",
    # Author link
    "authorlink-wrapper",
    "footer-wikiwalk-nav",
    "earthworm",
    # Ratio bar
    "rate_t3",
    # component:image-features-source
    # sometimes the caption has useful in-story content, but meh
    "scp-image-block",
    # component:vaf-links
    "navigation-links",
    # component:image-pager
    "page-flipper",
    # Info Rating Module
    "creditRate",
    # Info Rating Module
    "page-rate-widget-box",
    # Advanced Navigation Toolbar (ANT)
    "cell-container",
    "footnotes",
    "footnotes-footer",
    "licensebox",
    "pseudocrumbs",
    "modal-wrapper",
    # https://scp-wiki.wikidot.com/component:info-ayers
    "info-container",
    "collapsible-block-link",
    # module ListPages
    "list-pages-box",
    # hidden thumbnail from crom.aic
    "crom-thumbnail",
}


def is_unwanted_classname(css_class):
    return css_class in unwanted_classnames


def is_unwanted_id(css_id):
    return css_id in unwanted_ids


selector_unwanted = ",".join(unwanted_element_selectors)


def remove_unwanted_elements(soup: BeautifulSoup):
    # css.select is quite slow - remove by simple classnames first
    # as .find_all() is faster. this will make css.select faster
    # since it has fewer elements to worry about
    unwanted = soup.find_all(class_=is_unwanted_classname)
    for el in unwanted:
        if el is not None and not el.decomposed:
            el.decompose()

    unwanted = soup.find_all(id=is_unwanted_id)
    for el in unwanted:
        if el is not None and not el.decomposed:
            el.decompose()

    unwanted = list(soup.css.select(selector_unwanted))

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


def unicode_replacements(text: str) -> str:
    # replace unicode spaces with normal space
    text = re.sub(
        r"[\u1680​\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a​\u200b​\u202f\u205f​\u3000]",
        " ",
        text,
    )
    return (
        text.replace("‘", "'")
        .replace("‛", "'")
        .replace("’", "'")
        .replace("“", '"')
        .replace("‟", '"')
        .replace("”", '"')
    )


unwanted_regexes = [
    r"\nby qntm(\s+Previously\s)?",
    # componant that has leaked unbound variables into the DOM, e.g. acs-extra "{$class-category-2}"
    r"{\$[\w\d-]+}",
    # homegrown navbar
    r"« [^\n]+ \| [^\n]+ \| [^ \n]+ »",
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
    text = unicode_replacements(text)
    text = remove_excessive_censorship_symbols(text)
    text = remove_excessive_newlines_and_spaces(text)
    text = text.strip()

    # perform compatibility decomposition to get rid of fancy letters etc., then i guess compose
    text = unicodedata.normalize("NFKC", text)

    return text
