import "./App.css";
import React, { createContext, useContext, useState } from "react";
import AboutMe from "./components/aboutMe";
import styled from "styled-components";
import ControlPanel from "./components/controlPanel";
import InfoContainer from "./components/infoContainer";
import SkillsNew from "./components/SkillsNew";

const AppContainer = styled.div`
  background-color: var(--bg);
  color: var(--headline);
  min-height: 100vh;
  padding: 32px;
  gap: 24px;
  display: flex;
  flex-direction: row;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 75vw;
  gap: 16px;
`;

const MainContainer = styled.div`
  background-color: var(--bg2);
  max-height: 100vh;
  min-width: 400px;
  max-width: 25vw;
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  box-shadow: -10px 10px 16px rgba(0, 0, 0, 0.75);
`;

const ControlContainer = styled.div`
  background-color: var(--bg2);
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  box-shadow: -10px 10px 16px rgba(0, 0, 0, 0.75);
`;

const BottomContainer = styled.div`
  background-color: var(--bg2);
  border-radius: 10px;
  box-shadow: -10px 10px 16px rgba(0, 0, 0, 0.75);
  grid-column: 2 / 4;
  grid-row: 2 / 5;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const NameContainer = styled.div`
  font-family: "Nothing";
  font-size: 1.2em;
  border-bottom: 2px solid var(--accent);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--headline);
  h1,
  h2 {
    margin: 5px;
  }

  h2 {
    font-family: "Onest";
    font-weight: 500;
  }
`;

const SocialsContainer = styled.div`
  grid-column: 1;
  grid-row: 3;
  margin: 16px 16px 24px 24px;
  background-color: var(--base-dark);
  border-radius: 10px;
  box-shadow: -10px 10px 16px rgba(0, 0, 0, 0.75);
`;

export const AppStateContext = createContext();

export const useAppState = () => {
  return useContext(AppStateContext);
};

export const AppStateProvider = ({ children }) => {
  const [state, setState] = useState({
    activeInfo: "projects",
    detailLevel: "minimal",
    language: "eng",
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
            <h1>Petter Sand Austnes</h1>
            <h2>Software Developer</h2>
          </NameContainer>
          <AboutMe />
          <SkillsNew />
        </MainContainer>
        <ColumnContainer>
          <ControlContainer>
            <ControlPanel />
          </ControlContainer>

          <BottomContainer>
            <InfoContainer />
          </BottomContainer>
        </ColumnContainer>
      </AppContainer>
    </AppStateProvider>
  );
}

export default App;
