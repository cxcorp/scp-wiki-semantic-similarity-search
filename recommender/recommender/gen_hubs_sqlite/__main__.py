from enum import auto
import sqlite3
import sys
import os

from recommender.common.constants import DB_PATH, WEBAPP_HUBS_SQLITE_PATH


def main():
    """Dumps hub<->page linkings from the main preprocessed SQLite3 file
    into a separate SQLite3 file which is optimized for reading on the web
    via HTTPVFS.
    """
    try:
        os.remove(WEBAPP_HUBS_SQLITE_PATH)
    except OSError:
        pass

    input_con = sqlite3.connect(DB_PATH, autocommit=False)
    with input_con:
        data = input_con.execute(
            "select page_link, hub_link from hubs_pages"
        ).fetchall()
    input_con.close()

    output_con = sqlite3.connect(WEBAPP_HUBS_SQLITE_PATH, autocommit=False)
    with output_con:
        output_con.executescript(
            """
            CREATE TABLE hubs_pages (page_link TEXT NOT NULL, hub_link TEXT NOT NULL);
            """
        )
        # could add separate ID tables for page and hub links to dramatically reduce
        # the size of the sqlite file but it's like 1.5MB, whatever.
        output_con.executemany(
            "INSERT INTO hubs_pages (page_link, hub_link) VALUES (?, ?)", data
        )
        output_con.executescript(
            """
            CREATE INDEX hubs_pages_page_link_idx ON hubs_pages(page_link);
            CREATE INDEX hubs_pages_hublink_idx ON hubs_pages(hub_link);
            """
        )
    output_con.close()

    # need to reopen with autocommit=True or otherwise execute opens a trx?
    output_con = sqlite3.connect(WEBAPP_HUBS_SQLITE_PATH, autocommit=True)
    # https://github.com/phiresky/sql.js-httpvfs/blob/c64536d2acc78feeac17c34bfa1895df01050129/README.md#usage
    output_con.execute("pragma journal_mode = delete;")
    output_con.execute("pragma page_size = 4096;")
    output_con.execute("vacuum;")
    output_con.close()

    return 0


if __name__ == "__main__":
    sys.exit(main())
