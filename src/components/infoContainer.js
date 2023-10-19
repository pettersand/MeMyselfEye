import React from "react";
import styled from "styled-components";
import { useAppState } from "../App";
import ProjectsEng from "./infoComponents/projectsEng";
import ProjectsNor from "./infoComponents/projectsNor";
import AboutMeEng from "./infoComponents/aboutMeEng";
import AboutMeNor from "./infoComponents/aboutMeNor";
import CoursesEng from "./infoComponents/coursesEng";
import CoursesNor from "./infoComponents/coursesNor";

const ContentContainer = styled.div`
  background: linear-gradient(rgba(3, 41, 57, 0.95), rgba(0, 0, 0, 0.8));
  width: 100%;
  border-radius: 10px;
  min-height: 20vh;
  display: flex;
  flex-direction: row;
`;

const componentMap = {
  eng: {
    projects: ProjectsEng,
    aboutMe: AboutMeEng,
    courses: CoursesEng,
  },
  nor: {
    projects: ProjectsNor,
    aboutMe: AboutMeNor,
    courses: CoursesNor,
  },
};

const InfoContainer = () => {
  const { state } = useAppState();

  const ActiveComponent = componentMap[state.language][state.activeInfo];

  return (
    <ContentContainer>
      {ActiveComponent && <ActiveComponent />}
    </ContentContainer>
  );
};

export default InfoContainer;
