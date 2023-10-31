import React from "react";
import styled from "styled-components";
import { useAppState } from "../App";
import ProjectsEng from "./infoComponents/projectsEng";
import AboutMeEng from "./infoComponents/aboutMeEng";
import CoursesEng from "./infoComponents/coursesEng";
import SkillsEng from "./infoComponents/skillsEng";
import PriorCareerEng from "./infoComponents/priorCareerEng";
import SoftSkillsEng from "./infoComponents/softSkillsEng";
import MotivationEng from "./infoComponents/motivationEng";

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
  projects: ProjectsEng,
  aboutMe: AboutMeEng,
  courses: CoursesEng,
  skills: SkillsEng,
  priorCareer: PriorCareerEng,
  softSkills: SoftSkillsEng,
  motivations: MotivationEng,
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
