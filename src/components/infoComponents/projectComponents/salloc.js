import React, { useState } from "react";
import styled from "styled-components";
import {
  SiCss3,
  SiFlask,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import { HiLink, HiMinus, HiPlus } from "react-icons/hi2";

const SallocWrapper = styled.div`
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
  font-size: 1.5em;
  margin-right: 4px;
  color: var(--accent);
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent);
  border-radius: 12px;
  gap: 8px;
  padding: 1px 0;
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
  background: linear-gradient(to left, rgba(0, 0, 0, 0.9), transparent);
  border-radius: 12px;
  gap: 8px;
  padding: 1px 0;
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

const Salloc = () => {
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
    <SallocWrapper>
      <ProjectHeader>Salloc</ProjectHeader>
      <ImageContainer bgImage="/salloc1.png">
        <DetailsBar>
          <DetailsItem className="date">02/08 - 25/08</DetailsItem>
        </DetailsBar>
        <TechStack>
          <TechColumn>
            <TechIcon>
              <SiPython />
              <span>Python</span>
            </TechIcon>
            <TechIcon>
              <SiFlask />
              <span>Flask</span>
            </TechIcon>
            <TechIcon>
              <SiCss3 />
              <span>CSS</span>
            </TechIcon>
            <TechIcon>
              <SiHtml5 />
              <span>HTML</span>
            </TechIcon>
            <TechIcon>
              <SiJavascript />
              <span>Javascript</span>
            </TechIcon>
          </TechColumn>
          <LinksColumn>
            <LinkIcon>
              <a
                href="https://pettersa.com/salloc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
              <HiLink />
            </LinkIcon>
            <LinkIcon>
              <a
                href="https://github.com/pettersand/Salloc"
                target="_blank"
                rel="noopener noreferrer"
              >
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
        <p>Salloc: Your Savings Allocation App!</p>
        <p>
          Have you ever felt the shame of making big purchases with money from
          your savings account? The uneasy feeling of whether you should
          purchase an item or not? Salloc solves this problem by defining how
          much of your current savings are allocated towards specific posts or
          categories.
        </p>
        <DescriptionContent expanded={descriptionExpanded}>
          <p>
            Salloc helps individuals achieve financial goals by efficiently
            allocating savings. Allowing the user to set savings targets, and
            determine a percentage of future deposits to be allocated towards
            specific posts.
          </p>
          <p>
            This project was based on an old excel spreadsheet I've been using
            to track the state of my savings. The idea is to really define what
            your savings are for, and how much you can spend on certain "posts"
            such as vacation, gadgets, or home improvement.
          </p>
        </DescriptionContent>
      </DescriptionContainer>

      <SubHeader expanded={conceptsExpanded}>
        <h4 onClick={toggleConcepts}>
          Concepts Applied {conceptsExpanded ? <HiMinus /> : <HiPlus />}
        </h4>
      </SubHeader>
      <ConceptContainer>
        <Concept>Authentication</Concept>
        <Concept>Dashboard</Concept>
        <Concept>Data Visualization</Concept>
      </ConceptContainer>
      <ConceptContent expanded={conceptsExpanded}>
        <ConceptContainer>
          <Concept>Real-Time Feedback</Concept>
          <Concept>Interactive Components</Concept>
          <Concept>Screen Reactivity</Concept>
          <Concept>Cookie Management</Concept>
          <Concept>Privacy Policy</Concept>
        </ConceptContainer>
      </ConceptContent>

      <SubHeader expanded={featuresExpanded}>
        <h4 onClick={toggleFeatures}>
          Features {featuresExpanded ? <HiMinus /> : <HiPlus />}
        </h4>
      </SubHeader>
      <FeaturesContainer>
        <Features>
          <h5>Customizable Savings Posts</h5>
          <span>
            Create personalized savings categories, such as "Emergency Fund,"
            "Travel," "Shopping," and more. Allocate specific percentages to
            each post based on your financial priorities.
          </span>
        </Features>
        <Features>
          <h5>Automated Fund Distribution</h5>
          <span>
            Salloc automatically distributes deposits and income to different
            posts according to the allocated percentages. This ensures that your
            funds are consistently directed toward your savings goals.
          </span>
        </Features>
        <FeaturesConditional expanded={featuresExpanded}>
          <Features>
            <h5>Budget-Focused Spending</h5>
            <span>
              Stay on track with your spending by checking the available funds
              in each savings post. Make informed decisions about your purchases
              and prioritize your financial objectives.
            </span>
          </Features>
          <Features>
            <h5>Goal Tracking and Motivation</h5>
            <span>
              Set savings targets for each category and track your progress over
              time. Salloc's visualizations and progress indicators provide
              motivation and encouragement to reach your financial milestones.
            </span>
          </Features>
          <Features>
            <h5>Secure and Private</h5>
            <span>
              Salloc prioritizes the security and privacy of your financial
              information. Your data is encrypted and stored securely, giving
              you peace of mind while using the app.
            </span>
          </Features>
          <Features>
            <h5>Flexibility and Control</h5>
            <span>
              Enjoy the flexibility to modify your savings goals, allocations,
              and contributions at any time. Adapt your plan to changing
              financial circumstances and make adjustments as needed.
            </span>
          </Features>
        </FeaturesConditional>
      </FeaturesContainer>
    </SallocWrapper>
  );
};

export default Salloc;
