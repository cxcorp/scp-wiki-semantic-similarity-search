import { createContext, useContext, useMemo } from "react";

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

export function useAppContext<T extends {} = AppContextType>(
  selector?: (ctx: AppContextType) => T
): T {
  const ctx = useContext(AppContextType);
  const value = selector ? selector(ctx) : ctx;
  return useMemo(() => value, [value]) as any;
}
