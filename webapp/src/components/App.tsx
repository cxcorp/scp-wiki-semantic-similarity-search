import { styled } from "styled-components";
import { mainContainer } from "../common/ui-constants";
import AppContextProvider from "./AppContextProvider";
import AppHeader from "./AppHeader";
import { ExternalLink } from "./results/ExternalLink";
import Results from "./results/Results";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background: #090a0f;
  color: var(--color-body-text);
  padding-top: var(--space-5);
  padding-bottom: var(--space-5);
`;

const TextLink = styled.a`
  color: var(--color-text);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Container = styled.div`
  ${mainContainer}
`;

const AttributionContainer = styled.div`
  margin-top: var(--space-6);
  font-size: 14px;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: var(--space-1);
  margin-bottom: var(--space-1);
`;

const AttributionHeader = styled(Paragraph)`
  font-weight: 600;
  margin-top: var(--space-3);
`;

function App() {
  return (
    <AppContextProvider>
      <StyledApp>
        <AppHeader />

        <Results />

        <Footer>
          <Container>
            <ExternalLink href="https://github.com/cxcorp/scp-wiki-semantic-similarity-search">
              Source code and license details on GitHub
            </ExternalLink>
            <AttributionContainer>
              <AttributionHeader>Legal</AttributionHeader>
              <Paragraph>
                <ExternalLink href="https://github.com/cxcorp/scp-wiki-semantic-similarity-search">
                  License and attribution details
                </ExternalLink>
              </Paragraph>
              <Paragraph>
                Content relating to the SCP Foundation, including the SCP
                Foundation logo, is licensed under{" "}
                <TextLink
                  href="https://creativecommons.org/licenses/by-sa/3.0/"
                  rel="noopener"
                >
                  Creative Commons Attribution-Sharealike 3.0
                </TextLink>{" "}
                and all concepts originate from{" "}
                <TextLink href="https://scpwiki.com/" rel="noopener">
                  https://scpwiki.com/
                </TextLink>{" "}
                and its authors. The displayed content, originating from the
                data files "corpus.txt", "hubs.sqlite" and "matches.bin", is
                content relating to or derived from content relating to the SCP
                Foundation, and is hereby also released under Creative Commons
                Attribution-Sharealike 3.0 (CC BY-SA 3.0).
              </Paragraph>

              <AttributionHeader>Data source</AttributionHeader>
              <Paragraph>
                SCP Wiki crawl dataset via the{" "}
                <TextLink
                  href="https://github.com/scp-data/scp-api/"
                  rel="noopener"
                >
                  scp-api
                </TextLink>{" "}
                project.
              </Paragraph>
            </AttributionContainer>{" "}
          </Container>
        </Footer>
      </StyledApp>
    </AppContextProvider>
  );
}

export default App;
