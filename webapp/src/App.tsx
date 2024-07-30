import {
  ChangeEvent,
  ComponentType,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  FixedSizeList as _FixedSizeList,
  FixedSizeListProps,
} from "react-window";
import type { Database } from "sql.js";
import { CSSProperties, styled } from "styled-components";
import { AppContextType, MainData, useAppContext } from "./AppContext";
import { ColorMap } from "./color/colorMap";
import { initSqliteDb } from "./sqlite";

const FixedSizeList = _FixedSizeList as ComponentType<FixedSizeListProps>;

const SidebarItem = styled.li`
  margin: 0;
  line-height: 40px;
  vertical-align: middle;
`;

interface SidebarListRowProps {
  index: number;
  style: CSSProperties;
  data: string[];
}

const SidebarButton = styled.button`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0 10px;
  overflow: hidden;

  border-radius: 0;
  background: none;
  font-weight: normal;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SidebarListRow = ({ index, style, data }: SidebarListRowProps) => {
  const setSelectedLink = useAppContext((c) => c.setSelectedLink);
  const value = data[index];

  const handleClick = useCallback(() => {
    setSelectedLink(value);
  }, [value, setSelectedLink]);

  return (
    <SidebarItem style={style}>
      <SidebarButton onClick={handleClick}>{value}</SidebarButton>
    </SidebarItem>
  );
};

const StyledFixedSizeList = styled(FixedSizeList)`
  list-style-type: none;
  padding: 0;
  margin: 0;

  ${SidebarItem}:not(:first-child) {
    //border-top: 1px solid gray;
    box-shadow: 0 -1px 0 0 gray;
  }
`;

const StyledSidebar = styled.aside`
  width: 300px;

  @media only screen and (max-width: 576px) {
    width: 100%;
    height: 50vh;
    overflow-y: hidden;
    border-bottom: 1px solid #ccc;
  }
`;

const StyledApp = styled.div`
  display: flex;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  font-size: 16px;
  padding: 5px 10px;
  width: 100%;
`;

const SearchWrapper = styled.div`
  padding-bottom: 1rem;
  padding-top: 1rem;
  display: flex;
  align-items: stretch;
`;

interface SidebarCorpusListProps {
  searchFilter: string;
}

const itemKey = (index: number, data: string[]) => data[index];

const SidebarCorpusList = ({ searchFilter }: SidebarCorpusListProps) => {
  const { corpus } = useAppContext();

  const filteredCorpus = useMemo(() => {
    const trimmedFilter = searchFilter.trim();
    const shownList =
      trimmedFilter.length >= 3
        ? corpus.filter((link) => link.includes(trimmedFilter))
        : corpus;
    return [...shownList].sort();
  }, [searchFilter, corpus]);

  return (
    <StyledFixedSizeList
      innerElementType="ul"
      height={720}
      width="100%"
      itemSize={40}
      itemCount={filteredCorpus.length}
      itemData={filteredCorpus}
      itemKey={itemKey}
      children={SidebarListRow}
    />
  );
};

const SearchSidebar = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <StyledSidebar>
      <SearchWrapper>
        <SearchInput
          value={search}
          onChange={useCallback(
            (e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.currentTarget.value),
            []
          )}
        />
        <button
          onClick={useCallback(() => {
            setSearch("");
          }, [])}
        >
          x
        </button>
      </SearchWrapper>
      <SidebarCorpusList searchFilter={search} />
    </StyledSidebar>
  );
};

const basePath = import.meta.env.VITE_BASE_PATH || "";

function App() {
  const [data, setData] = useState<MainData | null>(null);
  const [selectedLink, setSelectedLink] = useState<string>("");

  useEffect(() => {
    const corpusP = fetch(`${basePath}/corpus.txt`)
      .then((res) => res.text())
      .then((lines): string[] =>
        // this array MUST NOT be sorted!
        // the indices here correspond to the indices in matches.bin
        lines
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => !!l)
      );
    const bufP = fetch(`${basePath}/matches.bin`).then((res) =>
      res.arrayBuffer()
    );

    Promise.all([corpusP, bufP]).then(([corpus, buf]) => {
      setData({ corpus, buf });
      setSelectedLink(corpus[0]);
    });
  }, []);

  const contextValue = useMemo(
    () => ({ ...(data ?? {}), selectedLink, setSelectedLink }),
    [data, selectedLink, setSelectedLink]
  );

  if (!data) {
    return <div className="app">loading</div>;
  }

  return (
    <AppContextType.Provider value={contextValue as any}>
      <StyledApp>
        <SearchSidebar />
        <Result />
      </StyledApp>
    </AppContextType.Provider>
  );
}

const extractData = (buf: ArrayBuffer, corpus: string[], index: number) => {
  const items: SimilarityItem[] = [];

  const view = new DataView(buf);

  const itemLen = 2 + 4;
  const rowLen = 50 * itemLen;

  const offset = index * rowLen;

  for (let i = 0; i < 50; i++) {
    const corpusIndexOfThisItem = view.getUint16(offset + i * itemLen, true);
    if (corpusIndexOfThisItem < 0 || corpusIndexOfThisItem > corpus.length) {
      console.error({
        corpusIndexOfThisItem,
        index,
        buf,
        corpus,
      });
      throw new Error(`corpusIndexOfThisItem out of range`);
    }

    items.push({
      link: corpus[corpusIndexOfThisItem],
      similarity: view.getFloat32(offset + i * itemLen + 2, true),
    });
  }

  return items;
};

const colorMap = new ColorMap("viridis");

const ResultWikiLink = styled.a`
  color: inherit;
  text-decoration: none;
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

interface SimilarityItem {
  link: string;
  similarity: number;
}

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
              showSinglePageHubs ? pages : pages.length > 1
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

const ResultColumnsWrapper = styled.div`
  display: flex;

  @media only screen and (min-width: 577px) {
    align-items: flex-start;
    justify-content: flex-start;

    & > div {
      padding: 0 10px;
    }
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
  }
`;

const paramHolders = (count: number) => Array(count).fill("?").join(", ");

const StyledResult = styled.div`
  padding: 0 50px;
  width: 100%;

  @media only screen and (max-width: 576px) {
    padding: 0 5px;
  }

  & td {
    white-space: nowrap;
  }
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
        [...items.map((i) => i.link)]
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

function Result() {
  const { corpus, buf, selectedLink, setSelectedLink } = useAppContext();

  const items = useMemo(() => {
    const index = corpus.indexOf(selectedLink);
    const items = extractData(buf, corpus, index);
    return items;
  }, [buf, corpus, selectedLink]);

  return (
    <StyledResult>
      <h1>{selectedLink}</h1>

      <ResultColumnsWrapper>
        <div>
          <h2>Top 50 most similar pages</h2>
          <table>
            <tbody>
              {items.map(({ link, similarity }) => {
                return (
                  <tr key={link}>
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
                );
              })}
            </tbody>
          </table>
        </div>

        <HubResult selectedLink={selectedLink} items={items} />
      </ResultColumnsWrapper>
    </StyledResult>
  );
}

export default App;
