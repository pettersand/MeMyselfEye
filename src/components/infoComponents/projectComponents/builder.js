import React, { useState } from "react";
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

const BuilderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 16px;
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

const ImageContainer = styled(({ bgImage, ...props }) => <div {...props} />)`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  gap: 16px;
  height: 300px;
  width: 100%;
  box-shadow: inset 0px 0px 5px 5px rgba(0, 0, 0, 0.75);
`;

const DetailsBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`;

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;
`;

const DetailsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-weight: 500;

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

const TechStack = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60%;
  align-items: center;
  justify-content: space-between;
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
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent);
  border-radius: 8px;
  gap: 8px;
  span {
    font-size: 0.6em;
    font-weight: 400;
    color: var(--headline);
    margin-right: 8px;
  }
`;

const LinkIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  margin-left: 4px;
  color: var(--accent);
  background: linear-gradient(to left, rgba(0, 0, 0, 0.7), transparent);
  border-radius: 8px;
  gap: 8px;
  a {
    font-size: 0.7em;
    font-weight: 400;
    color: var(--headline);
    margin-left: 8px;
    text-decoration: none;
  }
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

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h4 {
    margin: 0;
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

const FeaturesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  gap: 8px;
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

const Builder = () => {
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
    <BuilderWrapper>
      <ProjectHeader>Builder</ProjectHeader>
      <ImageContainer bgImage="/Builder1.png">
        <DetailsBar>
          <DetailsItem className="date">26/08 - Present</DetailsItem>
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
          <LinksColumn>
            <LinkIcon>
              <a href="https://github.com/pettersand/builder" target="_blank">
                Repo
              </a>
              <SiGithub />
            </LinkIcon>
          </LinksColumn>
        </TechStack>
      </ImageContainer>

      <SubHeader expanded={descriptionExpanded}>
        <h4 onClick={toggleDescription}>
          Description {descriptionExpanded ? <HiMinus /> : <HiPlus />}
        </h4>
      </SubHeader>
      <DescriptionContainer>
        <p>
          This web application streamlines the creation and management of
          personalized workout programs. The "one-stop-shop" app I wish I had
          while working in the fitness industry.
        </p>
        <DescriptionContent expanded={descriptionExpanded}>
          <p>
            This project will likely be in development for while, seeing as it
            is quite the undertaking and ambitions are set high. The vision is
            for Builder to be a staple for every fitness professional's toolbox.
            It will allow them to efficiently create custom workout programs for
            their clients, track their progress, make adjustments, and improve
            their client management.
          </p>
          <p>
            Coming from a long career as a personal trainer, i was stuck with
            endless Excel spreadsheets, that got the job done, though not to the
            full potential of my vision. This project aims to fix that.
          </p>
        </DescriptionContent>
      </DescriptionContainer>

      <SubHeader expanded={conceptsExpanded}>
        <h4 onClick={toggleConcepts}>
          Concepts Applied {conceptsExpanded ? <HiMinus /> : <HiPlus />}
        </h4>
      </SubHeader>
      <ConceptContainer>
        <Concept>REST API</Concept>
        <Concept>CI/CD</Concept>
        <Concept>SPA</Concept>
        <Concept>Unit Tests</Concept>
        <ConceptContent expanded={conceptsExpanded}>
          <ConceptContainer>
            <Concept>Data Analysis</Concept>
            <Concept>Front+Backend Validation</Concept>
            <Concept>State Management</Concept>
            <Concept>Data Visualization</Concept>
            <Concept>Containers</Concept>
          </ConceptContainer>
        </ConceptContent>
      </ConceptContainer>

      <SubHeader expanded={featuresExpanded}>
        <h4 onClick={toggleFeatures}>
          Features {featuresExpanded ? <HiMinus /> : <HiPlus />}
        </h4>
      </SubHeader>
      <FeaturesContainer>
        <Features>
          <h5>Write Exercise Programs</h5>
          <span>
            Create advanced programs for yourself or your clients. Send them,
            save them, or share them!
          </span>
        </Features>
        <Features>
          <h5>Customize Templates</h5>
          <span>
            Save your own custom exercise templates, or even individual elements
            for advanced users.
          </span>
        </Features>
        <FeaturesConditional expanded={featuresExpanded}>
          <Features>
            <h5>Track Your Progress</h5>
            <span>
              Track and define your goals with a comprehensive user dashboard.
              Access graphs, statistics, and feedback on your training.
            </span>
          </Features>
          <Features>
            <h5>Calculate Loading</h5>
            <span>
              Use advanced Builder tools to calculate weights for each set, or
              exercise. Or don't! The choice is yours.
            </span>
          </Features>
          <Features>
            <h5>Update Your Workout Plan</h5>
            <span>
              The workout plan is interactive. Mark exercises and training days
              as complete to easily stay on top of where you are in your
              program.
            </span>
          </Features>
          <Features>
            <h5>Personal Trainer Dashboard</h5>
            <span>
              For the fitness professional. Track your clients, create and send
              programs, get weekly notifications on their progress, and gain
              unique insight into your business metrics.
            </span>
          </Features>
        </FeaturesConditional>
      </FeaturesContainer>
    </BuilderWrapper>
  );
};

export default Builder;
