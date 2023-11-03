import React from "react";
import styled from "styled-components";
import { VerticalDivider } from "../../utils/Dividers";
import Harvard from "./courseComponents/cs50";
import Python from "./courseComponents/pythonForEverybody";

const CoursesWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  max-width: 50%;
  height: 100%;
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

const Courses = () => {
  return (
    <CoursesWrapper>
      <CoursesContainer>
        <Harvard />
      </CoursesContainer>

      <VerticalDivider />

      <CoursesContainer>
        <Python />
      </CoursesContainer>
    </CoursesWrapper>
  );
};

export default Courses;
