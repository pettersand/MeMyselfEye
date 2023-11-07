import React from "react";
import { HiLink, HiOutlineStar, HiStar } from "react-icons/hi2";
import styled from "styled-components";
import { HorizontalDivider } from "../../../utils/Dividers";

const CourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  gap: 16px;
  border-radius: 16px;
  box-sizing: border-box;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 15px 2px rgba(128, 128, 128, 0.2);
  }
`;

const CourseHeader = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-bottom: 1px solid var(--accent);
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;

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
    { id: 1, name: "Python" },
    { id: 2, name: "Beautiful Soup" },
    { id: 3, name: "Pandas" },
    { id: 4, name: "SQLite" },
  ],
  topics: [
    { id: 1, name: "Programming Fundamentals" },
    { id: 2, name: "Data Structures" },
    { id: 3, name: "Networked Application APIs" },
    { id: 4, name: "Databases" },
    { id: 5, name: "File I/O" },
    { id: 6, name: "Web Crawling" },
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

const Python = () => {
  return (
    <CourseWrapper>
      <CourseHeader>
        <h3>Python for Everybody Specialization</h3>
      </CourseHeader>
      <RowContainer>
        <DescriptionContainer>
          <p>
            Python for Everybody Specialization, from the University of Michigan
            on Coursera, delves into programming fundamentals using Python. It
            covers data structures, networked application program interfaces,
            and databases. Designed for beginners, the course equips learners
            with essential Python skills for data science and web development.
          </p>
        </DescriptionContainer>
        <ImageContainer bgImage="/pythonBackground.png">
          <DetailsBar className="top">
            <DetailsItem className="date">01/05 - 04/06</DetailsItem>
            <DetailsItem className="date">Completed</DetailsItem>
            <LinkIcon>
              <a
                href="https://www.coursera.org/specializations/python"
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
            <HiOutlineStar />
          </DetailsBar>
        </ImageContainer>
      </RowContainer>
      <SubHeader>
        <h4>Topics & Toolbox</h4>
      </SubHeader>
      <CarouselContainer>
        <Carousel>
          <CarouselContent animationSpeed={10}>
            {combinedToolbox.map((tool) => (
              <CarouselItem key={tool.id}>{tool.name}</CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Carousel>
          <CarouselContent animationSpeed={25}>
            {combinedTopics.map((topic) => (
              <CarouselItem key={topic.id}>{topic.name}</CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CarouselContainer>

      <HorizontalDivider />

      <RowContainer>
        <Logo logoImage={`${process.env.PUBLIC_URL}/UM_Logo.png`} />
        <ColumnContainer>
          <h5>Key Takeaways</h5>
          <DescriptionContainer>
            <p>
              This course was a solid starting point in my coding journey. It
              laid the groundwork for my understanding of basic programming
              syntax and principles. Though it is a very introductory course, it
              teaches the basics in an efficient and entertaining way.
            </p>

            <p>
              What stood out most for me was the section on File I/O. Learning
              about reading and writing operations, I gained hands-on experience
              in analyzing data from various file formats like CSV, XML, and
              JSON. This was the first time I truly understood the power of
              programming, data, and information.
            </p>
          </DescriptionContainer>
        </ColumnContainer>
      </RowContainer>
    </CourseWrapper>
  );
};

export default Python;
