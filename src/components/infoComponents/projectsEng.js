import React, { useState } from "react";
import { useAppState } from "../../App";
import styled from "styled-components";
import {
  SiCsharp,
  SiDjango,
  SiDocker,
  SiGithub,
  SiGithubactions,
  SiPython,
  SiSvelte,
  SiTypescript,
  SiWindows,
} from "react-icons/si";
import { HiMinus, HiPlus, HiPlusCircle } from "react-icons/hi2";
import Builder from "./projectComponents/builder";

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

const DescriptionContent = styled(({ expanded, ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: ${(props) => (props.expanded ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  gap: 8px;
`;

const FeaturesConditional = styled(({ expanded, ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  gap: 8px;
  max-height: ${(props) => (props.expanded ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;

const SubHeader = styled(({ expanded, ...props }) => <div {...props} />)`
  position: relative;
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  font-weight: 600;
  padding: 4px;
  border-bottom: 1px solid
    ${(props) => (props.expanded ? "var(--accent)" : "var(--complement)")};
  transition: border-color 0.5s ease-in-out;
  cursor: pointer;

  h4 {
    margin: 0;

    svg {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
    }
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
  gap: 16px;
`;

const ConceptContent = styled(({ expanded, ...props }) => <div {...props} />)`
  display: flex;
  max-height: ${(props) => (props.expanded ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;

const Concept = styled.div`
  display: flex;
  color: var(--paragraph);
  font-size: 0.9em;
`;

const ImageContainer = styled(({ bgImage, ...props }) => <div {...props} />)`
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
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [conceptsExpanded, setConceptsExpanded] = useState(false);
  const [featuresExpanded, setFeaturesExpanded] = useState(false);

  const toggleDescription = () => {
    setDescriptionExpanded(!descriptionExpanded);
  };

  const toggleConcepts = () => {
    setConceptsExpanded(!conceptsExpanded);
  };

  const toggleFeatures = () => {
    setFeaturesExpanded(!featuresExpanded);
  };

  return (
    <ProjectWrapper>
      <ProjectRow>
        <ProjectContainer isVisible={detailLevel === "minimal"}>
          <Builder />
        </ProjectContainer>

        <Divider />

        <ProjectContainer isVisible={detailLevel === "minimal"}>
          <ProjectHeader>Tripple-P</ProjectHeader>

          <ImageContainer bgImage="/tripplep1.png">
            <DetailsBar>
              <DetailsItem className="date">
                Under Development: 26/08 - Present
              </DetailsItem>
              <DetailsItem className="link">
                <SiGithub />
                <a href="https://github.com/pettersand/builder" target="_blank">
                  Link
                </a>
              </DetailsItem>
            </DetailsBar>
            <TechStack>
              <TechColumn>
                <TechIcon>
                  <SiCsharp />
                  <span>C#</span>
                </TechIcon>

                <TechIcon>
                  <SiWindows />
                  <span>WPF</span>
                </TechIcon>
              </TechColumn>
            </TechStack>
          </ImageContainer>
          <SubHeader expanded={descriptionExpanded}>
            <h4 onClick={toggleDescription}>
              Description {descriptionExpanded ? <HiMinus /> : <HiPlus />}
            </h4>
          </SubHeader>
          <ProjectStack>
            <p>
              When planning my projects I've felt the need for a project
              planning tool stronger than Excel. So why not build one myself?
              Built as a desktop application, it will allow the user to plan and
              progress their projects in a tab-based interface. This is
              Tripple-P; Petters Project Planner!
            </p>
            <DescriptionContent expanded={descriptionExpanded}>
              <p>TODO</p>
              <p>TODO</p>
            </DescriptionContent>
          </ProjectStack>
          <SubHeader expanded={conceptsExpanded}>
            <h4 onClick={toggleConcepts}>
              Concepts Applied {conceptsExpanded ? <HiMinus /> : <HiPlus />}
            </h4>
          </SubHeader>
          <ProjectItem>
            <ProjectStack>
              <ConceptContainer>
                <Concept>Desktop App</Concept>
                <Concept>MaterialDesign</Concept>
                <Concept>JSON metadata</Concept>

                <ConceptContent expanded={conceptsExpanded}>
                  <ConceptContainer></ConceptContainer>
                </ConceptContent>
              </ConceptContainer>
            </ProjectStack>
          </ProjectItem>

          <SubHeader expanded={featuresExpanded}>
            <h4 onClick={toggleFeatures}>
              Features {featuresExpanded ? <HiMinus /> : <HiPlus />}
            </h4>
          </SubHeader>
          <ProjectItem>
            <ProjectStack>
              <FeaturesContainer>
                <Features>
                  <h5>Plan Your Project</h5>
                  <span>
                    Follow the Tripple-P project planning formula - Planning,
                    Progress, Production
                  </span>
                </Features>
                <Features>
                  <h5>Production Ready Code</h5>
                  <span>
                    Use customizable checklists to ensure all files are
                    production ready. Step by step watch your project get closer
                    to release.
                  </span>
                </Features>
                <FeaturesConditional expanded={featuresExpanded}>
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
                      The workout plan is interactive. Mark exercises and
                      training days as complete to easily stay on top of where
                      you are in your program.
                    </span>
                  </Features>
                  <Features>
                    <h5>Personal Trainer Dashboard</h5>
                    <span>
                      For the fitness professional. Track your clients, create
                      and send programs, get weekly notifications on their
                      progress, and gain unique insight into your business
                      metrics.
                    </span>
                  </Features>
                </FeaturesConditional>
              </FeaturesContainer>
            </ProjectStack>
          </ProjectItem>
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
          <Builder />
        </ProjectContainer>
        <ProjectContainer isVisible={detailLevel === "detailed"}>
          <h4>Portfolio</h4>
        </ProjectContainer>
      </ProjectRow>
    </ProjectWrapper>
  );
};

export default ProjectsEng;
