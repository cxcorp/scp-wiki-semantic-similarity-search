import { useContext, useMemo } from "react";
import { AppContextType } from "./AppContext";

export function useAppContext<T = AppContextType>(
  selector?: (ctx: AppContextType) => T,
): T {
  const ctx = useContext(AppContextType);
  const value = selector ? selector(ctx) : ctx;
  return useMemo(() => value, [value]) as any;
}
