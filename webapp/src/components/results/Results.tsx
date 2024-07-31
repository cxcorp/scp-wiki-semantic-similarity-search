import { useMemo } from "react";
import { styled } from "styled-components";
import { mainContainer } from "../../common/ui-constants";
import { useAppContext } from "../../context/useAppContext";
import { extractSimilarityData } from "../../services/similarity";
import { ExternalLink } from "./ExternalLink";
import { HubResult } from "./HubsTable";
import { TextLink } from "./ResultsComponents";
import { ResultTable } from "./ResultTable";

const ResultWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #24262b;
  padding-bottom: var(--space-8);
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

  return (
    <ResultWrapper>
      <ResultContainer>
        <h2>
          Pages similar to{" "}
          <ExternalLink
            underline
            href={`https://scp-wiki.wikidot.com/${encodeURI(selectedLink)}`}
            title={`https://scp-wiki.wikidot.com/${encodeURI(selectedLink)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {selectedLink}
          </ExternalLink>
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

        <ResultTable items={items} onItemShowClicked={setSelectedLink} />
        <HubResult selectedLink={selectedLink} items={items} />
      </ResultContainer>
    </ResultWrapper>
  );
}

export default Results;
