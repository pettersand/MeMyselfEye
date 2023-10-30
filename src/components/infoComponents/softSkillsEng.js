import React, { useState } from "react";
import { useAppState } from "../../App";
import styled from "styled-components";
import { HiMinus, HiPlus } from "react-icons/hi2";

const SoftSkillsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const CategoryContainer = styled.div`
display: flex;
flex-flow: column wrap;
align-items: center;
justify-content: flex-start;
flex: 1;
width 90%;
gap: 16px;

`;

const CategoryHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  font-weight: 500;
  width: 60%;
  border-bottom: 1px solid var(--accent);

  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const CategorySkills = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 8px;
  background-color: var(--bg);
  max-width: 40%;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 8px 0;

  p {
    margin: 4px 0;
    color: var(--paragraph);
  }
`;

const SubHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1.1em;
  font-weight: 500;
  width: 75%;
  border-bottom: 1px solid
    ${(props) => (props.expanded ? "var(--accent)" : "var(--complement)")};

  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const SkillDetails = styled(({ expanded, ...props }) => <div {...props} />)`
  max-height: ${(props) => (props.expanded ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;

const categorySkillsMap = {
  problemSolving: [
    "analytical",
    "innovative",
    "creative",
    "problemSolver",
    "criticalThinker",
    "resourceful",
  ],
  personal: [
    "positive",
    "curious",
    "quickLearner",
    "empathetic",
    "emotionalIntelligence",
    "patient",
  ],
  professional: ["publicSpeaking", "accountable", "ambitious", "adaptive"],
  teamwork: ["communicative", "amicable", "sociable", "leadership"],
};

const SoftSkillsEng = () => {
  const [categoryState, setCategoryState] = useState({
    problemSolving: false,
    personal: false,
    teamwork: false,
    professional: false,
  });

  const [skillState, setSkillState] = useState({
    analytical: true,
    innovative: true,
    positive: true,
    curious: true,
    communicative: true,
    amicable: true,
    accountable: true,
    adaptive: true,
  });

  const toggleCategory = (category) => {
    const categoryIsExpanded = categoryState[category];

    // Toggle the category itself
    setCategoryState((prevState) => ({
      ...prevState,
      [category]: !categoryIsExpanded,
    }));

    // If category is currently expanded, collapse all skills within it
    // If category is currently collapsed, expand all skills within it
    const updatedSkills = categorySkillsMap[category].reduce((acc, skill) => {
      acc[skill] = !categoryIsExpanded;
      return acc;
    }, {});

    setSkillState((prevState) => ({
      ...prevState,
      ...updatedSkills,
    }));
  };

  const toggleSkill = (skill) => {
    setSkillState((prevState) => ({
      ...prevState,
      [skill]: !prevState[skill],
    }));
  };

  return (
    <SoftSkillsWrapper>
      <ContainerRow>
        <CategoryContainer>
          <CategoryHeader onClick={() => toggleCategory("problemSolving")}>
            Problem Solving & Innovation
            {categoryState.problemSolving ? <HiMinus /> : <HiPlus />}
          </CategoryHeader>
          <CategorySkills>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("analytical")}
                expanded={skillState.analytical}
              >
                Analytical {skillState.analytical ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.analytical}>
                <SkillItem>
                  Description:
                  <p>
                    Breaking down complex information to draw informed
                    conclusions and make decisions.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    Leveraging the analytical mindset honed through my Master's
                    in Exercise Science, I approach coding systematically, and
                    always aim at improving programming solutions. This approach
                    mirrors my use of performance data as a personal trainer,
                    always aiming for optimized, data-driven outcomes.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>

            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("innovative")}
                expanded={skillState.innovative}
              >
                Innovative {skillState.innovative ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.innovative}>
                <SkillItem>
                  Description:
                  <p>
                    Thinking outside the box to develop original solutions and
                    improvements.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    In the realm of development, I continuously seek
                    unconventional methods to enhance efficiency and user
                    experience. My passion for breaking norms and improving
                    systems propels me to create unique digital solutions,
                    echoing my vision of pioneering innovative business
                    ventures.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("creative")}
                expanded={skillState.creative}
              >
                Creative {skillState.creative ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.creative}>
                <SkillItem>
                  Description:
                  <p>
                    Imagine or invent something original, breaking away from
                    established patterns to look at things in a novel way.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    As a developer, I leverage my creativity to design intuitive
                    and unique user interfaces as well as to implement
                    unconventional solutions to problems. My drive to imagine
                    and invent has followed me in life through hobbies such as
                    playing instruments, drawing, and 3D modeling.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("problemSolver")}
                expanded={skillState.problemSolver}
              >
                Problem Solver
                {skillState.problemSolver ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.problemSolver}>
                <SkillItem>
                  Description:
                  <p>
                    Finding solutions to challenges, by analyzing the situation
                    and applying logical reasoning.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    I love the puzzle-like nature of coding. Each hurdle is an
                    opportunity, and there's a unique thrill in orchestrating
                    pieces of code to synchronize harmoniously. My love for this
                    intricate dance is evident every time a solution falls into
                    place, fueling my passion and ensuring effective outcomes.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("criticalThinker")}
                expanded={skillState.criticalThinker}
              >
                Critical Thinker
                {skillState.criticalThinker ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.criticalThinker}>
                <SkillItem>
                  Desc:<p>Description goes here</p>
                </SkillItem>
                <SkillItem>
                  Demonstrated: <p>Demonstrate skill here</p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>How I apply this trait in a job environment</p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("resourceful")}
                expanded={skillState.resourceful}
              >
                Resourceful {skillState.resourceful ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.resourceful}>
                <SkillItem>
                  Desc:<p>Description goes here</p>
                </SkillItem>
                <SkillItem>
                  Demonstrated: <p>Demonstrate skill here</p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>How I apply this trait in a job environment</p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
          </CategorySkills>
        </CategoryContainer>

        <CategoryContainer>
          <CategoryHeader onClick={() => toggleCategory("personal")}>
            Personal Attributes & Growth
            {categoryState.personal ? <HiMinus /> : <HiPlus />}
          </CategoryHeader>
          <CategorySkills>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("positive")}
                expanded={skillState.positive}
              >
                Positive {skillState.positive ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.positive}>
                <SkillItem>
                  Desc:<p>Description goes here</p>
                </SkillItem>
                <SkillItem>
                  Demonstrated: <p>Demonstrate skill here</p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>How I apply this trait in a job environment</p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>

            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("curious")}
                expanded={skillState.curious}
              >
                Curious {skillState.curious ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.curious}>
                <SkillItem>
                  Desc:<p>Description goes here</p>
                </SkillItem>
                <SkillItem>
                  Demonstrated: <p>Demonstrate skill here</p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>How I apply this trait in a job environment</p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("quickLearner")}
                expanded={skillState.quickLearner}
              >
                Quick Learner{" "}
                {skillState.quickLearner ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.quickLearner}>
                <SkillItem>
                  Desc:<p>Description goes here</p>
                </SkillItem>
                <SkillItem>
                  Demonstrated: <p>Demonstrate skill here</p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>How I apply this trait in a job environment</p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("empathetic")}
                expanded={skillState.empathetic}
              >
                Empathetic
                {skillState.empathetic ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.empathetic}>
                <SkillItem>
                  Desc:<p>Description goes here</p>
                </SkillItem>
                <SkillItem>
                  Demonstrated: <p>Demonstrate skill here</p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>How I apply this trait in a job environment</p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("emotionalIntelligence")}
                expanded={skillState.emotionalIntelligence}
              >
                Emotional Intelligence
                {skillState.emotionalIntelligence ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.emotionalIntelligence}>
                <SkillItem>
                  Desc:<p>Description goes here</p>
                </SkillItem>
                <SkillItem>
                  Demonstrated: <p>Demonstrate skill here</p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>How I apply this trait in a job environment</p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("patient")}
                expanded={skillState.patient}
              >
                Patient
                {skillState.patient ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.patient}>
                <SkillItem>
                  Desc:<p>Description goes here</p>
                </SkillItem>
                <SkillItem>
                  Demonstrated: <p>Demonstrate skill here</p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>How I apply this trait in a job environment</p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
          </CategorySkills>
        </CategoryContainer>
      </ContainerRow>

      <ContainerRow>
        <CategoryContainer>
          <CategoryHeader onClick={() => toggleCategory("teamwork")}>
            Teamwork & Collaboration
            {categoryState.teamwork ? <HiMinus /> : <HiPlus />}
          </CategoryHeader>
          <CategorySkills>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("communicative")}
                expanded={skillState.communicative}
              >
                Communicative{" "}
                {skillState.communicative ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.communicative}>
                <SkillItem>
                  Desc:<p>Description goes here</p>
                </SkillItem>
                <SkillItem>
                  Demonstrated: <p>Demonstrate skill here</p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>How I apply this trait in a job environment</p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>

            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("amicable")}
                expanded={skillState.amicable}
              >
                Amicable {skillState.amicable ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.amicable}>
                <SkillItem>
                  Desc:<p>Description goes here</p>
                </SkillItem>
                <SkillItem>
                  Demonstrated: <p>Demonstrate skill here</p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>How I apply this trait in a job environment</p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("sociable")}
                expanded={skillState.sociable}
              >
                Sociable
                {skillState.sociable ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.sociable}>
                <SkillItem>
                  Desc:<p>Description goes here</p>
                </SkillItem>
                <SkillItem>
                  Demonstrated: <p>Demonstrate skill here</p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>How I apply this trait in a job environment</p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("leadership")}
                expanded={skillState.leadership}
              >
                Leadership
                {skillState.leadership ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.leadership}>
                <SkillItem>
                  Desc:<p>Description goes here</p>
                </SkillItem>
                <SkillItem>
                  Demonstrated: <p>Demonstrate skill here</p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>How I apply this trait in a job environment</p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
          </CategorySkills>
        </CategoryContainer>

        <CategoryContainer>
          <CategoryHeader onClick={() => toggleCategory("professional")}>
            Professional Attributes
            {categoryState.professional ? <HiMinus /> : <HiPlus />}
          </CategoryHeader>
          <CategorySkills>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("accountable")}
                expanded={skillState.accountable}
              >
                Accountable
                {skillState.accountable ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.accountable}>
                <SkillItem>
                  Desc:<p>Description goes here</p>
                </SkillItem>
                <SkillItem>
                  Demonstrated: <p>Demonstrate skill here</p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>How I apply this trait in a job environment</p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>

            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("adaptive")}
                expanded={skillState.adaptive}
              >
                Adaptive {skillState.adaptive ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.adaptive}>
                <SkillItem>
                  Desc:<p>Description goes here</p>
                </SkillItem>
                <SkillItem>
                  Demonstrated: <p>Demonstrate skill here</p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>How I apply this trait in a job environment</p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("publicSpeaking")}
                expanded={skillState.publicSpeaking}
              >
                Public Speaking
                {skillState.publicSpeaking ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.publicSpeaking}>
                <SkillItem>
                  Desc:<p>Description goes here</p>
                </SkillItem>
                <SkillItem>
                  Demonstrated: <p>Demonstrate skill here</p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>How I apply this trait in a job environment</p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("ambitious")}
                expanded={skillState.ambitious}
              >
                Ambitious
                {skillState.ambitious ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.ambitious}>
                <SkillItem>
                  Desc:<p>Description goes here</p>
                </SkillItem>
                <SkillItem>
                  Demonstrated: <p>Demonstrate skill here</p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>How I apply this trait in a job environment</p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
          </CategorySkills>
        </CategoryContainer>
      </ContainerRow>
    </SoftSkillsWrapper>
  );
};

export default SoftSkillsEng;
