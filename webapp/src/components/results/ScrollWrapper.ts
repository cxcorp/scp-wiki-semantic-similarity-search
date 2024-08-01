import { useCallback, useMemo, useRef } from "react";
import styled from "styled-components";

export const ScrollWrapper = styled.div`
  max-height: calc(min(70vh, 600px));
  max-height: calc(min(70svh, 600px));
  overflow-y: auto;
  position: relative;
`;

export const useScrollWrapper = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const scrollWrapperProps = useMemo(() => ({ ref: divRef }), []);

  const resetScrollPosition = useCallback(() => {
    if (!divRef.current) return;
    divRef.current.scrollTo(0, 0);
  }, []);

  return {
    scrollWrapperProps,
    resetScrollPosition,
  };
};
