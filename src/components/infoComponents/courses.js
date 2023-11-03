import React from "react";
import styled from "styled-components";
import { VerticalDivider } from "../../utils/Dividers";
import Harvard from "./courseComponents/cs50";
import Python from "./courseComponents/pythonForEverybody";

const CoursesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  max-width: 30vw;
  height: 100%;
  padding: 16px;
  gap: 16px;
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
