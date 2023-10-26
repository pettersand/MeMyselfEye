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
  gap: 8px;

  p {
    margin: 0;
  }
`;

const AboutMeEng = () => {
  return (
    <AboutMeWrapper>
      <TopRow>
        <MainContent>
          <ProjectHeader>About Me</ProjectHeader>
          <TopContent>
            <p>
              Basic information about me. Self taught hungry and curious
              developer. Poised and ready to jump into this new expansive world
              and ready to get hurt.
            </p>
          </TopContent>
          <TopContent>
            <p>
              Always been interested in tech. Hobbies from a young age included
              Dreamweaver HTML, graphic design photoshop, gaming and performance
              tracking data gathering, cubase and music editing,{" "}
            </p>
          </TopContent>
          <TopContent>
            <p>Third row here</p>
          </TopContent>
        </MainContent>
        <Divider />
        <MainContent>
          <ProjectHeader>Changing Careers</ProjectHeader>
          <TopContent>
            <p>
              After 13 years, and a masters degree in the training industry, i
              finally realized...
            </p>
          </TopContent>
          <TopContent>
            <p>
              When I stumbled upon the idea of coding and programming everything
              clicked. Specifically once I realized the wealth of information
              available online, and the fact that it was indeed possible to not
              only learn it on your own, but break into the industry
              professionally.
            </p>
          </TopContent>
          <TopContent>
            <p>
              Now I'm at the point where I have resigned from my former job in
              order to focus all my attention on improving my knowledge and
              skills as a developer.
            </p>
          </TopContent>
        </MainContent>
      </TopRow>
      <BottomRow>
        <ExtraContent>
          <ProjectHeader>My Learning Process</ProjectHeader>
          <BottomContent>
            <ContentBox>
              Approach & Thought Process
              <p>Accountability</p>
              <p>Initial Courses</p>
              <p>Learning by doing</p>
              <p>Using Generative AI</p>
              <p>MidJourney & ChatGPT</p>
            </ContentBox>
            <ContentBox>
              Projects Step by Step
              <p>Salloc</p>
              <p>Portfolio</p>
              <p>VPS Hosting</p>
              <p>Builder</p>
              <p>Tripple-P Project Planner</p>
              <p>Interactive Resume</p>
            </ContentBox>
            <ContentBox>
              Focus & Thought Process
              <p>Self designed projects rather than tutorials</p>
              <p>
                Structured work, mimicing real world environments to the best of
                my ability.
              </p>
              <p>Dipping my toe in several languages and concepts</p>
            </ContentBox>
          </BottomContent>
        </ExtraContent>
        <ExtraContent>
          <ProjectHeader>Passions & Motivations</ProjectHeader>
          <BottomContent>
            <ContentBox>
              Innovation
              <p>
                Every problem has a solution, and every solution has room for
                improvement.
              </p>
            </ContentBox>
            <ContentBox>
              Creating
              <p>I love making stuff from scratch</p>
            </ContentBox>
            <ContentBox>
              Other Interests & Hobbies
              <p>Music</p>
              <p>Gaming</p>
              <p>Financial Markets</p>
              <p>Drawing</p>
              <p>Cooking</p>
            </ContentBox>
          </BottomContent>
        </ExtraContent>
      </BottomRow>
    </AboutMeWrapper>
  );
};

export default AboutMeEng;
