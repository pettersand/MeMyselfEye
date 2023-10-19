import React from "react";
import { useAppState } from "../../App";
import styled from "styled-components";

const ProjectWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const ProjectContainer = styled.div`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  height: 100%;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

const ProjectItem = styled.div``;

const ProjectsNor = () => {
  const { state } = useAppState();
  const { detailLevel } = state;

  return (
    <ProjectWrapper>
      <ProjectContainer visible={detailLevel === "minimal"}>
        <h4>Builder</h4>
      </ProjectContainer>
      <ProjectContainer visible={detailLevel === "detailed"}>
        <h4>Builder</h4>
      </ProjectContainer>

      <ProjectContainer visible={detailLevel === "minimal"}>
        <h4>Tripple-P</h4>
      </ProjectContainer>
      <ProjectContainer visible={detailLevel === "detailed"}>
        <h4>Tripple-P</h4>
      </ProjectContainer>

      <ProjectContainer visible={detailLevel === "minimal"}>
        <h4>Salloc</h4>
      </ProjectContainer>
      <ProjectContainer visible={detailLevel === "detailed"}>
        <h4>Salloc</h4>
      </ProjectContainer>

      <ProjectContainer visible={detailLevel === "minimal"}>
        <h4>Nettside</h4>
      </ProjectContainer>
      <ProjectContainer visible={detailLevel === "detailed"}>
        <h4>Nettside</h4>
      </ProjectContainer>
    </ProjectWrapper>
  );
};

export default ProjectsNor;
