import React, { useState } from "react";
import styled from "styled-components";
import {
  SiGithub,
  SiJavascript,
  SiReact,
  SiStyledcomponents,
} from "react-icons/si";
import { HiMinus, HiPlus } from "react-icons/hi2";

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
  max-height: ${(props) => (props.expanded ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  box-sizing: border-box;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
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
      <ProjectHeader>
        <h3>Me, Myself, & I</h3>
      </ProjectHeader>
      <ImageContainer
        bgImage={`${process.env.PUBLIC_URL}/memyself3.png`}
        loading="lazy"
      >
        <DetailsBar>
          <DetailsItem className="date">18/10 - 06/11</DetailsItem>
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
          <LinksColumn>
            <LinkIcon>
              <a
                href="https://github.com/pettersand/MeMyselfEye"
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
        <p>My, Myself, an Interactive Resume</p>
        <p>
          The hardest part about breaking into a new industry isn't acquiring
          the knowledge of the technical aspects. It's figuring out how to show
          what you know. This project, and thus, this site - aims to show myself
          as a fresh breath of air; something different (I hope). I've always
          enjoyed creating from scratch and doing things differently, of which
          this website is a testament.
        </p>
        <DescriptionContent expanded={descriptionExpanded}>
          <p>
            For this project I wanted to remove the guess-work of what to
            include in my application process. You never know exactly what a
            recruiter or hiring manager is looking for. So I thought; why not
            make all the information available, and let them, or you, make the
            decisions on what to view.
          </p>
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
      </ConceptContainer>
      <ConceptContent expanded={conceptsExpanded}>
        <ConceptContainer>
          <Concept>MidJourney AI</Concept>
          <Concept>Transitions</Concept>
          <Concept>GIMP</Concept>
        </ConceptContainer>
      </ConceptContent>

      <SubHeader expanded={featuresExpanded}>
        <h4 onClick={toggleFeatures}>
          Features {featuresExpanded ? <HiMinus /> : <HiPlus />}
        </h4>
      </SubHeader>
      <FeaturesContainer>
        <Features>
          <h5>Get to Know Me!</h5>
          <span>
            Dive into my present, past, and become my future. Topics include my
            previous career and experiences, projects, soft skills, and more!
          </span>
        </Features>
        <Features>
          <h5>Explore Projects</h5>
          <span>
            Get an overview of my projects and what they can do, as well as what
            I've used to make them. Take a look at the live application, or
            check out the GitHub repository.
          </span>
        </Features>
        <FeaturesConditional expanded={featuresExpanded}>
          <Features>
            <h5>Reach Out</h5>
            <span>Reach out to me through any of my social media links.</span>
          </Features>
          <Features>
            <h5>In-depth Information</h5>
            <span>
              Expand components to learn more about them. You choose what you
              want to explore.
            </span>
          </Features>
        </FeaturesConditional>
      </FeaturesContainer>
    </MeMyselfWrapper>
  );
};

export default MeMyself;
