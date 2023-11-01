import React from "react";
import { useAppState } from "../../App";
import styled from "styled-components";
import Builder from "./projectComponents/builder";
import TrippleP from "./projectComponents/trippleP";
import Salloc from "./projectComponents/salloc";
import MeMyself from "./projectComponents/memyself";
import { HorizontalDivider, VerticalDivider } from "../../utils/Dividers";

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: 16px;
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
`;

const ProjectContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  height: 100%;
  padding: 16px;
  gap: 16px;
  p {
    font-size: 0.9em;
    margin: 0;
    color: var(--paragraph);
  }

  h4 {
    color: var(--headline);
  }
`;

const Divider = styled.div`
  height: 80%;
  border: 1px solid var(--bg);
  margin-inline: 16px;
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
