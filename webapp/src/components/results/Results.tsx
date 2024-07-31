import { CSSProperties, useLayoutEffect, useMemo } from "react";
import { styled } from "styled-components";
import { mainContainer } from "../../common/ui-constants";
import { useAppContext } from "../../context/useAppContext";
import { extractSimilarityData } from "../../services/similarity";
import { Table, TableForScrollHeader, useTableScrollWrapper } from "../Table";
import { HubResult } from "./HubsTable";
import {
  ActionsColumnCell,
  colorMap,
  PageColumnCell,
  ResultSearchButton,
  ResultSearchIcon,
  ResultWikiLink,
  ResultWikiLinkText,
  SimilarityColumnCell,
  SimilarityValue,
  TextLink,
} from "./ResultsComponents";

const ResultWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #24262b;
`;

const ResultContainer = styled.div`
  ${mainContainer}
`;

function Results() {
  const { corpus, buf, selectedLink, setSelectedLink } = useAppContext();

  const items = useMemo(() => {
    const index = corpus.indexOf(selectedLink);
    const items = extractSimilarityData(buf, corpus, index);
    return items;
  }, [buf, corpus, selectedLink]);

  const { TableScrollWrapper, resetScrollPosition, tableScrollWrapperProps } =
    useTableScrollWrapper();

  useLayoutEffect(() => {
    resetScrollPosition();
  }, [resetScrollPosition, selectedLink]);

  return (
    <ResultWrapper>
      <ResultContainer>
        <h2>
          Pages similar to{" "}
          <ResultWikiLink
            $underline
            href={`https://scp-wiki.wikidot.com/${encodeURI(selectedLink)}`}
            title={`https://scp-wiki.wikidot.com/${encodeURI(selectedLink)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ResultWikiLinkText>{selectedLink}</ResultWikiLinkText>
          </ResultWikiLink>
        </h2>
        {/* <p>Page: {selectedLink}</p> */}
        <p>
          The similarity score represents the{" "}
          <TextLink
            href="https://www.algolia.com/blog/product/semantic-textual-similarity-a-game-changer-for-search-results-and-recommendations/"
            rel="noopener noreferrer"
          >
            semantic textual similarity
          </TextLink>{" "}
          of each page to the selected page, i.e. how similar the "meaning" of
          the content is.
        </p>

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
              {items.map(({ link, similarity }) => {
                return (
                  <tr key={link}>
                    <SimilarityColumnCell>
                      <SimilarityValue
                        style={
                          {
                            "--similarity-color": colorMap.color(
                              similarity,
                              0,
                              1,
                            ),
                          } as CSSProperties
                        }
                      >
                        {(similarity * 100).toFixed(2)}
                      </SimilarityValue>
                    </SimilarityColumnCell>
                    <PageColumnCell>
                      <ResultWikiLink
                        href={`https://scp-wiki.wikidot.com/${encodeURI(link)}`}
                        title={`https://scp-wiki.wikidot.com/${encodeURI(link)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ResultWikiLinkText>{link}</ResultWikiLinkText>
                      </ResultWikiLink>
                    </PageColumnCell>
                    <ActionsColumnCell>
                      <ResultSearchButton
                        onClick={() => {
                          setSelectedLink(link);
                        }}
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

        <HubResult selectedLink={selectedLink} items={items} />
      </ResultContainer>
    </ResultWrapper>
  );
}

export default Results;
