import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { fetchSimilarityData } from "../services/similarity";

export interface MainData {
  corpus: string[];
  buf: ArrayBuffer;
}

export interface AppContextType extends MainData {
  selectedLink: string;
  setSelectedLink: (link: string) => void;
}

export const AppContextType = createContext<AppContextType>({
  corpus: [],
  buf: new ArrayBuffer(0),
  selectedLink: "",
  setSelectedLink: () => {},
});

export function useAppContext<T = AppContextType>(
  selector?: (ctx: AppContextType) => T,
): T {
  const ctx = useContext(AppContextType);
  const value = selector ? selector(ctx) : ctx;
  return useMemo(() => value, [value]) as any;
}

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
