import React from "react";
import { useAppState } from "../../App";
import styled from "styled-components";
import { HorizontalDivider, VerticalDivider } from "../../utils/Dividers";

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
  flex-direction: column;
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
  gap: 24px;

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

  h4 {
    margin-bottom: 0;
  }
`;

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <TopRow>
        <MainContent>
          <ProjectHeader>About Me</ProjectHeader>
          <TopContent>
            <p>
              From my early days of passionately creating and improving on
              existing ideas, to my more recent endeavors in software
              development, my journey has always been fueled by a desire to
              innovate and make an impact. My experiences aren’t limited to the
              realm of tech. Over the past few years, I’ve worked diligently
              with special needs youth in a school setting and as a personal
              trainer, balancing these roles with grace. These experiences have
              fortified my empathy, resilience, and unwavering work ethic.
            </p>
            <p>
              While software development is where my heart currently lies, I
              remain open to the boundless possibilities the tech world offers.
              Be it data analysis or roles that resonate more deeply with my
              previous experiences, my goal is to be a part of meaningful
              projects that make a difference.
            </p>
          </TopContent>
          <TopContent>
            <h4>Skills Beyond Code</h4>
            <p>
              Having had the privilege to interact with diverse individuals from
              various backgrounds, I’ve cultivated a keen sense for
              understanding people. This ability, coupled with my strong
              communication skills, allows me to grasp concepts and articulate
              them in a manner that’s clear and comprehensible. My knack for
              needs analysis ensures that I have a holistic understanding of
              requirements, be it from a client or a project perspective. This
              approach guarantees that my work, whether in software development
              or any other field, meets the highest standards of quality and
              precision.
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
          <ProjectHeader>Changing Careers</ProjectHeader>
          <TopContent>
            <p>
              Over a decade in exercise science and personal training gave me
              invaluable experiences, life lessons, and a deep understanding of
              human potential. However, as years passed, an innate restlessness
              burgeoned. The realization struck that perhaps I was destined for
              a different path. The world of technology beckoned, and when I
              delved into the realm of development, the pieces of the puzzle
              fell into place.
            </p>
          </TopContent>
          <TopContent>
            <p>
              While the conventional path of a bachelors degree tempted me,
              practicalities, responsibilities, and an underlying sense of
              immediacy nudged me towards self-learning. The journey of
              educating myself in the nuanced world of code, on evenings and
              weekends, became an exhilarating challenge. It wasn’t just a phase
              – it was a rediscovery, the kind that lights up one's life.
            </p>
          </TopContent>
          <TopContent>
            <p>
              Today, I stand at a juncture where I've bid adieu to my past
              career to fully immerse myself in development. This isn't a
              fleeting passion, but a testament to my tenacity and dedication.
              With an ever-burning desire to learn and evolve, I’m poised and
              determined to make a significant mark in the tech landscape.
            </p>
          </TopContent>
        </MainContent>
      </TopRow>
      
      <BottomRow>
        <ExtraContent>
          <ProjectHeader>My Learning Process</ProjectHeader>
          <BottomContent>
            <ContentBox>
              <h4>My Evolution in Tech</h4>
              <p>
                Central to my ethos is the principle of accountability.
                Recognizing that growth is a product of both vision and effort,
                I've persistently worked to turn gaps in knowledge into mastery.
                I am the captain of my learning journey, and every project,
                every course, every challenge faced is a testament to my drive
                and adaptability.
              </p>
              <h4>Beginning Steps</h4>
              <p>
                My quest commenced with diligent research, seeking the best
                foundational programming language. Understanding the
                effectiveness of structured education for my learning style, I
                embarked on the "Python for Everybody" course from the
                University of Michigan. Soon after, I navigated the complexities
                of Harvard's CS50x. But theory was just the start; I'm a firm
                believer in learning through creation.
              </p>
              <h4>Hands-On Experience</h4>
              <p>
                Salloc emerged as my maiden voyage into full-stack development.
                It was more than a project; it was the metamorphosis of an old
                excel spreadsheet into a dynamic web application, utilizing SQL
                and Python in the backend and delivering an aesthetic frontend.
              </p>
              <p>
                Recognizing the need for a digital portfolio, I designed a
                personal site to house my projects. This initiative led me to
                explore the domains of hosting, diving deep into the workings of
                Linux, Ubuntu, and Nginx with a VPS on Hostinger.
              </p>
            </ContentBox>
            <ContentBox>
              <h4>Innovations & Challenges</h4>
              <p>
                Builder, my capstone endeavor, stood as the amalgamation of my
                roots in exercise science and my blossoming programming acumen.
                Originating from a sophisticated Excel tool, the project evolved
                into an ambitious personal trainer management application.
                Prioritizing clean code, security, and robust testing, I
                ventured into DevOps, acquainting myself with containers and
                CI/CD pipelines.
              </p>
              <p>
                Tripple-P, influenced by my affinity for Excel, emerged as a
                brainchild during the development of Builder. Venturing into C#
                and the .NET framework, this tool epitomized my commitment to
                efficiency, organization, and quality in the software
                development process.
              </p>
              <h4>Standing Out</h4>
              <p>
                The challenge of pivoting careers in a tumultuous economic
                climate made it clear: I had to be distinctive. This interactive
                resume is not just a testament to my determination but also my
                maiden voyage with React. It reflects my proactive approach to
                obstacles, always seeking unique solutions while expanding my
                tech repertoire.
              </p>
              <h4>A Guiding Hand</h4>
              <p>
                Along this journey, I found an ally in ChatGPT. However, instead
                of being a crutch, I harnessed it as a pocket mentor – a
                sounding board for brainstorming and a guide for queries. Used
                judiciously, it's been an instrumental companion in my
                self-taught voyage.
              </p>
            </ContentBox>
          </BottomContent>
        </ExtraContent>
      </BottomRow>
    </AboutMeWrapper>
  );
};

export default AboutMe;
