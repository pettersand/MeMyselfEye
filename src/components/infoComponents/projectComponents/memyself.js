import React, { useState } from "react";
import styled from "styled-components";
import {
  SiCsharp,
  SiCss3,
  SiDjango,
  SiDocker,
  SiGithub,
  SiGithubactions,
  SiJavascript,
  SiPython,
  SiReact,
  SiStyledcomponents,
  SiSvelte,
  SiTypescript,
  SiWindows,
} from "react-icons/si";
import { HiMinus, HiPlus, HiPlusCircle } from "react-icons/hi2";

const MeMyselfWrapper = styled.div`
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
  flex: 2;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  gap: 16px;
  height: 25vh;
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

const MeMyself = () => {
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
    <MeMyselfWrapper>
      <ProjectHeader>Me, Myself, & I</ProjectHeader>
      <ImageContainer bgImage="/memyself2.png">
        <DetailsBar>
          <DetailsItem className="date">
            Under Development: 18/10 - Present
          </DetailsItem>
          <DetailsItem className="link">
            <SiGithub />
            <a href="https://github.com/pettersand/MeMyselfEye" target="_blank">
              Link
            </a>
          </DetailsItem>
        </DetailsBar>
        <TechStack>
          <TechColumn>
            <TechIcon>
              <SiReact />
              <span>React</span>
            </TechIcon>

            <TechIcon>
              <SiJavascript />
              <span>JavaScript</span>
            </TechIcon>
            <TechIcon>
              <SiStyledcomponents />
              <span>Styled Components</span>
            </TechIcon>
          </TechColumn>
        </TechStack>
      </ImageContainer>

      <SubHeader expanded={descriptionExpanded}>
        <h4 onClick={toggleDescription}>
          Description {descriptionExpanded ? <HiMinus /> : <HiPlus />}
        </h4>
      </SubHeader>
      <DescriptionContainer>
        <p>
          The hardest part about breaking into a new industry isn't acquiring
          the knowledge of the technical aspects. It's figuring out how to show
          what you know. This project, and thus, this site - aims to show myself
          as a fresh breath of air. I've always enjoyed creating from scratch
          and doing things differently, of which this is a testament.
        </p>
        <DescriptionContent expanded={descriptionExpanded}>
          <p>TODO</p>
          <p>TODO</p>
        </DescriptionContent>
      </DescriptionContainer>

      <SubHeader expanded={conceptsExpanded}>
        <h4 onClick={toggleConcepts}>
          Concepts Applied {conceptsExpanded ? <HiMinus /> : <HiPlus />}
        </h4>
      </SubHeader>
      <ConceptContainer>
        <Concept>Reactive UI</Concept>
        <Concept>Modular Design</Concept>
        <Concept>Conditional Rendering</Concept>

        <ConceptContent expanded={conceptsExpanded}>
          <ConceptContainer></ConceptContainer>
        </ConceptContent>
      </ConceptContainer>

      <SubHeader expanded={featuresExpanded}>
        <h4 onClick={toggleFeatures}>
          Features {featuresExpanded ? <HiMinus /> : <HiPlus />}
        </h4>
      </SubHeader>
      <FeaturesContainer>
        <Features>
          <h5>Plan Your Project</h5>
          <span>
            Follow the Tripple-P project planning formula - Planning, Progress,
            Production
          </span>
        </Features>
        <Features>
          <h5>Production Ready Code</h5>
          <span>
            Use customizable checklists to ensure all files are production
            ready. Step by step watch your project get closer to release.
          </span>
        </Features>
        <FeaturesConditional expanded={featuresExpanded}>
          <Features>
            <h5>Track Your Progress</h5>
            <span>
              Setup your expandable To Do list, and never forget what the next
              step is.
            </span>
          </Features>
          <Features>
            <h5>User Stories</h5>
            <span>
              Define your user stories to improve your understanding of how your
              users would explore the product.
            </span>
          </Features>
          <Features>
            <h5>Documentation</h5>
            <span>
              Create documentation for your project as you go, letting others
              jump on board easily.
            </span>
          </Features>
          <Features>
            <h5>Architecture</h5>
            <span>
              Vizualize your data flow and how elements interact. Stay on top of
              what files and functions are referenced where. Also plan your
              folder structure and what goes where.
            </span>
          </Features>
        </FeaturesConditional>
      </FeaturesContainer>
    </MeMyselfWrapper>
  );
};

export default MeMyself;
