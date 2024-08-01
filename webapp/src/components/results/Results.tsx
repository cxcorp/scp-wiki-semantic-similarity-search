import { useMemo } from "react";
import { styled } from "styled-components";
import { bp } from "../../common/breakpoints";
import { mainContainer } from "../../common/ui-constants";
import { useAppContext } from "../../context/useAppContext";
import { extractSimilarityData } from "../../services/similarity";
import { ScpWikiLink } from "./ExternalLink";
import { ResultHubsTables } from "./ResultHubsTables";
import { TextLink } from "./ResultsComponents";
import { ResultTable } from "./ResultTable";
import { useHubsResults } from "./useHubsResults";

const ResultWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #24262b;
  padding-bottom: var(--space-8);
`;

const Title = styled.h2`
  font-size: 22px;

  ${bp.lg(`
    font-size: 24px;
  `)}

  margin-top: var(--space-7);
  margin-bottom: var(--space-1);

  &:first-child {
    margin-top: var(--space-5);

    ${bp.lg(`
      margin-top: var(--space-7);
    `)}
  }

  & + p {
    margin-top: 0;
  }
`;

const HubTitle = styled.h2``;

const ResultContainer = styled.div`
  ${mainContainer}

  section + section {
    margin-top: var(--space-5);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const SectionDescription = styled.div`
  margin-bottom: var(--space-5);
`;

const StyledResultHubsTables = styled(ResultHubsTables)`

`;

const Results = () => {
  const { corpus, buf, selectedLink, setSelectedLink } = useAppContext();

  const items = useMemo(() => {
    const index = corpus.indexOf(selectedLink);
    const items = extractSimilarityData(buf, corpus, index);
    return items;
  }, [buf, corpus, selectedLink]);

  const hubsItems = useHubsResults(selectedLink, items);

  return (
    <ResultWrapper>
      <ResultContainer>
        <section>
          <SectionDescription>
            <Title>
              Pages similar to{" "}
              <ScpWikiLink underline link={selectedLink}>
                {selectedLink}
              </ScpWikiLink>
            </Title>
            <p>
              The similarity score represents the{" "}
              <TextLink
                href="https://www.algolia.com/blog/product/semantic-textual-similarity-a-game-changer-for-search-results-and-recommendations/"
                rel="noopener noreferrer"
              >
                semantic textual similarity
              </TextLink>{" "}
              of each page to the selected page, i.e. how similar the "meaning"
              of the content is.
            </p>
          </SectionDescription>
          <ResultTable items={items} onItemShowClicked={setSelectedLink} />
        </section>

        <section>
          <SectionDescription>
            <Title>Hubs of similar pages</Title>
            <p>
              To help you find hubs that might interest you, these tables show
              the above pages grouped by their hub.
            </p>
          </SectionDescription>
          <StyledResultHubsTables
            hubs={hubsItems ?? []}
            onItemShowClicked={setSelectedLink}
          />
        </section>
      </ResultContainer>
    </ResultWrapper>
  );
};

export default Results;
