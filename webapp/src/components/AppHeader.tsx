import { styled } from "styled-components";
import { bp } from "../common/breakpoints";
import { mainContainer } from "../common/ui-constants";
import SearchBar from "./SearchBar";

const Header = styled.header`
  ${mainContainer}

  padding-bottom: var(--space-6);

  ${bp.lg(`
    padding-bottom: var(--space-8);
  `)}
`;

const HeaderTitle = styled.h1`
  font-family: var(--font-family-inter-tight);
  font-size: 32px;
  font-weight: 600;

  margin-top: var(--space-9);
  margin-bottom: var(--space-3);
`;

const HeaderSubtitle = styled.p`
  margin-top: 0;
  margin-bottom: var(--space-7);
  font-size: 16px;
  color: var(--color-subtitle);
`;

const AppHeader = () => {
  return (
    <Header>
      <HeaderTitle>SCP Recommender</HeaderTitle>
      <HeaderSubtitle>
        Find SCP Wiki items and tales similar to the ones you love.
      </HeaderSubtitle>

      <SearchBar />
    </Header>
  );
};

export default AppHeader;
