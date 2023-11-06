import React from "react";
import styled from "styled-components";
import { VerticalDivider } from "../../utils/Dividers";
import Harvard from "./courseComponents/cs50";
import Python from "./courseComponents/pythonForEverybody";

const CoursesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media (max-width: 1899px) {
    flex-direction: column;
  }
`;

const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 30vw;
  height: 100%;
  gap: 16px;

  @media (max-width: 1899px) {
    max-width: 60vw;
  }

  @media (max-width: 1699px) {
    max-width: 50vw;
  }

  @media (max-width: 1355px) {
    max-width: 40vw;
  }

  @media (max-width: 1199px) {
    max-width: 80vw;
  }
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
