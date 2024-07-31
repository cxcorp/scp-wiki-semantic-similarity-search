import styled from "styled-components";
import { ColorMap } from "../../color/colorMap";
import { bp } from "../../common/breakpoints";
import SearchIcon from "../SearchIcon";

export const colorMap = new ColorMap("viridis");

export const SimilarityValue = styled.span`
  &::before {
    content: "";
    display: inline-block;
    --size: 10px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    // --similarity-color set by inline style because styled-components
    // generates a unique class for each prop value variation
    background-color: var(--similarity-color);
    // hack to vertically align it middle

    // add breathing room between text
    margin-right: 4px;
  }
`;

export const ResultSearchIcon = styled(SearchIcon)`
  --size: 14px;
  height: var(--size);
  width: var(--size);
  margin-right: 4px;
`;

export const ResultSearchButton = styled.button`
  display: flex;
  align-items: center;

  line-height: 0;
  color: var(--color-subtitle);
  border: none;
  background: none;
  padding: 8px 8px;
  text-decoration: none;

  &:hover {
    color: #2684ff;
  }
`;

export const SimilarityColumnCell = styled.td`
  width: 100px;

  ${bp.sm(`
    width: 120px;
  `)}
`;

export const PageColumnCell = styled.td`
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const ActionsColumnCell = styled.td`
  width: 1%;
  white-space: nowrap;
`;

export const TextLink = styled.a`
  color: inherit;
  text-decoration: underline;

  &:hover {
    color: #2684ff;
  }
`;
