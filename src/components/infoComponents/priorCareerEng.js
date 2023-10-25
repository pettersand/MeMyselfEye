import React from "react";
import { useAppState } from "../../App";
import styled from "styled-components";

const PriorCareerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;

const TopicHeader = styled.div`
  width: 90%;
  display: flex;
  font-size: 1.5em;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--accent);
`;

const Disclaimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  font-size: 0.9em;
  color: var(--paragraph);
`;

const Divider = styled.div`
  height: 80%;
  border: 1px solid var(--bg);
  margin-inline: 16px;
`;

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.2em;
  font-weight: 500;
  width: 50%;
  border-bottom: 1px solid var(--accent);
`;

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const PriorCareerEng = () => {
  return (
    <PriorCareerWrapper>
      <TopicHeader>Prior Career</TopicHeader>
      <Disclaimer>
        Disclaimer: Not all of the contents of this section are relevant to the
        developer field. Therefore the specific contents of each section will
        not be highlighted.
      </Disclaimer>
      <RowContainer>
        <EducationContainer>
          <SubHeader>Education</SubHeader>
        </EducationContainer>
        <Divider />
        <WorkContainer>
          <SubHeader>Work Experience</SubHeader>
        </WorkContainer>
      </RowContainer>
    </PriorCareerWrapper>
  );
};

export default PriorCareerEng;
