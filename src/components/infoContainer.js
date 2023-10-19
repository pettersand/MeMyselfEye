import React from "react";
import styled from "styled-components";
import { useAppState } from "../App";
import ProjectsEng from "./infoComponents/projectsEng";
import ProjectsNor from "./infoComponents/projectsNor";
import AboutMeEng from "./infoComponents/aboutMeEng";
import AboutMeNor from "./infoComponents/aboutMeNor";
import CoursesEng from "./infoComponents/coursesEng";
import CoursesNor from "./infoComponents/coursesNor";
import SkillsEng from "./infoComponents/skillsEng";
import SkillsNor from "./infoComponents/skillsNor";
import PriorCareerEng from "./infoComponents/priorCareerEng";
import PriorCareerNor from "./infoComponents/priorCareerNor";
import SoftSkillsEng from "./infoComponents/softSkillsEng";
import SoftSkillsNor from "./infoComponents/softSkillsNor";
import MotivationEng from "./infoComponents/motivationEng";
import MotivationNor from "./infoComponents/motivationNor";

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
    skills: SkillsEng,
    priorCareer: PriorCareerEng,
    softSkills: SoftSkillsEng,
    motivations: MotivationEng,
  },
  nor: {
    projects: ProjectsNor,
    aboutMe: AboutMeNor,
    courses: CoursesNor,
    skills: SkillsNor,
    priorCareer: PriorCareerNor,
    softSkills: SoftSkillsNor,
    motivations: MotivationNor,
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
