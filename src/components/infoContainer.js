import React from "react";
import styled from "styled-components";
import { useAppState } from "../App";
import Projects from "./infoComponents/projects";
import AboutMe from "./infoComponents/aboutMe";
import Courses from "./infoComponents/courses";
import PriorCareer from "./infoComponents/priorCareer";
import SoftSkills from "./infoComponents/softSkills";

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const componentMap = {
  projects: Projects,
  aboutMe: AboutMe,
  courses: Courses,
  priorCareer: PriorCareer,
  softSkills: SoftSkills,
};

const InfoContainer = () => {
  const { state } = useAppState();

  const ActiveComponent = componentMap[state.activeInfo];

  return (
    <ContentContainer>
      {ActiveComponent && <ActiveComponent />}
    </ContentContainer>
  );
};

export default InfoContainer;
