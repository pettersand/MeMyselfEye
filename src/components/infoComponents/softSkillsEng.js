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
  font-size: 1.2em;
  font-weight: 500;
  width: 50%;
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
  flex: 1 1 100;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    margin: 0;
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
  border-bottom: 1px solid var(--contrast);

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
  ],
  professional: ["publicSpeaking", "accountable", "ambitious", "adaptive"],
  teamwork: ["communicative", "amicable", "sociable", "leadership", "patient"],
};

const SoftSkillsEng = () => {
  const [categoryState, setCategoryState] = useState({
    problemSolving: false,
    personalAttributes: false,
  });

  const [skillState, setSkillState] = useState({
    analytical: false,
    innovative: false,
    creative: false,
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
            Problem Solving & Innovation{" "}
            {categoryState.problemSolving ? <HiMinus /> : <HiPlus />}
          </CategoryHeader>
          <CategorySkills>
            <SkillContainer>
              <SubHeader onClick={() => toggleSkill("analytical")}>
                Analytical {skillState.analytical ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.analytical}>
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
              <SubHeader onClick={() => toggleSkill("innovative")}>
                Innovative {skillState.innovative ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.innovative}>
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
              <SubHeader onClick={() => toggleSkill("creative")}>
                Creative {skillState.creative ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.creative}>
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
              <SubHeader onClick={() => toggleSkill("problemSolver")}>
                Problem Solver
                {skillState.problemSolver ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.problemSolver}>
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
              <SubHeader onClick={() => toggleSkill("criticalThinker")}>
                Critical Thinker{" "}
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
              <SubHeader onClick={() => toggleSkill("resourceful")}>
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
              <SubHeader onClick={() => toggleSkill("positive")}>
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
              <SubHeader onClick={() => toggleSkill("curious")}>
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
              <SubHeader onClick={() => toggleSkill("quickLearner")}>
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
              <SubHeader onClick={() => toggleSkill("empathetic")}>
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
              <SubHeader onClick={() => toggleSkill("emotionalIntelligence")}>
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
          </CategorySkills>
        </CategoryContainer>
      </ContainerRow>

      <ContainerRow>
        <CategoryContainer>
          <CategoryHeader>Teamwork & Collaboration</CategoryHeader>
          <CategorySkills>
            <SkillContainer>
              <SubHeader>Communicative</SubHeader>

              <SkillItem>
                Desc:<p>Description goes here</p>
              </SkillItem>
              <SkillItem>
                Demonstrated: <p>Demonstrate skill here</p>
              </SkillItem>
              <SkillItem>
                Application: <p>How I apply this trait in a job environment</p>
              </SkillItem>
            </SkillContainer>

            <SkillContainer>
              <SubHeader>Amicable</SubHeader>
              <SkillItem>
                Desc:<p>Description goes here</p>
              </SkillItem>
              <SkillItem>
                Demonstrated: <p>Demonstrate skill here</p>
              </SkillItem>
              <SkillItem>
                Application: <p>How I apply this trait in a job environment</p>
              </SkillItem>
            </SkillContainer>
            <SkillContainer>
              <SubHeader>Sociable/Outgoing</SubHeader>
              <SkillItem>
                Desc:<p>Description goes here</p>
              </SkillItem>
              <SkillItem>
                Demonstrated: <p>Demonstrate skill here</p>
              </SkillItem>
              <SkillItem>
                Application: <p>How I apply this trait in a job environment</p>
              </SkillItem>
            </SkillContainer>
            <SkillContainer>
              <SubHeader>Leadership</SubHeader>
              <SkillItem>
                Desc:<p>Description goes here</p>
              </SkillItem>
              <SkillItem>
                Demonstrated: <p>Demonstrate skill here</p>
              </SkillItem>
              <SkillItem>
                Application: <p>How I apply this trait in a job environment</p>
              </SkillItem>
            </SkillContainer>
            <SkillContainer>
              <SubHeader>Patient</SubHeader>
              <SkillItem>
                Desc:<p>Description goes here</p>
              </SkillItem>
              <SkillItem>
                Demonstrated: <p>Demonstrate skill here</p>
              </SkillItem>
              <SkillItem>
                Application: <p>How I apply this trait in a job environment</p>
              </SkillItem>
            </SkillContainer>
          </CategorySkills>
        </CategoryContainer>

        <CategoryContainer>
          <CategoryHeader>Professional Attributes</CategoryHeader>
          <CategorySkills>
            <SkillContainer>
              <SubHeader>Accountable</SubHeader>

              <SkillItem>
                Desc:<p>Description goes here</p>
              </SkillItem>
              <SkillItem>
                Demonstrated: <p>Demonstrate skill here</p>
              </SkillItem>
              <SkillItem>
                Application: <p>How I apply this trait in a job environment</p>
              </SkillItem>
            </SkillContainer>

            <SkillContainer>
              <SubHeader>Adaptive</SubHeader>
              <SkillItem>
                Desc:<p>Description goes here</p>
              </SkillItem>
              <SkillItem>
                Demonstrated: <p>Demonstrate skill here</p>
              </SkillItem>
              <SkillItem>
                Application: <p>How I apply this trait in a job environment</p>
              </SkillItem>
            </SkillContainer>
            <SkillContainer>
              <SubHeader>Ambitious</SubHeader>
              <SkillItem>
                Desc:<p>Description goes here</p>
              </SkillItem>
              <SkillItem>
                Demonstrated: <p>Demonstrate skill here</p>
              </SkillItem>
              <SkillItem>
                Application: <p>How I apply this trait in a job environment</p>
              </SkillItem>
            </SkillContainer>
            <SkillContainer>
              <SubHeader>Public Speaking</SubHeader>
              <SkillItem>
                Desc:<p>Description goes here</p>
              </SkillItem>
              <SkillItem>
                Demonstrated: <p>Demonstrate skill here</p>
              </SkillItem>
              <SkillItem>
                Application: <p>How I apply this trait in a job environment</p>
              </SkillItem>
            </SkillContainer>
          </CategorySkills>
        </CategoryContainer>
      </ContainerRow>
    </SoftSkillsWrapper>
  );
};

export default SoftSkillsEng;
