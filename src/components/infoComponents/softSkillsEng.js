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
  gap: 16px;
`;

const CategoryContainer = styled.div`
display: flex;
flex-flow: column wrap;
align-items: center;
justify-content: space-evenly;
flex: 1;
width 90%;
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
  flex-direction: column;
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
              <SubHeader>Analytical</SubHeader>

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
              <SubHeader>Innovative</SubHeader>
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
              <SubHeader>Creative</SubHeader>
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
              <SubHeader>Problem Solver</SubHeader>
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
              <SubHeader>Critical Thinker</SubHeader>
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
              <SubHeader>Resourceful</SubHeader>
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
          <CategorySkills>
            <SkillContainer>
              <SubHeader>Positive</SubHeader>

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
              <SubHeader>Quick Learner</SubHeader>
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
              <SubHeader>Empathetic</SubHeader>
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
              <SubHeader>Emotional Intelligence</SubHeader>
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
