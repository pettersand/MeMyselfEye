import "./App.css";
import React, { createContext, useContext, useState } from "react";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import styled from "styled-components";
import ControlPanel from "./components/controlPanel";
import InfoContainer from "./components/infoContainer";
import MenuItems from "./components/menuItems";
import SkillsNew from "./components/SkillsNew";

const AppContainer = styled.div`
  background-color: #1f2833;
  background-size: cover;
  background-position: center -200px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 2fr 1.5fr 3fr;
  grid-template-rows: repeat(3, 1fr);
  color: white;
`;

const TopContainer = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
`;

const MainContainer = styled.div`
  background-color: #0b0c10;
  grid-column: 1;
  grid-row: 1 / 3;
  margin: 16px 8px 8px 16px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

const LeftContainer = styled.div`
  background-color: #0b0c10;
  grid-column: 3;
  grid-row: 1;
  margin: 16px 16px 8px 8px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

const RightContainer = styled.div`
  background-color: #0b0c10;
  grid-column: 2;
  grid-row: 1;
  margin: 16px 8px 8px 8px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

const BottomContainer = styled.div`
  background-color: #0b0c10;
  border-radius: 10px;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
  grid-column: 2 / 4;
  grid-row: 2 / 4;
  margin: 8px 16px 16px 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 16px;
`;

const NameContainer = styled.div`
  flex: 1;
  border-bottom: 2px solid teal;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  font-weight: 500;
  color: white;
  h1,
  h2 {
    margin: 5px;
  }
`;

const SocialsContainer = styled.div`
  grid-column: 1;
  grid-row: 3;
  margin: 8px 8px 16px 16px;
  background-color: #0b0c10;
  border-radius: 10px;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
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
          <SkillsNew />

          <MenuItems />
        </MainContainer>
        <SocialsContainer>Socials</SocialsContainer>

        <LeftContainer>
          <AboutMe />
        </LeftContainer>

        <RightContainer>
          <ControlPanel />
        </RightContainer>

        <BottomContainer>
          <InfoContainer />
        </BottomContainer>
      </AppContainer>
    </AppStateProvider>
  );
}

export default App;
