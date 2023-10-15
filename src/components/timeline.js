import React from "react";
import styled from "styled-components";

const TimelineWrapper = styled.div`
  height: 100%;
  width: 2px;
  background: linear-gradient(#b4475e, #47b467);
  position: relative;
`;

const Milestone = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color || "white"};
  border-radius: 15px;
  position: absolute;
  top: ${(props) => props.position || "0%"};
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const milestones = [
  {
    title: "Excel",
    date: "January 2020",
    description: "This is where my React journey began...",
    thumbnail: "some-image-url-or-path",
    position: "1%",
    color: "#B49D47",
  },
  {
    title: "Python",
    date: "May 2023",
    description: "I started my first course.",
    thumbnail: "image",
    position: "10%",
    color: "#47B467",
  },
  {
    title: "Python",
    date: "May 2023",
    description: "I started my first course.",
    thumbnail: "image",
    position: "20%",
    color: "#47B49E",
  },
  {
    title: "Python",
    date: "May 2023",
    description: "I started my first course.",
    thumbnail: "image",
    position: "30%",
    color: "#4794B4",
  },
  {
    title: "Python",
    date: "May 2023",
    description: "I started my first course.",
    thumbnail: "image",
    position: "40%",
    color: "#475EB4",
  },
  {
    title: "Python",
    date: "May 2023",
    description: "I started my first course.",
    thumbnail: "image",
    position: "50%",
    color: "#6647B4",
  },
  {
    title: "Python",
    date: "May 2023",
    description: "I started my first course.",
    thumbnail: "image",
    position: "60%",
    color: "#9D47B4",
  },
  {
    title: "Python",
    date: "May 2023",
    description: "I started my first course.",
    thumbnail: "image",
    position: "70%",
    color: "#B44795",
  },
  {
    title: "Python",
    date: "May 2023",
    description: "I started my first course.",
    thumbnail: "image",
    position: "80%",
    color: "#B4475E",
  },
];

const Timeline = () => {
  return (
    <TimelineWrapper>
      {milestones.map((milestone, index) => (
        <Milestone
          key={index}
          position={milestone.position}
          color={milestone.color}
        >
          {/* Will add the thumbnail and label here */}
        </Milestone>
      ))}
    </TimelineWrapper>
  );
};

export default Timeline;
