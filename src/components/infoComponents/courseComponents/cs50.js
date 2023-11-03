import React from "react";
import { HiLink } from "react-icons/hi2";
import styled, { keyframes } from "styled-components";
import { HorizontalDivider } from "../../../utils/Dividers";

const CourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 90%;
  gap: 16px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  width: 100%;
  padding: 16px 0;
  gap: 16px;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  h5 {
    margin: 4px 0;
  }
`;

const ImageContainer = styled(({ bgImage, ...props }) => <div {...props} />)`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  gap: 16px;
  height: 250px;
  width: 100%;
  box-shadow: inset 0px 0px 5px 5px rgba(0, 0, 0, 0.75);
`;

const DetailsBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 16px;

  &.top {
    justify-content: space-between;
  }

  &.bottom {
    justify-content: center;
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
  align-items: start;
  justify-content: center;
  width: 100%;
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
  min-height: 150px;
  min-width: 150px;
  margin-right: 24px;
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
  gap: 16px;
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  width: 100%;
  align-items: start;
  background-color: var(--bg);
  box-shadow: inset 0px 0px 4px 4px rgba(0, 0, 0, 0.6);
  position: relative;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 24px 0;

  // Left shadow red)
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 16px;
    opacity: 0.3;
    background: linear-gradient(
      to right,
      var(--contrast),
      rgba(0, 0, 0, 0) 80%
    );
    box-shadow: inset 1px 0px 0px 0px var(--contrast);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    z-index: 2;
  }

  // Right shadow green)
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 16px;
    opacity: 0.3;
    background: linear-gradient(to left, var(--accent), rgba(0, 0, 0, 0) 80%);
    box-shadow: inset -1px 0px 0px 0px var(--accent);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    z-index: 2;
  }
`;

const CarouselContent = styled.div.attrs((props) => ({
  animationSpeed: props.animationSpeed || 30,
}))`
  display: flex;
  animation: ${infiniteScroll} ${(props) => props.animationSpeed}s infinite
    linear;
`;

const CarouselItem = styled.div`
  display: flex;
  white-space: nowrap;
  padding-right: 48px;
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
    { id: 8, name: "Computer Languages" },
    { id: 9, name: "Software Best Practices" },
    { id: 10, name: "Command Line Interface" },
  ],
};

const Harvard = () => {
  return (
    <CourseWrapper>
      <RowContainer>
        <DescriptionContainer>
          <p>
            Harvard University's introduction to the intellectual enterprises of
            computer science and the art of programming for majors and
            non-majors alike, with or without prior programming experience. An
            entry-level course taught by David J. Malan, CS50x teaches students
            how to think algorithmically and solve problems efficiently.
          </p>
        </DescriptionContainer>
        <ImageContainer bgImage="/harvardcs50duck.png">
          <DetailsBar className="top">
            <DetailsItem className="date">05/06 - 04/08</DetailsItem>
            <DetailsItem className="date">Completed</DetailsItem>
            <LinkIcon>
              <a href="" target="_blank" rel="noopener noreferrer">
                <HiLink />
                Link
              </a>
            </LinkIcon>
          </DetailsBar>
        </ImageContainer>
      </RowContainer>
      <SubHeader>
        <h4>Topics & Toolbox</h4>
      </SubHeader>
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
          <CarouselContent animationSpeed={55}>
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

      <HorizontalDivider />

      <RowContainer>
        <Logo logoImage={"/harvardLogo.png"} />
        <ColumnContainer>
          <h5>Key Takeaways</h5>
          <DescriptionContainer>
            <p>These were my key takeaways from this course.</p>
          </DescriptionContainer>
        </ColumnContainer>
      </RowContainer>
    </CourseWrapper>
  );
};

export default Harvard;
