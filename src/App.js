import "./App.css";
import Header from "./components/header";
import Resume from "./components/resume";
import AboutMe from "./components/aboutMe";
import Timeline from "./components/timeline";
import styled from "styled-components";

const AppContainer = styled.div`
  background: linear-gradient(0deg, black 20%, transparent 40%),
    url("Background1.png") no-repeat center center;
  background-size: cover;
  background-position: center -50px;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const TopContainer = styled.div`
  width: 95%;
  height: 60%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
`;

const MiddleContainer = styled.div`
  background: linear-gradient(rgba(3, 41, 57, 0.95), rgba(0, 0, 0, 0.95));
  width: 25%;
  min-height: 85vh;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

const LeftContainer = styled.div`
  background: linear-gradient(rgba(3, 41, 57, 0.95), rgba(0, 0, 0, 0.95));
  width: 40%;
  min-height: 40vh;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

const RightContainer = styled.div`
  background: linear-gradient(rgba(3, 41, 57, 0.95), rgba(0, 0, 0, 0.8));
  width: 40%;
  min-height: 40vh;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

function App() {
  return (
    <AppContainer>
      <TopContainer>
        <LeftContainer></LeftContainer>
        <MiddleContainer></MiddleContainer>
        <RightContainer></RightContainer>
      </TopContainer>
    </AppContainer>
  );
}

export default App;
