import "./App.css";
import Header from "./components/header";
import AboutMe from "./components/aboutMe";
import Timeline from "./components/timeline";
import Skills from "./components/skills";
import styled from "styled-components";

const AppContainer = styled.div`
  background: linear-gradient(0deg, black 20%, transparent 40%),
    url("Background2.png") no-repeat center center;
  background-size: cover;
  background-position: center -200px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

function App() {
  return (
    <AppContainer>
      <TopContainer>
        <LeftContainer></LeftContainer>
        <MiddleContainer>
          <NameContainer />
          <Skills />
        </MiddleContainer>
        <RightContainer></RightContainer>
      </TopContainer>
      <BottomContainer>
        <ContentContainer></ContentContainer>
      </BottomContainer>
    </AppContainer>
  );
}

export default App;
