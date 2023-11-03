import React from "react";
import { HiLink, HiStar } from "react-icons/hi2";
import styled, { keyframes } from "styled-components";
import { HorizontalDivider } from "../../../utils/Dividers";

const CourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;
  box-sizing: border-box;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 15px 2px rgba(128, 128, 128, 0.6);
  }
`;

const CourseHeader = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: 600;
  padding: 4px;
  border-bottom: 1px solid var(--accent);
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  gap: 16px;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  h5 {
    margin: 0 0 16px;
  }
`;

const ImageContainer = styled(({ bgImage, ...props }) => <div {...props} />)`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  gap: 16px;
  height: 300px;
  width: 100%;
  box-shadow: inset 0px 0px 5px 5px rgba(0, 0, 0, 0.75);
`;

const DetailsBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  &.top {
    justify-content: space-between;
  }

  &.bottom {
    justify-content: center;

    svg {
      font-size: 1.25rem;
      color: yellow;
    }
  }
`;

const DetailsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-weight: 500;
  flex: 1;

  &.date {
    color: var(--accent-text);
    font-size: 0.9rem;
    font-style: italic;
  }
`;

const LinkIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.9), transparent);
  border-radius: 12px;
  gap: 8px;
  flex: 1;

  a {
    font-size: 1rem;
    font-weight: 400;
    color: var(--accent-text);
    margin-left: 8px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    margin-left: 8px;
  }

  &:hover {
    svg {
      transform: scale(1.2);
      filter: drop-shadow(0 0 5px rgba(0, 128, 128, 0.4));
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 95%;

  p {
    margin: 0 0 16px;
  }
`;

const SubHeader = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-bottom: 1px solid var(--accent);
`;

const Logo = styled(({ logoImage, ...props }) => <div {...props} />)`
  background-image: url(${(props) => props.logoImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 175px;
  min-width: 175px;
  margin-right: 24px;
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 90%;
  flex-shrink: 1;
  overflow: hidden;
  box-shadow: inset 0px 0px 4px 4px rgba(0, 0, 0, 0.6);
  border-radius: 16px;
  padding: 8px;
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;

  align-items: start;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 16px;
`;

const CarouselContent = styled(({ animationSpeed, ...props }) => (
  <div {...props} />
))`
  display: flex;
  gap: 40px;
  box-sizing: border-box;

  animation-play-state: paused;

  @keyframes infiniteScroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  ${CourseWrapper}:hover & {
    animation: infiniteScroll ${(props) => props.animationSpeed}s infinite
      linear;
    animation-play-state: running;
  }

  @media screen and (max-width: 600px) {
  }
`;

const CarouselItem = styled.div`
  display: flex;
  flex-shrink: 1;
  white-space: nowrap;
  font-size: 1.1rem;
  font-weight: 800;
  opacity: 0.9;
`;

const courseData = {
  toolbox: [
    { id: 1, name: "C" },
    { id: 2, name: "Python" },
    { id: 3, name: "SQL" },
    { id: 4, name: "HTML/CSS" },
    { id: 5, name: "JavaScript" },
    { id: 6, name: "Flask" },
    { id: 7, name: "SQLite" },
    { id: 8, name: "Bootstrap" },
    { id: 9, name: "Jinja2" },
    { id: 10, name: "Clang" },
  ],
  topics: [
    { id: 1, name: "Data Structures & Algorithms" },
    { id: 2, name: "Web Development" },
    { id: 3, name: "Memory Management" },
    { id: 4, name: "Security" },
    { id: 5, name: "Databases" },
    { id: 6, name: "APIs" },
    { id: 7, name: "Object Oriented Programming" },
    { id: 8, name: "Command Line Interface" },
  ],
};

const combinedToolbox = [
  ...courseData.toolbox,
  ...courseData.toolbox.map((tool) => ({
    ...tool,
    id: tool.id + "-clone",
  })),
];

const combinedTopics = [
  ...courseData.topics,
  ...courseData.topics.map((topic) => ({
    ...topic,
    id: topic.id + "-clone",
  })),
];

const Harvard = () => {
  return (
    <CourseWrapper>
      <CourseHeader>Harvard CS50x</CourseHeader>
      <RowContainer>
        <DescriptionContainer>
          <p>
            Harvard University's introduction to the intellectual enterprises of
            computer science and the art of programming for majors and
            non-majors alike, with or without prior programming experience. Led
            by the dynamic and esteemed Professor David J. Malan, CS50x has
            gained global recognition, often hailed as one of the best online
            computer science courses available. With a comprehensive curriculum,
            CS50x imparts knowledge on algorithmic thinking and offers the tools
            needed to efficiently solve problems.
          </p>
        </DescriptionContainer>
        <ImageContainer bgImage="/harvardcs50duck.png">
          <DetailsBar className="top">
            <DetailsItem className="date">05/06 - 04/08</DetailsItem>
            <DetailsItem className="date">Completed</DetailsItem>
            <LinkIcon>
              <a
                href="https://cs50.harvard.edu/x/2023/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiLink />
                Link
              </a>
            </LinkIcon>
          </DetailsBar>
          <DetailsBar className="bottom">
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
          </DetailsBar>
        </ImageContainer>
      </RowContainer>
      <SubHeader>
        <h4>Topics & Toolbox</h4>
      </SubHeader>

      <CarouselContainer>
        <Carousel>
          <CarouselContent animationSpeed={18}>
            {combinedToolbox.map((tool) => (
              <CarouselItem key={tool.id}>{tool.name}</CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Carousel>
          <CarouselContent animationSpeed={29}>
            {combinedTopics.map((topic) => (
              <CarouselItem key={topic.id}>{topic.name}</CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CarouselContainer>

      <HorizontalDivider />

      <RowContainer>
        <Logo logoImage={"/harvardLogo.png"} />
        <ColumnContainer>
          <h5>Key Takeaways</h5>
          <DescriptionContainer>
            <p>
              CS50x served as a great introduction to computer science and
              fullstack development. The combination of lectures, problem sets,
              and hands-on projects ensured that I not only understood
              theoretical concepts but also learned how to apply them
              practically.
            </p>

            <p>
              Most notably I valued learning the basics of algorithms and memory
              management. It was an eye-opening course that exceeded my
              expectations and has served as the foundation for all my projects.
              This is the course that actually taught me how to create, and how
              to go from idea to something tangible and shareable.
            </p>
          </DescriptionContainer>
        </ColumnContainer>
      </RowContainer>
    </CourseWrapper>
  );
};

export default Harvard;
