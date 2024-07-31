import { useCallback, useMemo, useRef } from "react";
import { styled } from "styled-components";

export const Table = styled.table`
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  border-spacing: 0;

  --tr-box-shadow: inset 0 -1px #d9edfe25;

  th,
  td {
    box-shadow: var(--tr-box-shadow);
    height: 36px;
  }

  th:first-child,
  td:first-child {
    padding-left: 8px;
  }

  th {
    background-color: #1f2123;
    font-weight: 700;
  }

  td {
    background-color: #18191b;
  }

  tbody tr:nth-child(2n) td {
    background-color: #1c1d20;
  }

  tbody tr:hover td {
    background-color: #1e1f21;
  }

  --border-radius: 5px;
  thead > tr:first-child > th:first-child {
    border-top-left-radius: var(--border-radius);
  }
  thead > tr:first-child > th:last-child {
    border-top-right-radius: var(--border-radius);
  }
  tbody > tr:last-child > td:first-child {
    border-bottom-left-radius: var(--border-radius);
  }
  tbody > tr:last-child > td:last-child {
    border-bottom-right-radius: var(--border-radius);
  }
`;

const ScrollWrapper = styled.div`
  max-height: calc(min(70vh, 600px));
  max-height: calc(min(70svh, 600px));
  overflow-y: scroll;
  position: relative;
`;

export const TableForScrollHeader = styled(Table)`
  position: sticky;
  top: 0;
`;

export const useTableScrollWrapper = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const tableScrollWrapperProps = useMemo(() => ({ ref: divRef }), []);

  const resetScrollPosition = useCallback(() => {
    if (!divRef.current) return;
    divRef.current.scrollTo(0, 0);
  }, []);

  return {
    TableScrollWrapper: ScrollWrapper,
    tableScrollWrapperProps,
    resetScrollPosition,
  };
};
