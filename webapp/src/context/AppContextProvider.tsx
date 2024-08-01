import { ReactNode, useEffect, useMemo, useState } from "react";
import { AppContextType, MainData } from "../context/AppContext";
import { fetchSimilarityData } from "../services/similarity";

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<MainData | null>(null);
  const [selectedLink, setSelectedLink] = useState<string>("");

  useEffect(() => {
    const ac = new AbortController();
    fetchSimilarityData(ac.signal).then(
      ([corpus, buf]) => {
        if (ac.signal.aborted) return;
        setData({ corpus, buf });
        setSelectedLink(corpus[Math.floor(Math.random() * corpus.length)]);
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

export default AppContextProvider;
