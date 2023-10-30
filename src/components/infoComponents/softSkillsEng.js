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

const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const CategoryContainer = styled.div`
display: flex;
flex-flow: column wrap;
align-items: center;
justify-content: space-evenly;
flex: 1;
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

const CategorySkills = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 16px;
  padding: 16px;
  justify-content: center;
  align-items: flex-start;
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
      <ContainerRow>
        <CategoryContainer>
          <CategoryHeader>Problem Solving & Innovation</CategoryHeader>
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
              <SubHeader>Adaptive & Accountable</SubHeader>
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
          </CategorySkills>
        </CategoryContainer>

        <CategoryContainer>
          <CategoryHeader>Personal Attributes & Growth</CategoryHeader>

          <SkillContainer>Quick Learner</SkillContainer>
          <SkillContainer>Analytical</SkillContainer>
          <SkillContainer>Innovative</SkillContainer>
          <SkillContainer>Resourcefull</SkillContainer>
          <SkillContainer>Creative</SkillContainer>
        </CategoryContainer>
      </ContainerRow>
      <CategoryHeader>Professional Attributes</CategoryHeader>
      <CategoryContainer>
        <SkillContainer>Positive</SkillContainer>
        <SkillContainer>Patient</SkillContainer>
        <SkillContainer>Empathic</SkillContainer>
        <SkillContainer>Sociable</SkillContainer>
      </CategoryContainer>
      <CategoryHeader>Teamwork & Collaboration</CategoryHeader>
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
