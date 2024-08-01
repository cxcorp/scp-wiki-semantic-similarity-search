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
  padding-bottom: var(--space-7);

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  ul.nav {
    ${mainContainer}
    display: flex;
    gap: 25px;
    margin: 0 auto;
    padding: 0 10px;
    list-style-type: none;
  }

  ul.nav li {
    height: 48px;
    line-height: 48px;
  }
`;

const TextLink = styled.a`
  color: inherit;
  color: var(--color-text);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const AttributionContainer = styled.div`
  ${mainContainer}

  font-size: 14px;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-bottom: var(--space-2);
`;

const AttributionHeader = styled(Paragraph)`
  font-weight: 600;
`;

function App() {
  return (
    <AppContextProvider>
      <StyledApp>
        <AppHeader />

        <Results />

        <Footer>
          <ul className="nav">
            {/* <li>
              <TextLink href={basePath}>Home</TextLink>
            </li> */}
            {/* <li>About</li> */}
            <li style={{ marginLeft: "auto" }}>
              <ExternalLink href="https://github.com/cxcorp/scp-wiki-semantic-similarity-search">
                Source code on GitHub
              </ExternalLink>
            </li>
          </ul>
          <AttributionContainer>
            <AttributionHeader>License and attribution</AttributionHeader>
            <Paragraph>
              Content relating to the SCP Foundation, including the SCP
              Foundation logo, is licensed under Creative Commons Sharealike 3.0
              and all concepts originate from{" "}
              <TextLink href="https://scpwiki.com/" rel="noopener">
                https://scpwiki.com/
              </TextLink>{" "}
              and its authors. Such content redistributed on this website is
              hereby also released under Creative Commons Sharealike 3.0.
            </Paragraph>
            <Paragraph>
              SCP Wiki crawl dataset via the{" "}
              <ExternalLink href="https://github.com/scp-data/scp-api/">
                scp-api
              </ExternalLink>{" "}
              project.
            </Paragraph>
          </AttributionContainer>
        </Footer>
      </StyledApp>
    </AppContextProvider>
  );
}

export default App;
