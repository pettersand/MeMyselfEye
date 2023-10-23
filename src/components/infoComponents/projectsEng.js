import React from "react";
import { useAppState } from "../../App";
import styled from "styled-components";

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
  p {
    font-size: 0.9em;
  }
`;

const Divider = styled.div`
  height: 80%;
  border: 1px solid var(--bg);
`;

const ProjectHeader = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: 600;
  padding: 4px;
  border-bottom: 1px solid var(--accent);
`;

const ProjectItem = styled.div``;

const TechStack = styled.div``;

const Features = styled.div``;

const ImageContainer = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 80%;
  width: 80%;
  overflow: hidden;
`;

const ProjectsEng = () => {
  const { state } = useAppState();
  const { detailLevel } = state;

  return (
    <ProjectWrapper>
      <ProjectRow>
        <ProjectContainer isVisible={detailLevel === "minimal"}>
          <ProjectHeader>Builder</ProjectHeader>
          <p>
            Streamlines the creation and management of personalized workout
            programs. The "one-stop-shop" app I wish I had while working in the
            fitness industry.
          </p>
          <ImageContainer bgImage="/ExercisePlanner.png" />
        </ProjectContainer>
        <ProjectContainer isVisible={detailLevel === "detailed"}>
          <ProjectHeader>Builder</ProjectHeader>
        </ProjectContainer>

        <Divider />

        <ProjectContainer isVisible={detailLevel === "minimal"}>
          <ProjectHeader>Tripple-P</ProjectHeader>
        </ProjectContainer>
        <ProjectContainer isVisible={detailLevel === "detailed"}>
          <h4>Tripple-P</h4>
        </ProjectContainer>
      </ProjectRow>

      <ProjectRow>
        <ProjectContainer isVisible={detailLevel === "minimal"}>
          <ProjectHeader>Salloc</ProjectHeader>
          <p>
            Helping individuals achieve financial goals by efficiently
            allocating savings. Allows the user to set savings targets, and
            determine a percentage of future deposits to be allocated towards
            specific posts.
          </p>
          <ImageContainer bgImage="/Salloc.png" />
        </ProjectContainer>
        <ProjectContainer isVisible={detailLevel === "detailed"}>
          <h4>Salloc</h4>
        </ProjectContainer>

        <Divider />

        <ProjectContainer isVisible={detailLevel === "minimal"}>
          <ProjectHeader>Portfolio</ProjectHeader>
        </ProjectContainer>
        <ProjectContainer isVisible={detailLevel === "detailed"}>
          <h4>Portfolio</h4>
        </ProjectContainer>
      </ProjectRow>
    </ProjectWrapper>
  );
};

export default ProjectsEng;
