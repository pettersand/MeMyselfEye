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
`;

const AboutMeEng = () => {
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
        <Divider />
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
              Approach & Thought Process
              <p>
                Accountability is at the base of my life philosophy. I truly
                believe the key to improvement is defining what is within your
                power to do, and then doing it. By taking accountability for my
                own effort and actions I have been able to learn complex skills
                in a short amount of time. And I realize there is yet much to
                learn, and thus its up to me to put in the work. Nobody else
                will do it for me.
              </p>
              <p>
                Initial Courses: I started my journey by researching what the
                general concensus was on the ideal programming language to
                learn, and what courses to take. I knew I had to get the ball
                rolling, and presentation-based learning has always been an
                effective way for me to learn. I enrolled in University of
                Michigans online course "Python for Everybody".
              </p>
              <p>
                After completing my second course, Harvard's CS50x, I jumped
                into my preferred way of acquiring knowledge; learning by doing.
                Rather than copying and completing tutorial based projects I
                decided to lean on my creativity and need for creation instead.
                My first project, which also served as the final assignment of
                CS50x, was Salloc. An old excel spreadsheet that I knew I could
                transform into a web application.
              </p>
              <p>
                I believe there is immense value in using powerful tools to aid
                in the learning process. I was curious on the world of
                generative AI and started using ChatGPT early on. I quickly
                realized that there are dangers involved with becoming reliant
                on ChatGPT for programming, so I refined my approach by ensuring
                I didn't simply let it do the work for me. Instead I used
                ChatGPT as my own pocket Senior Developer. Someone to brainstorm
                with and ask questions. My experience has shown that it can be
                an incredible learning tool when used in this manner.
              </p>
            </ContentBox>
            <ContentBox>
              Projects Step by Step
              <p>
                Salloc: My first real full-stack project. My aim was to expand
                my limited knowledge by creating a full-stack application using
                SQL and Python for the backend, while also delivering a clean
                and pleasing frontend experience.
              </p>
              <p>
                Portfolio: I needed somewhere to show off my projects as I got
                closer to sending out my first job applications. So I created a
                personal portfolio website. Which now has been replaced by a
                landing page and this interactive resume.
              </p>
              <p>
                VPS Hosting: Once that was done, I knew I wanted to host it
                online. I purchased a domain and researched hosting options.
                Since I was using PostgreSQL it seemed I had to use VPS for
                hosting. I purchased a plan from Hostinger and set it up from
                scratch in order to gain some insight into Linux with
                Ubuntu/Nginx.
              </p>
              <p>
                Builder: This project is what I might coin my capstone. I wanted
                to create something ambitious and comprehensive where I could
                combine my expertise within the exercise science field and my
                new found love of programming. I have previously created a
                complex excel spreadsheet that calculates training loads for my
                clients, and knew I wanted to improve upon that idea. What
                initially started as a workout planning tool turned into an idea
                of a all-in-one personal trainer management app. Since I have
                real ambitions of one day launching this project as a full blown
                application, I knew I had to take my time and do things right. I
                focused on clean, readable, and maintainable code, on the back
                of robust testing, security, and reusability. Along with DevOps
                tools such as Containers and CI/CD pipeline.
              </p>
              <p>
                Tripple-P: Excel seems to be the muse of all my projects. After
                planning and brainstorming my projects ive been left with many
                excel spreadsheets with many tabs. So the idea for this project
                came to mind as a tool for improving the development of my
                Builder App. I wanted a planning tool and project tracker that
                adhered to my need for organization and quality. So I jumped on
                the opportunity to get my feet wet with C# and the .NET
                framework. The development process will trail the development
                and needs of my main project.
              </p>
              <p>
                Interactive Resume: After applying for jobs as a self-taught
                developer, with no prior relevant experience, for a while I
                realized I needed to stand out from the crowd. The difficulty in
                breaking in to a new career was only amplified by an uneasy
                global economy with increased loan rates and inflation. I
                envisioned my application being hastily discarded through lack
                of experience, and knew I had to stand out and do things
                differently. And thus this website was born. At the same time, I
                wanted to get my feet wet with React, which has been a rather
                pleasant experience.
              </p>
            </ContentBox>
          </BottomContent>
        </ExtraContent>
      </BottomRow>
    </AboutMeWrapper>
  );
};

export default AboutMeEng;
