import React from "react";
import { useAppState } from "../../App";
import styled from "styled-components";
import Builder from "./projectComponents/builder";
import TrippleP from "./projectComponents/trippleP";
import Salloc from "./projectComponents/salloc";
import MeMyself from "./projectComponents/memyself";

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

const ProjectContainer = styled(({ isVisible, ...props }) => (
  <div {...props} style={{ display: isVisible ? "flex" : "none" }} />
))`
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

const ProjectsEng = () => {
  const { state } = useAppState();
  const { detailLevel } = state;

  return (
    <ProjectWrapper>
      <ProjectRow>
        <ProjectContainer isVisible={detailLevel === "minimal"}>
          <Builder />
        </ProjectContainer>

        <Divider />

        <ProjectContainer isVisible={detailLevel === "minimal"}>
          <TrippleP />
        </ProjectContainer>
        <ProjectContainer isVisible={detailLevel === "detailed"}>
          <h4>Tripple-P</h4>
        </ProjectContainer>
      </ProjectRow>

      <ProjectRow>
        <ProjectContainer isVisible={detailLevel === "minimal"}>
          <Salloc />
        </ProjectContainer>

        <Divider />

        <ProjectContainer isVisible={detailLevel === "minimal"}>
          <MeMyself />
        </ProjectContainer>
        <ProjectContainer isVisible={detailLevel === "detailed"}>
          <h4>Portfolio</h4>
        </ProjectContainer>
      </ProjectRow>
    </ProjectWrapper>
  );
};

export default ProjectsEng;
