import { CSSProperties, useLayoutEffect } from "react";
import styled from "styled-components";
import { SimilarityItem } from "../../services/similarity";
import { Table } from "../table";
import { ExternalLink } from "./ExternalLink";
import {
  ActionsColumnCell,
  colorMap,
  PageColumnCell,
  ResultSearchButton,
  ResultSearchIcon,
  SimilarityColumnCell,
  SimilarityValue,
} from "./ResultsComponents";
import { ScrollWrapper, useScrollWrapper } from "./ScrollWrapper";

interface ResultTableProps {
  items: SimilarityItem[];
  onItemShowClicked: (itemLink: string) => void;
}

const Container = styled(ScrollWrapper)`
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
`;

export const ResultTable = ({ items, onItemShowClicked }: ResultTableProps) => {
  const { resetScrollPosition, scrollWrapperProps } = useScrollWrapper();

  useLayoutEffect(() => {
    resetScrollPosition();
  }, [resetScrollPosition, items]);

  return (
    <Container {...scrollWrapperProps}>
      <Table>
        <thead>
          <tr>
            <SimilarityColumnCell as="th">Similarity</SimilarityColumnCell>
            <th>Page</th>
            <ActionsColumnCell as="th"></ActionsColumnCell>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const { link, similarity } = item;
            return (
              <tr key={link}>
                <SimilarityColumnCell>
                  <SimilarityValue
                    style={
                      {
                        "--similarity-color": colorMap.color(similarity, 0, 1),
                      } as CSSProperties
                    }
                  >
                    {(similarity * 100).toFixed(2)}
                  </SimilarityValue>
                </SimilarityColumnCell>
                <PageColumnCell>
                  <ExternalLink
                    href={`https://scp-wiki.wikidot.com/${encodeURI(link)}`}
                    title={`https://scp-wiki.wikidot.com/${encodeURI(link)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link}
                  </ExternalLink>
                </PageColumnCell>
                <ActionsColumnCell>
                  <ResultSearchButton
                    onClick={() => onItemShowClicked(link)}
                    title={`Show recommendations for ${link}`}
                  >
                    <ResultSearchIcon />
                    <span style={{ fontSize: "12px" }}>Show</span>
                  </ResultSearchButton>
                </ActionsColumnCell>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
