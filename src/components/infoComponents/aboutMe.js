import React from "react";
import styled from "styled-components";
import { VerticalDivider } from "../../utils/Dividers";

const AboutMeWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
`;

const TopRow = styled.div`
  display: flex;
  flex-flow: row wrap
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 16px;

  @media (max-width: 1599px) {
    flex-direction: column;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  width: auto;
`;

const BottomRow = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
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
  padding: 4px;
  border-bottom: 1px solid var(--accent);
  margin-bottom: 8px;
`;

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 16px;

  p {
    margin: 4px 0 8px;
  }

  h4 {
    margin: 16px 0 8px;
  }
`;

const BottomContent = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: flex-start;
  gap: 24px;

  @media (max-width: 1599px) {
    flex-direction: column;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;

  p {
    margin: 4px 0 8px;
  }

  h4 {
    margin: 16px 0 8px;
  }
`;

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <TopRow>
        <MainContent>
          <ProjectHeader>
            <h3>About Me</h3>
          </ProjectHeader>
          <TopContent>
            <p>
              Hello, and welcome! In this section I will present myself as a
              person, colleague, and developer. I hope you enjoy my interactive
              resume, and feel an itch to carry on the conversation in person.
            </p>
            <p>
              I'm driven by a natural curiosity to understand the world around
              me, always asking why and how. This thirst for knowledge drives my
              work, encouraging constant innovation and having a real impact on
              people's lives. I'm particularly drawn to technology's power to
              address real-world challenges and creating a brighter future. My
              enthusiasm stays high, whether I'm deep in code or dissecting data
              sets.
            </p>
            <p>
              Software development is my current focus, but I'm also open to the
              vast possibilities within the tech landscape. I'm excited about
              roles that would further fuel my knowledge in a setting with
              likeminded individuals. My experiences as a personal trainer and
              teaching assistant have sharpened my ability to connect with other
              people on a deep level. Furthermore, it has taught me how to adapt
              my approach to effectively understand their needs and preferences.
            </p>
            <p>
              With an academic foundation in data analysis, I value
              evidence-based decision-making and understand the nuances of
              blending insightful data interpretation with client needs in order
              to find optimal solutions for both parties. I look forward to any
              challenges that allow me to combine my technical expertise with my
              passion for positive change.
            </p>
          </TopContent>
        </MainContent>

        <VerticalDivider />

        <MainContent>
          <ProjectHeader>
            <h3>Changing Careers</h3>
          </ProjectHeader>
          <TopContent>
            <p>
              After thirteen years in the fitness industry, I recognized it was
              time for a change. Certain aspects no longer matched my goals,
              even though I gained valuable experience and insight into human
              behavior and psychology. Technology and development appealed to me
              as they matched my personal strengths and satisfied my desire for
              creativity, challenge, and continuous learning. I have always
              enjoyed puzzles and finding new ways to solve old problems.
            </p>
          </TopContent>
          <TopContent>
            <p>
              I considered a formal education, but the urgency to move forward
              and my financial and personal responsibilities guided me towards
              self-study instead. Learning to code during my free time turned
              into an engaging challenge, and it didn't take long to confirm
              that I had made the right choice!
            </p>
          </TopContent>
          <TopContent>
            <p>
              Now, I've committed to development full-time. Juggling a job and
              learning was holding me back from diving into the IT field. By
              focusing solely on this new career path, I have been able to
              dedicate the necessary time to boost my learning. I'm ready to
              tackle this industry with vigor and prove my abilities in this new
              and exciting field.
            </p>
          </TopContent>
        </MainContent>
      </TopRow>

      <BottomRow>
        <ExtraContent>
          <ProjectHeader>
            <h3>My Learning Process</h3>
          </ProjectHeader>
          <BottomContent>
            <ContentBox>
              <p>
                I believe in steering my own course, with growth being a
                deliberate result of my efforts and vision. By focusing on areas
                I can influence, I've turned knowledge gaps into bridges,
                improving my understanding with each challenge and project. I am
                well aware of what I have yet to learn, though it would be a
                rather dull journey if I was already done.
              </p>
              <h4>Beginning Steps: Courses</h4>
              <p>
                You cannot build a house without a foundation. My learning
                process started with thorough research, seeking insight into the
                best foundational programming language, and how to learn it.
                This led me to the course "Python for Everybody" on Coursera,
                closely followed by Harvard's CS50x. However, I knew practical
                application was key to truly understanding the craft.
              </p>
              <h4>Hands-On Experience: Salloc</h4>

              <p>
                My initial project, Salloc, transformed an old Excel concept
                into a practical web application, marking my entry into
                full-stack development. Recognizing the need for a digital
                portfolio, I designed a personal site to house my projects. This
                initiative led me to explore the domains of hosting, diving into
                the workings of Linux, Ubuntu, and Nginx with a VPS on
                Hostinger.
              </p>
              <h4>Innovations & Challenges: Builder</h4>
              <p>
                The transition to Builder, my brain-child, a management tool for
                personal trainers, was a natural evolution. It served as a
                bridge between my fitness background and programming. This
                project was also based on an Excel spreadsheet I actively used
                for creating effective training programs for my clients.
                Prioritizing clean code, security, and robust testing, I've
                ventured into DevOps, utilizing containers and CI/CD pipelines,
                ensuring this passion project meets high standards over time.
              </p>
            </ContentBox>
            <ContentBox>
              <p>
                Tripple-P, influenced by my affinity for Excel as well, emerged
                as a natural step during the development of Builder. I found
                myself with a mess of Excel spreadsheets for all of my project's
                planning, so I thought why not create my own planning tool?
                Venturing into C# and the .NET framework, this tool highlights
                my commitment to efficiency, organization, and quality in the
                software development process.
              </p>
              <h4>Standing Out: Interactive Resume</h4>
              <p>
                The challenge of pivoting careers in a turbulent economic
                climate made it clear that I had to stand out from the crowd.
                This interactive resume, built in React, is my response. This
                project reflects my proactive approach to obstacles, always
                seeking unique solutions while expanding my tech repertoire.
              </p>
              <h4>A Guiding Hand</h4>
              <p>
                The use of AI in development is a divisive topic. Many claiming
                it to be nothing but hype, while others praising it. I chose a
                balanced approach with curiosity and care. Being mindful of the
                dangers of becoming a copy paste developer, I focused on using
                ChatGPT as a "pocket senior developer"; meaning I used it as a
                guide for understanding new concepts, and a mentor for
                brainstorming. I believe it has been instrumental in allowing me
                to quickly upskill my programming.
              </p>
            </ContentBox>
          </BottomContent>
        </ExtraContent>
      </BottomRow>
    </AboutMeWrapper>
  );
};

export default AboutMe;
