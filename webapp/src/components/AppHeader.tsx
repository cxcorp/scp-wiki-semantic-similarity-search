import { styled } from "styled-components";
import { appMaxWidth } from "../common/ui-constants";
import SearchBar from "./SearchBar";

const Header = styled.header`
  padding: 0 10px;
  width: 100%;
  max-width: ${appMaxWidth};
`;

const HeaderTitle = styled.h1`
  font-family: var(--font-family-inter-tight);
  font-size: 32px;
  font-weight: 600;
`;

const HeaderSubtitle = styled.p`
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
      <div>
        <SearchBar />
      </div>
    </Header>
  );
};

export default AppHeader;
