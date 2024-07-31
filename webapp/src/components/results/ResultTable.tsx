import { CSSProperties, useLayoutEffect } from "react";
import { SimilarityItem } from "../../services/similarity";
import { Table, TableForScrollHeader, useTableScrollWrapper } from "../Table";
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

interface ResultTableProps {
  items: SimilarityItem[];
  onItemShowClicked: (itemLink: string) => void;
}

export const ResultTable = ({ items, onItemShowClicked }: ResultTableProps) => {
  const { TableScrollWrapper, resetScrollPosition, tableScrollWrapperProps } =
    useTableScrollWrapper();

  useLayoutEffect(() => {
    resetScrollPosition();
  }, [resetScrollPosition, items]);

  return (
    <TableScrollWrapper {...tableScrollWrapperProps}>
      <TableForScrollHeader>
        {/* We have basically fixed size columns so we can just make this a separate
         * table and position:sticky it. If we had more than 2 columns, we'd have to
         * do something else because the column sizes need to be calculated from
         * the content. */}
        <thead>
          <tr>
            <SimilarityColumnCell as="th">Similarity</SimilarityColumnCell>
            <th>Page</th>
            <ActionsColumnCell as="th"></ActionsColumnCell>
          </tr>
        </thead>
      </TableForScrollHeader>

      <Table>
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
    </TableScrollWrapper>
  );
};
