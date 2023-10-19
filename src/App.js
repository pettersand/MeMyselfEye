import "./App.css";
import React, { createContext, useContext, useState } from "react";
import Header from "./components/header";
import AboutMe from "./components/aboutMe";
import Timeline from "./components/timeline";
import Skills from "./components/skills";
import styled from "styled-components";
import ControlPanel from "./components/controlPanel";

const AppContainer = styled.div`
  background-color: black;
  background-size: cover;
  background-position: center -200px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const MiddleContainer = styled.div`
  background: linear-gradient(rgba(3, 41, 57, 0.95), rgba(0, 0, 0, 0.6));
  width: 30%;
  min-height: 75vh;
  margin-top: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

const LeftContainer = styled.div`
  background: linear-gradient(rgba(3, 41, 57, 0.95), rgba(0, 0, 0, 0.8));
  width: 35%;
  min-height: 35vh;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

const RightContainer = styled.div`
  background: linear-gradient(rgba(3, 41, 57, 0.95), rgba(0, 0, 0, 0.8));
  width: 35%;
  min-height: 35vh;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

const BottomContainer = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
`;

const ContentContainer = styled.div`
  background: linear-gradient(rgba(3, 41, 57, 0.95), rgba(0, 0, 0, 0.8));
  width: 100%;
  border-radius: 10px;
  min-height: 20vh;
  display: flex;
  flex-direction: row;
`;

const NameContainer = styled.div`
  flex: 1;
  border-bottom: 2px solid teal;
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

const DetailToggle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  font-weight: 200;
`;

export const AppStateContext = createContext();

export const useAppState = () => {
  return useContext(AppStateContext);
};

export const AppStateProvider = ({ children }) => {
  const [state, setState] = useState({
    activeInfo: "default",
    detailLevel: "minimal",
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
        <TopContainer>
          <LeftContainer>
            <AboutMe />
          </LeftContainer>
          <MiddleContainer>
            <NameContainer>
              <h1>Petter Sand Austnes</h1>
              <h2>Software Developer</h2>
            </NameContainer>
            <Skills />
            <DetailToggle>
              <h4>o Minimalist</h4>
              <h4>Detailed o</h4>
            </DetailToggle>
          </MiddleContainer>
          <RightContainer>
            <ControlPanel />
          </RightContainer>
        </TopContainer>
        <BottomContainer>
          <ContentContainer></ContentContainer>
        </BottomContainer>
      </AppContainer>
    </AppStateProvider>
  );
}

export default App;
