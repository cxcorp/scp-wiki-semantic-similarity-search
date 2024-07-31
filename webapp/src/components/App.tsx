import { styled } from "styled-components";
import { mainContainer } from "../common/ui-constants";
import AppContextProvider from "./AppContextProvider";
import AppHeader from "./AppHeader";
import Results from "./results/Results";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavBar = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  background: #090a0f;

  ul {
    ${mainContainer}
    display: flex;
    gap: 25px;
    margin: 0 auto;
    padding: 0 10px;
    list-style-type: none;
  }

  li {
    height: 48px;
    line-height: 48px;
  }
`;

function App() {
  return (
    <AppContextProvider>
      <StyledApp>
        <NavBar>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>GitHub</li>
          </ul>
        </NavBar>
        <AppHeader />

        <Results />
      </StyledApp>
    </AppContextProvider>
  );
}

export default App;
