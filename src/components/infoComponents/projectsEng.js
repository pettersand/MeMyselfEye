import React from "react";
import { useAppState } from "../../App";
import styled from "styled-components";
import {
  SiDjango,
  SiDocker,
  SiGithub,
  SiGithubactions,
  SiPython,
  SiSvelte,
  SiTypescript,
} from "react-icons/si";

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const ProjectRow = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ProjectContainer = styled(({ isVisible, ...props }) => (
  <div {...props} style={{ display: isVisible ? "flex" : "none" }} />
))`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  height: 100%;
  padding: 16px;
  gap: 16px;
  p {
    font-size: 0.9em;
    margin: 0;
    color: var(--paragraph);
  }

  h4 {
    color: var(--headline);
  }
`;

const Divider = styled.div`
  height: 80%;
  border: 1px solid var(--bg);
`;

const ProjectHeader = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: 600;
  padding: 4px;
  border-bottom: 1px solid var(--accent);
`;

const DetailsBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`;

const DetailsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &.date {
    font-size: 0.8em;
    font-style: italic;
  }

  &.link {
    font-size: 1.5em;
    color: var(--accent);
    a {
      font-size: 0.7em;
      font-weight: 500;
      text-decoration: none;
      color: var(--headline);
    }
  }
`;

const ProjectItem = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const ProjectStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h4 {
    margin: 0;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const TechColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 8px;
`;

const TechIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  margin-right: 4px;
  color: var(--accent);
  background: linear-gradient(to right, rgba(50, 50, 50, 0.6), transparent);
  border-radius: 8px;
  gap: 8px;
  span {
    font-size: 0.6em;
    color: var(--headline);
    margin-right: 8px;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  gap: 8px;
`;

const SubHeader = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  font-weight: 600;
  padding: 4px;
  border-bottom: 1px solid var(--contrast);
  h4 {
    margin: 0;
  }
`;

const Features = styled.div`
  display: flex;
  flex: 1;
  min-width: 40%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  background-color: var(--bg);
  border-radius: 8px;
  padding: 8px;
  margin: 0;

  h5 {
    margin: 0;
  }

  span {
    color: var(--paragraph);
    font-size: 0.9em;
  }
`;

const ConceptContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 24px;
  padding: 16px;
`;

const Concept = styled.div`
  display: flex;
  color: var(--paragraph);
  font-size: 0.9em;
`;

const ImageContainer = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  gap: 16px;
  height: 25vh;
  width: 100%;
  box-shadow: inset 0px 0px 5px 5px rgba(0, 0, 0, 0.75);
`;

const ProjectsEng = () => {
  const { state } = useAppState();
  const { detailLevel } = state;

  return (
    <ProjectWrapper>
      <ProjectRow>
        <ProjectContainer isVisible={detailLevel === "minimal"}>
          <ProjectHeader>Builder</ProjectHeader>

          <ImageContainer bgImage="/Builder1.png">
            <DetailsBar>
              <DetailsItem className="date">
                Under Development: 26/08 - Present
              </DetailsItem>
              <DetailsItem className="link">
                <SiGithub />
                <a href="">GitHub</a>
              </DetailsItem>
            </DetailsBar>
            <TechStack>
              <TechColumn>
                <TechIcon>
                  <SiPython />
                  <span>Python</span>
                </TechIcon>

                <TechIcon>
                  <SiDjango />
                  <span>Django</span>
                </TechIcon>
                <TechIcon>
                  <SiSvelte />
                  <span>Svelte</span>
                </TechIcon>

                <TechIcon>
                  <SiTypescript />
                  <span>TypeScript</span>
                </TechIcon>
                <TechIcon>
                  <SiDocker />
                  <span>Docker</span>
                </TechIcon>
                <TechIcon>
                  <SiGithubactions />
                  <span>GitHub Actions</span>
                </TechIcon>
              </TechColumn>
            </TechStack>
          </ImageContainer>
          <SubHeader>
            <h4>Description</h4>
          </SubHeader>
          <ProjectStack>
            <p>
              Streamlines the creation and management of personalized workout
              programs. The "one-stop-shop" app I wish I had while working in
              the fitness industry.
            </p>
          </ProjectStack>
          <SubHeader>
            <h4>Concepts Used</h4>
          </SubHeader>
          <ProjectItem>
            <ProjectStack>
              <ConceptContainer>
                <Concept>REST API</Concept>
                <Concept>Data Analysis</Concept>
                <Concept>Secure Data Flow</Concept>
                <Concept>Front+Backend Validation</Concept>
                <Concept>SPA</Concept>
                <Concept>CI/CD</Concept>
                <Concept>Unit Tests</Concept>
                <Concept>State Management</Concept>
                <Concept>Data Visualization</Concept>
                <Concept>Containers</Concept>
              </ConceptContainer>
            </ProjectStack>
          </ProjectItem>

          <SubHeader>
            <h4>Features</h4>
          </SubHeader>
          <ProjectItem>
            <ProjectStack>
              <FeaturesContainer>
                <Features>
                  <h5>Write Exercise Programs</h5>
                  <span>
                    Create advanced programs for yourself or your clients. Send
                    them, save them, or share them!
                  </span>
                </Features>
                <Features>
                  <h5>Customize Templates</h5>
                  <span>
                    Save your own custom exercise templates, or even individual
                    elements for advanced users.
                  </span>
                </Features>
                <Features>
                  <h5>Track Your Progress</h5>
                  <span>
                    Track and define your goals with a comprehensive user
                    dashboard. Access graphs, statistics, and feedback on your
                    training.
                  </span>
                </Features>
                <Features>
                  <h5>Calculate Loading</h5>
                  <span>
                    Use advanced Builder tools to calculate weights for each
                    set, or exercise. Or don't! The choice is yours.
                  </span>
                </Features>
                <Features>
                  <h5>Update Your Workout Plan</h5>
                  <span>
                    The workout plan is interactive. Mark exercises and training
                    days as complete to easily stay on top of where you are in
                    your program.
                  </span>
                </Features>
                <Features>
                  <h5>Personal Trainer Dashboard</h5>
                  <span>
                    For the fitness professional. Track your clients, create and
                    send programs, get weekly notifications on their progress,
                    and gain unique insight into your business metrics.
                  </span>
                </Features>
              </FeaturesContainer>
            </ProjectStack>
          </ProjectItem>
        </ProjectContainer>
        <ProjectContainer isVisible={detailLevel === "detailed"}>
          <ProjectHeader>Builder</ProjectHeader>
        </ProjectContainer>

        <Divider />

        <ProjectContainer isVisible={detailLevel === "minimal"}>
          <ProjectHeader>Tripple-P</ProjectHeader>
        </ProjectContainer>
        <ProjectContainer isVisible={detailLevel === "detailed"}>
          <h4>Tripple-P</h4>
        </ProjectContainer>
      </ProjectRow>

      <ProjectRow>
        <ProjectContainer isVisible={detailLevel === "minimal"}>
          <ProjectHeader>Salloc</ProjectHeader>
          <ProjectItem>
            <ImageContainer bgImage="/Salloc.png" />
            <p>
              Helping individuals achieve financial goals by efficiently
              allocating savings. Allows the user to set savings targets, and
              determine a percentage of future deposits to be allocated towards
              specific posts.
            </p>
          </ProjectItem>
          <ProjectItem>Tech Stack</ProjectItem>
          <ProjectItem>Features</ProjectItem>
        </ProjectContainer>
        <ProjectContainer isVisible={detailLevel === "detailed"}>
          <h4>Salloc</h4>
        </ProjectContainer>

        <Divider />

        <ProjectContainer isVisible={detailLevel === "minimal"}>
          <ProjectHeader>Portfolio</ProjectHeader>
        </ProjectContainer>
        <ProjectContainer isVisible={detailLevel === "detailed"}>
          <h4>Portfolio</h4>
        </ProjectContainer>
      </ProjectRow>
    </ProjectWrapper>
  );
};

export default ProjectsEng;
