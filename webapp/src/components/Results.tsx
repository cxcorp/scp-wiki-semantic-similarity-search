import {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import type { Database } from "sql.js";
import { styled } from "styled-components";
import { ColorMap } from "../color/colorMap";
import { basePath, mainContainer } from "../common/ui-constants";
import { useAppContext } from "../context/useAppContext";
import { extractSimilarityData, SimilarityItem } from "../services/similarity";
import { initSqliteDb } from "../sqlite";
import SearchIcon from "./SearchIcon";
import { Table, TableForScrollHeader, useTableScrollWrapper } from "./Table";
import { bp } from "../common/breakpoints";

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

const colorMap = new ColorMap("viridis");

const ResultWikiLinkText = styled.span``;

const ResultWikiLink = styled.a<{ $underline?: boolean }>`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: #646cff;
  }

  ${ResultWikiLinkText} {
    text-decoration: ${({ $underline }) => ($underline ? "underline" : "none")};
  }

  &:hover ${ResultWikiLinkText} {
    text-decoration: underline;
  }

  &::after {
    content: "🡥";
    font-family: sans-serif;
    display: inline;
    margin-left: 4px;
    text-decoration: none;
  }
`;

const ResultSearchButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  text-decoration: none;

  &:hover {
    color: #535bf2;
  }
`;

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
                      <ResultWikiLink
                        href={`https://scp-wiki.wikidot.com/${encodeURI(link)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wiki 🡥
                      </ResultWikiLink>
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

const ResultWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #24262b;
`;

const ResultContainer = styled.div`
  ${mainContainer}
`;

function HubResult({
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

const SimilarityValue = styled.span`
  &::before {
    content: "";
    display: inline-block;
    --size: 10px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    // --similarity-color set by inline style because styled-components
    // generates a unique class for each prop value variation
    background-color: var(--similarity-color);
    // hack to vertically align it middle

    // add breathing room between text
    margin-right: 4px;
  }
`;

const ResultSearchIcon = styled(SearchIcon)`
  --size: 14px;
  height: var(--size);
  width: var(--size);
  margin-right: 4px;
`;

const ResultSearchButton2 = styled.button`
  display: flex;
  align-items: center;

  line-height: 0;
  color: var(--color-subtitle);
  border: none;
  background: none;
  padding: 8px 8px;
  text-decoration: none;

  &:hover {
    color: #2684ff;
  }
`;

const SimilarityColumnCell = styled.td`
  width: 100px;

  ${bp.sm(`
    width: 120px;
  `)}
`;

const PageColumnCell = styled.td`
  padding-top: 8px;
  padding-bottom: 8px;
`;

const ActionsColumnCell = styled.td`
  width: 1%;
  white-space: nowrap;
`;

function Results() {
  const { corpus, buf, selectedLink, setSelectedLink } = useAppContext();

  const items = useMemo(() => {
    const index = corpus.indexOf(selectedLink);
    const items = extractSimilarityData(buf, corpus, index);
    return items;
  }, [buf, corpus, selectedLink]);

  const { TableScrollWrapper, resetScrollPosition, tableScrollWrapperProps } =
    useTableScrollWrapper();

  useLayoutEffect(() => {
    resetScrollPosition();
  }, [resetScrollPosition, selectedLink]);

  return (
    <ResultWrapper>
      <ResultContainer>
        <h2>
          Pages similar to{" "}
          <ResultWikiLink
            $underline
            href={`https://scp-wiki.wikidot.com/${encodeURI(selectedLink)}`}
            title={`https://scp-wiki.wikidot.com/${encodeURI(selectedLink)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ResultWikiLinkText>{selectedLink}</ResultWikiLinkText>
          </ResultWikiLink>
        </h2>
        {/* <p>Page: {selectedLink}</p> */}

        <TableScrollWrapper {...tableScrollWrapperProps}>
          <TableForScrollHeader>
            {/* We have basically fixed size columns so we can just make this a separate
             * table and position:sticky it. If we had more than 2 columns, we'd have to
             * do something else because the column sizes need to be calculated from
             * the content. */}
            <thead>
              <tr>
                <SimilarityColumnCell as="th">STS</SimilarityColumnCell>
                <th>Page</th>
                <ActionsColumnCell as="th"></ActionsColumnCell>
              </tr>
            </thead>
          </TableForScrollHeader>

          <Table>
            <tbody>
              {items.map(({ link, similarity }) => {
                return (
                  <tr key={link}>
                    <SimilarityColumnCell>
                      <SimilarityValue
                        style={
                          {
                            "--similarity-color": colorMap.color(
                              similarity,
                              0,
                              1,
                            ),
                          } as CSSProperties
                        }
                      >
                        {(similarity * 100).toFixed(2)}%
                      </SimilarityValue>
                    </SimilarityColumnCell>
                    <PageColumnCell>
                      <ResultWikiLink
                        href={`https://scp-wiki.wikidot.com/${encodeURI(link)}`}
                        title={`https://scp-wiki.wikidot.com/${encodeURI(link)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ResultWikiLinkText>{link}</ResultWikiLinkText>
                      </ResultWikiLink>
                    </PageColumnCell>
                    <ActionsColumnCell>
                      <ResultSearchButton2
                        onClick={() => {
                          setSelectedLink(link);
                        }}
                        title={`Show recommendations for ${link}`}
                      >
                        <ResultSearchIcon />
                        <span style={{ fontSize: "12px" }}>Show</span>
                      </ResultSearchButton2>
                    </ActionsColumnCell>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </TableScrollWrapper>

        <HubResult selectedLink={selectedLink} items={items} />
      </ResultContainer>
    </ResultWrapper>
  );
}

export default Results;
