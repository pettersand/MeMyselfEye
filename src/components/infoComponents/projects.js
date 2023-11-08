import React from "react";
import styled from "styled-components";
import Builder from "./projectComponents/builder";
import TrippleP from "./projectComponents/trippleP";
import Salloc from "./projectComponents/salloc";
import MeMyself from "./projectComponents/memyself";
import { HorizontalDivider, VerticalDivider } from "../../utils/Dividers";

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const ProjectRow = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;

  @media (max-width: 1599px) {
    flex-direction: column;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  height: 100%;
  padding: 0 16px;
  gap: 16px;

  p {
    font-size: 0.9em;
    margin: 0;
    color: var(--paragraph);
  }

  h4 {
    color: var(--headline);
  }

  @media (max-width: 600px) {
    padding: 0 8px;
  }
`;

const Projects = () => {
  return (
    <ProjectWrapper>
      <ProjectRow>
        <ProjectContainer>
          <Builder />
        </ProjectContainer>

        <VerticalDivider />

        <ProjectContainer>
          <TrippleP />
        </ProjectContainer>
      </ProjectRow>

      <HorizontalDivider />

      <ProjectRow>
        <ProjectContainer>
          <Salloc />
        </ProjectContainer>

        <VerticalDivider />

        <ProjectContainer>
          <MeMyself />
        </ProjectContainer>
      </ProjectRow>
    </ProjectWrapper>
  );
};

export default Projects;
