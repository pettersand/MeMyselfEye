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
  background: linear-gradient(
    to top right,
    rgba(9, 12, 22, 0.9),
    rgba(18, 24, 45, 0.9),
    rgba(36, 47, 90, 0.9)
  );
  width: 90%;
  min-height: 85vh;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

const ResumeContainer = styled.div`
  flex: 2.5;

  display: flex;
  justify-content: center;
`;

const TimelineContainer = styled.div`
  flex: 0.75;
  padding: 10px;
  display: flex;
  justify-content: center;
  box-shadow: -5px 10px 20px rgba(0, 0, 0, 0.75);
`;

const AboutMeContainer = styled.div`
  flex: 2.5;
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
