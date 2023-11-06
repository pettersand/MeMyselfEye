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
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
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
              Curiosity has always been a fitting word to describe who I am, and
              how I interact with the world around me. With an innate need to
              understand the why and how, I have acquired a lot of knowledge
              about a lot of things. A constant quest for improvement in myself
              and the results of my work has acted as a driving force in pushing
              me to further innovate and make an impact in peoples lives. I am a
              multi-passionate person, with a natural ability to understand
              complex concepts and how I can affect it with my unique world-view
              and problem solving abilities.
            </p>
            <p>
              While software development is where my focus currently lies, I
              remain open to the other possibilities the tech world has to
              offer. Roles within data analysis or more hybrid IT-roles
              involving interpersonal communication definitely do pique my
              interest as well. In short; my goal is to be a part of meaningful
              projects that make a difference, while challenging me to become
              better along the way.
            </p>
          </TopContent>
          <TopContent>
            <h4>Skills Beyond Code</h4>
            <p>
              I've had to privilege to engage with a diverse group of
              inidividuals through my work as a personal trainer, and as a
              teaching assistant for youth with special needs. This journey has
              both played on my ability to understand people, as well as further
              fostered it. With a keen sense for the human mind I excel in
              reading people and understanding their motivations and
              personality. This allows me to adapt my approach in how I
              communicate with them, and ensures my work aligns with their
              requests.
            </p>

            <p>
              My academic background has provided me with skills in data
              analysis and experience in making data driven decisions.
              Furthermore, I understand the importance of the nuances between
              data, and client needs analysis. My expertise lies in
              understanding both aspects, and combining them to provide the best
              solution possible.
            </p>
          </TopContent>
          <TopContent>
            <h4>What Excites Me</h4>
            <p>
              While technology is a vast field, I’m particularly intrigued by
              projects that address real-world problems, improve on dated
              products, and ultimately, contribute to a better tomorrow. Whether
              I’m diving deep into code or analyzing data sets, my enthusiasm
              and positivity remain constant. I’m eager to explore roles and
              challenges that allow me to blend my technical prowess with my
              inherent passion for making a difference.
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
              After over 13 years in the exercise industry, I finally realized
              that I had to move on. There are aspects of the industry that
              simply didn't align with my ambitions and preferences. Though I
              take with me invaluable experiences, life lessons, and a deep
              understanding of the human psyche. The world of technology and
              development struck me as the perfect career path for me to embark
              on. It plays to my strengths as a person, and fills my need for
              creation, challenge, and enjoyment.
            </p>
          </TopContent>
          <TopContent>
            <p>
              While the conventional path of a bachelors degree tempted me,
              practicalities, responsibilities, and an underlying sense of
              immediacy pushed me towards self-learning. The journey of
              educating myself in the nuanced world of code, on evenings and
              weekends, became an exhilarating challenge. I quickly felt a sense
              of clarity that I had made the correct decision, and have since
              not looked back.
            </p>
          </TopContent>
          <TopContent>
            <p>
              Today, I stand at a juncture where I've left my past career to
              fully immerse myself in development. Juggling the responsibilities
              of work as well as learning on my spare time felt
              counter-intuitive to my ambitions of breaking into the IT-field.
              So I decided that I'd rather take the plunge, and free up more
              time to truly delve into this new path. Now I'm approaching this
              new line of work with vigor and a need to prove my worth.
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
                My core belief in life is the principle of accountability.
                Recognizing that growth is a product of both vision and effort,
                I've persistently worked to turn gaps in knowledge into mastery.
                One cannot decide the outcome of things not within my control;
                so I choose to focus my efforts on the things I have agency
                over. I am the captain of my own journey, and every project,
                every course, every challenge faced is a testament to my drive
                and adaptability.
              </p>
              <h4>Beginning Steps</h4>
              <p>
                You cannot build a house without a foundation. My learning
                process commenced with thorough research, seeking insight into
                the best foundational programming language, and how to learn it.
                I started with a course of basic Pythong programming called
                "Python for Everybody" on coursera, hosted by the University of
                Michigan. Soon after, I jumped into Harvard's CS50x course.
                Though the theoretical foundation was just the start; I'm a firm
                believer in learning by doing.
              </p>
              <h4>Hands-On Experience</h4>

              <p>
                My first foray into full-stack development was spearheaded by
                Salloc, a project I had been wanting to create for a while.
                Based on an old Excel spreadsheet, I sought to improve upon the
                initial idea for my own personal use, while also learning the
                basics of creating a web app from scratch.
              </p>
              <p>
                Recognizing the need for a digital portfolio, I designed a
                personal site to house my projects. This initiative led me to
                explore the domains of hosting, diving into the workings of
                Linux, Ubuntu, and Nginx with a VPS on Hostinger.
              </p>
            </ContentBox>
            <ContentBox>
              <h4>Innovations & Challenges</h4>
              <p>
                Builder, my capstone project, and brain-child, stood as the
                bridge between my roots in exercise science and my newfound
                programming path. Also originating from a comprehensive Excel
                tool, the project evolved into an ambitious personal trainer
                management application. Prioritizing clean code, security, and
                robust testing, I ventured into DevOps, utilizing containers and
                CI/CD pipelines. This project is not something I will rush, but
                rather something I hope to work on for a while in order to
                ensure a high quality product at the end of development.
              </p>
              <p>
                Tripple-P, influenced by my affinity for Excel as well, emerged
                as a natural step during the development of Builder. I found
                myself with a mess of Excel spreadsheets for all of my projects
                planning, so I thought why not create my own planning tool?
                Venturing into C# and the .NET framework, this tool highlights
                my commitment to efficiency, organization, and quality in the
                software development process.
              </p>
              <h4>Standing Out</h4>
              <p>
                The challenge of pivoting careers in a turbulent economic
                climate made it clear that I had to stand out from the crowd.
                This interactive resume, built in React, is the response.
                Providing an interactive way for potential employers to get to
                know me felt like a great way to get their attention. This
                project reflects my proactive approach to obstacles, always
                seeking unique solutions while expanding my tech repertoire.
              </p>
              <h4>A Guiding Hand</h4>
              <p>
                The world of AI and how developers should utilize it is the
                source of much discord these days. Many claiming it to be
                nothing but hype, while others praising it was the second
                coming. I chose to approach it with curiosity and care. Being
                mindful of the dangers of becoming a copy paste developer, I
                focused on rather using ChatGPT as a "pocket senior developer".
                Meaning I used it as a guide in tackling new concepts, and a
                mentor in brainstorming and learning as I went along. I believe
                it has been instrumental in my ability to quickly learn
                programming to the degree I currently hold.
              </p>
            </ContentBox>
          </BottomContent>
        </ExtraContent>
      </BottomRow>
    </AboutMeWrapper>
  );
};

export default AboutMe;
