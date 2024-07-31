import { ReactNode, useEffect, useMemo, useState } from "react";
import { fetchSimilarityData } from "../services/similarity";
import { AppContextType, MainData } from "./AppContext";

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<MainData | null>(null);
  const [selectedLink, setSelectedLink] = useState<string>("");

  useEffect(() => {
    const ac = new AbortController();
    fetchSimilarityData(ac.signal).then(
      ([corpus, buf]) => {
        if (ac.signal.aborted) return;
        setData({ corpus, buf });
        setSelectedLink(corpus[0]);
      },
      (e) => {
        if (ac.signal.aborted) return;
        throw e;
      },
    );
    return () => {
      ac.abort();
    };
  }, []);

  const contextValue = useMemo(
    () => ({ ...(data ?? {}), selectedLink, setSelectedLink }),
    [data, selectedLink, setSelectedLink],
  );

  if (!contextValue.corpus || !contextValue.buf) {
    return <div>Loading...</div>;
  }

  return (
    <AppContextType.Provider value={contextValue as AppContextType}>
      {children}
    </AppContextType.Provider>
  );
};
