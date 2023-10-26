import React from "react";
import { useAppState } from "../../App";
import styled from "styled-components";

const AboutMeWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  padding: 24px;
`;

const TopRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  gap: 16px;
`;

const MainContent = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  width: 45%;
`;

const Divider = styled.div`
  height: 80%;
  border: 1px solid var(--bg);
  margin-inline: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomRow = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const ExtraContent = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
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

const TopContent = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: flex-start;

  p {
    color: var(--paragraph);
  }
`;

const BottomContent = styled.div`
  display: flex;
  width: 90%;
  align-items: flex-start;
  justify-content: center;

  p {
    color: var(--paragraph);
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

const AboutMeEng = () => {
  return (
    <AboutMeWrapper>
      <TopRow>
        <MainContent>
          <ProjectHeader>About Me</ProjectHeader>
          <TopContent>
            <p>Yayuh, this is the first paragraph for the about me section.</p>
          </TopContent>
          <TopContent>
            <p>Second paragraph goes here</p>
          </TopContent>
          <TopContent>
            <p>Third row here</p>
          </TopContent>
        </MainContent>
        <Divider />
        <MainContent>
          <ProjectHeader>Changing Careers</ProjectHeader>
          <TopContent>
            <p>Yayuh, this is the first paragraph for changing careers.</p>
          </TopContent>
          <TopContent>
            <p>Second paragraph goes here</p>
          </TopContent>
          <TopContent>
            <p>Third row here</p>
          </TopContent>
        </MainContent>
      </TopRow>
      <BottomRow>
        <ExtraContent>
          <ProjectHeader>My Learning Process</ProjectHeader>
          <TopContent>
            <ContentBox>Step by Step</ContentBox>
            <ContentBox>Focus & Thought Process</ContentBox>
            <ContentBox>Approach</ContentBox>
          </TopContent>
        </ExtraContent>
        <ExtraContent>
          <ProjectHeader>Passions & Motivations</ProjectHeader>
          <BottomContent>
            <ContentBox>Innovation</ContentBox>
            <ContentBox>Creating</ContentBox>
            <ContentBox>
              Other Interests & Hobbies <p>Music</p>
              <p>Gaming</p>
              <p>Financial Markets</p>
            </ContentBox>
          </BottomContent>
        </ExtraContent>
      </BottomRow>
    </AboutMeWrapper>
  );
};

export default AboutMeEng;
