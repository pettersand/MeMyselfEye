import React from "react";
import styled from "styled-components";
import { useAppState } from "../App";
import Projects from "./infoComponents/projects";
import AboutMe from "./infoComponents/aboutMe";
import Courses from "./infoComponents/courses";
import PriorCareer from "./infoComponents/priorCareer";
import SoftSkills from "./infoComponents/softSkills";

const ContentContainer = styled.div`
  background-color: var(--bg2);
  color: var(--headline);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  min-height: 20vh;
  display: flex;
  flex-direction: row;
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
