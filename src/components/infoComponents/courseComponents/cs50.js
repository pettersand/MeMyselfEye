import React from "react";
import styled, { keyframes } from "styled-components";

const CourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 95%;
`;

const DescriptionContainer = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
`;

const infiniteScroll = keyframes`
  from {transform: translateX(0)}
  to {transform: translateX(-50%)}
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 100%;
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  width: 100%;
  align-items: start;
  border: 1px solid var(--bg);
  box-sizing: border-box;
  padding: 24px 0;
`;

const CarouselContent = styled.div.attrs((props) => ({
  animationSpeed: props.animationSpeed || 20,
}))`
  display: flex;
  animation: ${infiniteScroll} ${(props) => props.animationSpeed}s infinite
    linear;
`;

const CarouselItem = styled.div`
  display: flex;
  white-space: nowrap;
  padding-right: 32px;
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
    { id: 8, name: "Computer Languages" },
    { id: 9, name: "Software Best Practices" },
    { id: 10, name: "Command Line Interface" },
  ],
};

const Harvard = () => {
  return (
    <CourseWrapper>
      <DescriptionContainer>
        <p>
          Harvard University's introduction to the intellectual enterprises of
          computer science and the art of programming for majors and non-majors
          alike, with or without prior programming experience. An entry-level
          course taught by David J. Malan, CS50x teaches students how to think
          algorithmically and solve problems efficiently.
        </p>
      </DescriptionContainer>

      <CarouselContainer>
        <Carousel>
          <CarouselContent>
            {courseData.toolbox.map((tool) => (
              <CarouselItem key={tool.id}>{tool.name}</CarouselItem>
            ))}
            {courseData.toolbox.map((tool) => (
              <CarouselItem key={tool.id + "-clone"}>{tool.name}</CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <Carousel>
          <CarouselContent>
            {courseData.topics.map((topic) => (
              <CarouselItem key={topic.id}>{topic.name}</CarouselItem>
            ))}
            {courseData.topics.map((topic) => (
              <CarouselItem key={topic.id + "-clone"}>
                {topic.name}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CarouselContainer>
    </CourseWrapper>
  );
};

export default Harvard;
