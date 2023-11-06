import "./App.css";
import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";
import ControlPanel from "./components/controlPanel";
import InfoContainer from "./components/infoContainer";
import SkillsNew from "./components/SkillsNew";
import SocialsBox from "./components/socialsBox";
import ThemeToggle from "./utils/ThemeToggle";

const AppContainer = styled.div`
  background-color: var(--bg);
  color: var(--headline);
  min-height: 100vh;
  max-width: 100vw;
  padding: 32px;
  gap: 24px;
  display: flex;
  flex-direction: row;

  @media (max-width: 1199px) {
    flex-direction: column;
  }
`;

const MainContainer = styled.div`
  background-color: var(--bg2);
  height: fit-content;
  min-width: 475px;
  max-width: 25vw;
  padding: 24px 32px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5), 0 6px 8px rgba(0, 0, 0, 0.5);

  @media (max-width: 1199px) {
    max-width: 90vw;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: var(--bg2);
  border-radius: 16px;
  padding: 24px 32px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5), -8px 8px 20px rgba(0, 0, 0, 0.5);
  flex-grow: 1;
  height: fit-content;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--headline);
  gap: 8px;
  width: 100%;

  h1 {
    font-family: "Nothing";
    margin: 8px 0 0;
  }

  h2 {
    font-weight: 500;
    border-bottom: 2px solid var(--accent);
    border-radius: 8px;
    padding: 0 0 16px;
    width: 90%;
    display: flex;
    justify-content: center;
  }
`;

export const AppStateContext = createContext();

export const useAppState = () => {
  return useContext(AppStateContext);
};

export const AppStateProvider = ({ children }) => {
  const [state, setState] = useState({
    activeInfo: "aboutMe",
  });

  return (
    <AppStateContext.Provider value={{ state, setState }}>
      {children}
    </AppStateContext.Provider>
  );
};

function App() {
  return (
    <AppStateProvider>
      <AppContainer>
        <MainContainer>
          <NameContainer>
            <ThemeToggle />
            <h1>Petter Sand Austnes</h1>
            <h2>Software Developer</h2>
            <SocialsBox />
          </NameContainer>
          <SkillsNew />
          <ControlPanel />
        </MainContainer>

        <BottomContainer>
          <InfoContainer />
        </BottomContainer>
      </AppContainer>
    </AppStateProvider>
  );
}

export default App;
