import React from "react";
import styled from "styled-components";

const ResumeWrapper = styled.div`
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Resume = () => {
  return (
    <ResumeWrapper>
      <h1>Resume</h1>
      <h2>Skills</h2>
      <h2>Projects</h2>
      <h2>Courses</h2>
      <h2>Prior Career</h2>
    </ResumeWrapper>
  );
};

export default Resume;
