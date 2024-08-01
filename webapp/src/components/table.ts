import { styled } from "styled-components";

export const tableRowHeight = 36;

export const Table = styled.table`
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  border-spacing: 0;

  --tr-box-shadow: inset 0 -1px #d9edfe15;

  thead tr:first-of-type {
    --tr-box-shadow: inset 0 1px #d9edfe25, inset 0 -1px #d9edfe25;
  }

  th,
  td {
    box-shadow: var(--tr-box-shadow);
    height: ${tableRowHeight}px;
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

  tr:nth-child(2n + 1) td {
    background-color: #1c1d20;
  }

  tr:hover td {
    background-color: #1e1f21;
  }

  th {
    position: sticky;
    top: 0;
  }

  --border-radius: 5px;
  thead tr:first-child > th:first-child {
    border-top-left-radius: var(--border-radius);
  }
  thead tr:first-child > th:last-child {
    border-top-right-radius: var(--border-radius);
  }
  tbody tr:last-child > td:first-child {
    border-bottom-left-radius: var(--border-radius);
  }
  tbody tr:last-child > td:last-child {
    border-bottom-right-radius: var(--border-radius);
  }
`;
