import "./App.css";
import React, { createContext, useContext, useState } from "react";
import AboutMe from "./components/aboutMe";
import styled from "styled-components";
import ControlPanel from "./components/controlPanel";
import InfoContainer from "./components/infoContainer";
import SkillsNew from "./components/SkillsNew";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { HiPhone } from "react-icons/hi2";

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
  height: fit-content;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--headline);
  gap: 8px;

  h1 {
    font-size: 2.7em;
    margin: 8px 0 0;
  }

  h2 {
    font-size: 2em;
    font-family: "Onest";
    font-weight: 500;
    border-bottom: 2px solid var(--accent);
    border-radius: 16px;
    margin: 0 0 8px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const SocialsContainer = styled.div`
  font-family: "Onest";
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  gap: 16px;
`;

const SocialsItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 1.1em;
    color: var(--headline);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    font-size: 1.4em;
    color: var(--accent);
    margin-right: 8px;
  }

  &:hover {
    svg {
      transform: scale(1.2);
      filter: drop-shadow(0 0 5px rgba(0, 128, 128, 0.4));
  }
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
            <SocialsContainer>
              <SocialsItem>
                <a href="https://www.linkedin.com/in/petteraustnes/">
                  <SiLinkedin />
                  LinkedIn
                </a>
              </SocialsItem>
              <SocialsItem>
                <a href="https://github.com/pettersand">
                  <SiGithub /> GitHub
                </a>
              </SocialsItem>
              <SocialsItem>
                <a href="">
                  <SiGmail /> Email
                </a>
              </SocialsItem>
              <SocialsItem>
                <a href="">
                  <HiPhone /> Phone
                </a>
              </SocialsItem>
            </SocialsContainer>
          </NameContainer>

          <AboutMe />
          <SkillsNew />
          <ControlPanel />
        </MainContainer>
        <ColumnContainer>
          <BottomContainer>
            <InfoContainer />
          </BottomContainer>
        </ColumnContainer>
      </AppContainer>
    </AppStateProvider>
  );
}

export default App;
