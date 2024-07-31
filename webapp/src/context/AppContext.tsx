import { createContext } from "react";

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
