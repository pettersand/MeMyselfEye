import "./App.css";
import Header from "./components/header";
import Resume from "./components/resume";
import AboutMe from "./components/aboutMe";
import Timeline from "./components/timeline";
import styled from "styled-components";

const AppContainer = styled.div`
  background: linear-gradient(to top right, #763587, #873570, #873547);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const InnerContainer = styled.div`
  background: linear-gradient(to top right, #090c16, #12182d, #242f5a);
  width: 90%;
  min-height: 85vh;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border: 2px solid black;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ResumeContainer = styled.div`
  flex: 2.5;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const TimelineContainer = styled.div`
  flex: 0.75;
  padding: 10px;
  display: flex;
  justify-content: center;
  border-inline: 2px solid black;
`;

const AboutMeContainer = styled.div`
  flex: 2.5;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <InnerContainer>
        <ResumeContainer>
          <Resume />
        </ResumeContainer>
        <TimelineContainer>
          <Timeline />
        </TimelineContainer>
        <AboutMeContainer>
          <AboutMe />
        </AboutMeContainer>
      </InnerContainer>
    </AppContainer>
  );
}

export default App;
