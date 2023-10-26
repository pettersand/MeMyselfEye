import React from "react";
import { useAppState } from "../../App";
import styled from "styled-components";

const SoftSkillsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const CategoryContainer = styled.div`
display: flex;
flex-flow: row wrap;
align-items: stretch;
justify-content: space-evenly;
width 100%;
gap: 16px;

`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  font-weight: 500;
  width: 50%;
  border-bottom: 1px solid var(--accent);
`;

const SkillContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 16px;
  padding: 16px;
  justify-content: center;
  align-items: flex-start;
  min-width: 40%;
  border-radius: 8px;
  background-color: var(--bg);
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
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1.1em;
  font-weight: 500;
  width: 90%;
  border-bottom: 1px solid var(--contrast);
`;

const SoftSkillsEng = () => {
  return (
    <SoftSkillsWrapper>
      <CategoryHeader>Professional</CategoryHeader>
      <CategoryContainer>
        <SkillContainer>
          <SubHeader>Communication/Pedagogical</SubHeader>

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
          <SubHeader>Curious</SubHeader>
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
        <SkillContainer>Accountable</SkillContainer>
      </CategoryContainer>

      <CategoryHeader>Technical</CategoryHeader>
      <CategoryContainer>
        <SkillContainer>Quick Learner</SkillContainer>
        <SkillContainer>Analytical</SkillContainer>
        <SkillContainer>Innovative</SkillContainer>
        <SkillContainer>Resourcefull</SkillContainer>
        <SkillContainer>Creative</SkillContainer>
      </CategoryContainer>

      <CategoryHeader>Personal</CategoryHeader>
      <CategoryContainer>
        <SkillContainer>Positive</SkillContainer>
        <SkillContainer>Patient</SkillContainer>
        <SkillContainer>Empathic</SkillContainer>
        <SkillContainer>Sociable</SkillContainer>
      </CategoryContainer>
    </SoftSkillsWrapper>
  );
};

export default SoftSkillsEng;
