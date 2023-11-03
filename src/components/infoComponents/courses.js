import React from "react";
import styled from "styled-components";
import { VerticalDivider } from "../../utils/Dividers";
import Harvard from "./courseComponents/cs50";
import Python from "./courseComponents/pythonForEverybody";

const CoursesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 70vw;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

const CoursesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  max-width: 45%;
  height: 100%;
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
