import { useEffect, useState } from "react";
import type { Database } from "sql.js";
import { basePath } from "../../common/ui-constants";
import { useAppContext } from "../../context/useAppContext";
import { SimilarityItem } from "../../services/similarity";
import { initSqliteDb } from "../../sqlite";
import { ExternalLink } from "./ExternalLink";
import { colorMap, ResultSearchButton } from "./ResultsComponents";

const loggerToCount: Record<string, number> = Object.create(null);
const logger = (prefix: string) => {
  const id = loggerToCount[prefix] ?? (loggerToCount[prefix] = 0);
  loggerToCount[prefix]++;

  return (msg: string) => {
    console.log(`[${prefix} ${id}] ${msg}`);
  };
};

const usePageHubsDb = () => {
  const [db, setDb] = useState<Database>();

  useEffect(() => {
    const log = logger("usePageHubsDb");
    let isUnmounted = false;
    let db: Database | undefined = undefined;

    const loadDatabase = async () => {
      const remoteUrl = `${basePath}/hubs.sqlite`;

      log("begin init");
      db = await initSqliteDb(remoteUrl);

      if (isUnmounted) {
        log("initSqliteDb finish but is unmounted -> close");
        db.close();
        return;
      }

      log("initSqliteDb finish, setDb()");
      setDb(() => db);
    };

    loadDatabase();

    return () => {
      log("initSqliteDb unmount hook, closing");
      isUnmounted = true;
      setDb(() => undefined);
      db?.close();
    };
  }, []);

  return { db };
};

type PageLink = string;

interface HubInfo {
  for: PageLink;
  pageToHubs: Record<string, string[]>;
  hubToPages: Record<string, string[]>;
}

const HubInfoList = ({
  hubInfo,
  items,
}: {
  hubInfo: HubInfo;
  items: SimilarityItem[];
}) => {
  const [showSinglePageHubs, setShowSinglePageHubs] = useState<boolean>(false);
  const setSelectedLink = useAppContext((c) => c.setSelectedLink);

  const allHubsToPages = Object.entries(hubInfo.hubToPages);
  const canToggleShowSinglePageHubs =
    allHubsToPages.length !==
    allHubsToPages.filter(([, pages]) => pages.length > 1).length;

  return (
    <div>
      <table>
        <tbody>
          {allHubsToPages
            .sort(([, a], [, b]) => b.length - a.length)
            .filter(([, pages]) =>
              showSinglePageHubs ? pages : pages.length > 1,
            )
            .flatMap(([hub, pages]) => {
              const pageItems = pages
                .map((link) => {
                  const match = items.find((i) => i.link === link);
                  return match;
                })
                .filter((a) => !!a)
                .sort((a, b) => b.similarity - a.similarity);

              return [
                <tr key={`hub:${hub}`}>
                  <th
                    colSpan={4}
                    style={{
                      textAlign: "left",
                      fontWeight: "normal",
                      borderBottom: "1px solid grey",
                    }}
                  >
                    {hub}
                  </th>
                </tr>,
                ...pageItems.map(({ link, similarity }) => (
                  <tr key={`hub:${hub}-page:${link}`}>
                    <td style={{ padding: "0 5px" }}>
                      <ResultSearchButton
                        onClick={() => {
                          setSelectedLink(link);
                        }}
                      >
                        Search
                      </ResultSearchButton>
                    </td>
                    <td style={{ padding: "0 5px" }}>
                      <ExternalLink
                        href={`https://scp-wiki.wikidot.com/${encodeURI(link)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wiki
                      </ExternalLink>
                    </td>
                    <td
                      style={{
                        backgroundColor: colorMap.color(similarity, 0, 1),
                        color: "#000",
                      }}
                    >
                      {similarity.toFixed(3)}
                    </td>
                    <td
                      style={{
                        paddingLeft: "10px",
                      }}
                    >
                      {link}
                    </td>
                  </tr>
                )),
                <tr key={`padding:${hub}`} style={{ height: "10px" }}></tr>,
              ];
            })}
        </tbody>
      </table>

      {canToggleShowSinglePageHubs && (
        <label style={{ paddingTop: "1rem", display: "block" }}>
          <input
            type="checkbox"
            checked={showSinglePageHubs}
            onChange={(e) => {
              const on = e.currentTarget.checked;
              setShowSinglePageHubs(() => on);
            }}
          />{" "}
          Show more
        </label>
      )}
    </div>
  );
};

const paramHolders = (count: number) => Array(count).fill("?").join(", ");

export function HubResult({
  selectedLink,
  items,
}: {
  selectedLink: string;
  items: SimilarityItem[];
}) {
  const { db } = usePageHubsDb();

  const [hubInfo, setHubInfo] = useState<HubInfo | undefined>();

  useEffect(() => {
    const fetchHubInfo = () => {
      if (
        !db ||
        // calling .close() sets db.db to null - this seems to be the easiest way of checking if this db is already closed
        !(db as any)["db"] ||
        !selectedLink
      ) {
        console.log("no db, db closed, or no selected link");
        return undefined;
      }

      const [res2] = db.exec(
        `
          SELECT page_link, hub_link
          FROM hubs_pages
          WHERE
            page_link IN (${paramHolders(items.length)})
          `,
        [...items.map((i) => i.link)],
      );
      if (!res2) {
        console.log(`no hub info found for pages in items`);
        return undefined;
      }

      const queryResults = res2.values as string[][];

      const pageToHubs: Record<string, string[]> = Object.create(null);
      const hubToPages: Record<string, string[]> = Object.create(null);

      for (const [page, hub] of queryResults) {
        const pageHubs = pageToHubs[page] || (pageToHubs[page] = []);
        pageHubs.push(hub);

        const hubPages = hubToPages[hub] || (hubToPages[hub] = []);
        hubPages.push(page);
      }

      return { for: selectedLink, pageToHubs, hubToPages };
    };

    const hubInfo = fetchHubInfo();
    setHubInfo(() => hubInfo);

    return () => {
      setHubInfo(() => undefined);
    };
  }, [db, selectedLink, items]);

  if (!hubInfo || hubInfo.for !== selectedLink) {
    console.log("hubinfo not for this", {
      selectedLink,
      hubInfo: JSON.parse(JSON.stringify(hubInfo ?? "undefined")),
      items: JSON.parse(JSON.stringify(items)),
    });
    return null;
  }

  console.log("hubinfo for this", {
    selectedLink,
    hubInfo: JSON.parse(JSON.stringify(hubInfo ?? "undefined")),
    items: JSON.parse(JSON.stringify(items)),
  });

  return (
    <div>
      <h2>Top 50 similar pages by hub</h2>
      <p></p>
      <HubInfoList hubInfo={hubInfo} items={items} />
    </div>
  );
}
