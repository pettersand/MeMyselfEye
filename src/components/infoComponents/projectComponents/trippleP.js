import React, { useState } from "react";
import styled from "styled-components";
import { SiCsharp, SiGithub, SiWindows } from "react-icons/si";
import { HiMinus, HiPlus } from "react-icons/hi2";

const TrippleWrapper = styled.div`
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
    font-size: 0.9rem;
    font-style: italic;
    color: var(--accent-text);
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80%;
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
  margin-right: 4px;
  color: var(--accent);
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent);
  border-radius: 12px;
  gap: 8px;
  padding: 1px 0;
  span {
    font-size: 1rem;
    font-weight: 400;
    color: var(--accent-text);
    margin-right: 8px;
  }
`;

const LinkIcon = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.9), transparent);
  border-radius: 12px;
  gap: 8px;

  a {
    font-size: 1rem;
    font-weight: 400;
    color: var(--accent-text);
    margin-left: 8px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    margin-left: 8px;
  }

  &:hover {
    svg {
      transform: scale(1.2);
      filter: drop-shadow(0 0 5px rgba(0, 128, 128, 0.4));
  }
`;

const SubHeader = styled(({ expanded, ...props }) => <div {...props} />)`
  position: relative;
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 4px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${(props) =>
      props.expanded ? "var(--accent)" : "var(--complement)"};
  }

  &:hover::before {
    background: linear-gradient(
      90deg,
      var(--accent),
      var(--contrast),
      var(--accent),
      var(--contrast),
      var(--accent)
    );
    background-size: 200% 100%;
    animation: colorSlide 5s linear infinite;
  }

  h4 {
    margin: 0;

    svg {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.25rem;
      color: var(--paragraph);
    }
  }

  &:hover {
    svg {
      font-size: 1.1em;
    }
  }

  @keyframes colorSlide {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }

  @media (max-width: 600px) {
    width: 80%;

    h4 {
      font-size: 1.2rem;
    }
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    font-size: 1rem;
    font-weight: 400;
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
  width: 90%;
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
  font-size: 1rem;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 105%;
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex-direction: column;
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
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5), 0 6px 8px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 8px;
  box-sizing: border-box;
  margin: 10px;

  h5 {
    margin: 0;
  }

  span {
    color: var(--paragraph);
    font-size: 1rem;
  }
`;

const FeaturesConditional = styled(({ expanded, ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  max-height: ${(props) => (props.expanded ? "700px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  box-sizing: border-box;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const TrippleP = () => {
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
    <TrippleWrapper>
      <ProjectHeader>
        <h3>Tripple-P</h3>
      </ProjectHeader>
      <ImageContainer bgImage={`${process.env.PUBLIC_URL}/tripplep1.png`}>
        <DetailsBar>
          <DetailsItem className="date">04/09 - Present</DetailsItem>
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
          <LinksColumn>
            <LinkIcon>
              <a
                href="https://github.com/pettersand/Tripple-P"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
                <SiGithub />
              </a>
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
        <p>Tripple-P: Petter's Project Planner!</p>
        <p>
          When planning my projects I've felt the need for a project planning
          tool stronger than Excel. So why not build one myself and learn
          something new along the way? Built as a desktop application, it will
          allow the user to plan and progress their projects in a tab-based
          interface based on three phases: Planning, Progress, and Production.
        </p>
        <DescriptionContent expanded={descriptionExpanded}>
          <p>
            Planning: Allows the user to navigate and plan out their project
            step-by-step. Define rules, styles, and features. Brainstorm your
            idea and make notes along the way.
          </p>
          <p>
            Progress: Track your projects progress with To Do lists, progress
            tracker, file references, and dependencies.
          </p>
          <p>
            Production: Ensure production ready code with comprehensive
            checklists covering security concerns, styling, documentation,
            performance, and refactoring.
          </p>
        </DescriptionContent>
      </DescriptionContainer>

      <SubHeader expanded={conceptsExpanded}>
        <h4 onClick={toggleConcepts}>
          Concepts Applied {conceptsExpanded ? <HiMinus /> : <HiPlus />}
        </h4>
      </SubHeader>
      <ConceptContainer>
        <Concept>Desktop App</Concept>
        <Concept>MaterialDesign</Concept>
        <Concept>JSON metadata</Concept>
      </ConceptContainer>
      <ConceptContent expanded={conceptsExpanded}>
        <ConceptContainer>
          <Concept>Tabular Design</Concept>
          <Concept>Local Folder Storage</Concept>
          <Concept>Maintainable Code</Concept>
          <Concept>Interfaces</Concept>
        </ConceptContainer>
      </ConceptContent>

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
            ready. Watch your project get closer to release, step by step.
          </span>
        </Features>
        <FeaturesConditional expanded={featuresExpanded}>
          <Features>
            <h5>Track Your Progress</h5>
            <span>
              Create your own expandable To-Do list, and never get stuck not
              knowing what to work on next!
            </span>
          </Features>
          <Features>
            <h5>User Stories</h5>
            <span>
              Define user stories to improve your understanding of how your
              users would explore the product. Don't leave anything up to
              chance!
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
              what files and functions are referenced elsewhere. Plan your
              folder structure and "what goes where".
            </span>
          </Features>
        </FeaturesConditional>
      </FeaturesContainer>
    </TrippleWrapper>
  );
};

export default TrippleP;
