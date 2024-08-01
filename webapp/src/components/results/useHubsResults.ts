import { useEffect, useMemo, useState } from "react";
import type { Database } from "sql.js";
import { basePath } from "../../common/ui-constants";
import { SimilarityItem } from "../../services/similarity";
import { initSqliteDb } from "../../sqlite";

const usePageHubsDb = () => {
  const [db, setDb] = useState<Database>();

  useEffect(() => {
    let isUnmounted = false;
    let db: Database | undefined = undefined;

    const loadDatabase = async () => {
      const remoteUrl = `${basePath}/hubs.sqlite`;

      db = await initSqliteDb(remoteUrl);

      if (isUnmounted) {
        db.close();
        return;
      }

      setDb(() => db);
    };

    loadDatabase();

    return () => {
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
  pageToHubs: Record<PageLink, string[]>;
  hubToPages: Record<string, PageLink[]>;
}

const paramHolders = (count: number) => Array(count).fill("?").join(", ");

const useHubInfo = (pageLink: PageLink, similarityItems: SimilarityItem[]) => {
  const { db } = usePageHubsDb();

  const [hubInfo, setHubInfo] = useState<HubInfo | undefined>();

  useEffect(() => {
    const fetchHubInfo = () => {
      if (
        !db ||
        // calling .close() sets db.db to null - this seems to be the easiest way of checking if this db is already closed
        !(db as any)["db"] ||
        !pageLink
      ) {
        return undefined;
      }

      const [res2] = db.exec(
        `
          SELECT page_link, hub_link
          FROM hubs_pages
          WHERE
            page_link IN (${paramHolders(similarityItems.length)})
          `,
        [...similarityItems.map((i) => i.link)],
      );
      if (!res2) {
        console.log(`no hub info found for pages in items`);
        return {
          for: pageLink,
          pageToHubs: Object.create(null),
          hubToPages: Object.create(null),
        };
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

      return { for: pageLink, pageToHubs, hubToPages };
    };

    const hubInfo = fetchHubInfo();
    setHubInfo(() => hubInfo);

    return () => {
      setHubInfo(() => undefined);
    };
  }, [db, pageLink, similarityItems]);

  return hubInfo;
};

export interface HubResultItem {
  title: string;
  link: string;
  items: SimilarityItem[];
}

export const useHubsResults = (
  pageLink: PageLink,
  similarityItems: SimilarityItem[],
): HubResultItem[] | undefined => {
  const hubInfo = useHubInfo(pageLink, similarityItems);

  return useMemo(() => {
    if (!hubInfo || hubInfo.for !== pageLink) {
      return undefined;
    }

    // assumption: similarityItems is the correct list for pageLink
    const pageLinkToSimilarityItem = similarityItems.reduce<
      Record<string, SimilarityItem>
    >((acc, val) => ((acc[val.link] = val), acc), Object.create(null));

    return (
      Object.entries(hubInfo.hubToPages)

        .map(([hubLink, pageLinks]) => {
          const pageItems = pageLinks
            .map((link) => pageLinkToSimilarityItem[link])
            .filter((i) => !!i)
            // sort individual items inside the hub by similarity
            .sort((a, b) => b.similarity - a.similarity);
          return { title: hubLink, link: hubLink, items: pageItems };
        })
        // sort hubs by highest similarity of first item
        .sort(
          (a, b) =>
            (b.items[0]?.similarity ?? 0) - (a.items[0]?.similarity ?? 0),
        )
    );
  }, [hubInfo, pageLink, similarityItems]);
};
