import "./App.css";
import Header from "./components/header";
import Resume from "./components/resume";
import AboutMe from "./components/aboutMe";
import Timeline from "./components/timeline";
import styled from "styled-components";

const AppContainer = styled.div`
  background: linear-gradient(0deg, black 20%, transparent 40%),
    url("Background2.png") no-repeat center center;
  background-size: cover;
  background-position: center -150px;
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

function App() {
  return (
    <AppContainer>
      <TopContainer>
        <LeftContainer></LeftContainer>
        <MiddleContainer></MiddleContainer>
        <RightContainer></RightContainer>
      </TopContainer>
      <BottomContainer>
        <ContentContainer></ContentContainer>
      </BottomContainer>
    </AppContainer>
  );
}

export default App;
