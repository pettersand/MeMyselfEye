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
  justify-content: space-around;
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
  gap: 16px;
  align-items: center;
  justify-content: flex-start;
`;

const TechColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TechIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  margin-right: 4px;
  color: var(--accent);
  gap: 8px;
  span {
    font-size: 0.6em;
    color: var(--paragraph);
    margin-right: 8px;
  }
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h5 {
    color: var(--headline);
    margin: 0;
  }
  span {
    color: var(--paragraph);
    font-size: 0.9em;
  }
`;

const ImageContainer = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 80%;
  width: 100%;
  overflow: hidden;
`;

const ProjectsEng = () => {
  const { state } = useAppState();
  const { detailLevel } = state;

  return (
    <ProjectWrapper>
      <ProjectRow>
        <ProjectContainer isVisible={detailLevel === "minimal"}>
          <ProjectHeader>Builder</ProjectHeader>
          <DetailsBar>
            <span>26/08 -</span>
            <span>
              GitHub
              <SiGithub />
            </span>
            <span>Link</span>
          </DetailsBar>
          <ProjectItem>
            <ProjectStack>
              <p>
                Streamlines the creation and management of personalized workout
                programs. The "one-stop-shop" app I wish I had while working in
                the fitness industry.
              </p>
              <h4>Tech Stack:</h4>
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
                </TechColumn>
                <TechColumn>
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
            </ProjectStack>

            <ImageContainer bgImage="/BuilderLogo.png" />
          </ProjectItem>
          <ProjectItem>
            <ProjectStack>
              <h4>Features:</h4>
              <Features>
                <h5>Write Exercise Programs:</h5>
                <span>
                  Create advanced programs for yourself or your clients
                </span>
              </Features>
              <Features>
                <h5>Write Exercise Programs:</h5>
                <span>
                  Create advanced programs for yourself or your clients
                </span>
              </Features>
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
