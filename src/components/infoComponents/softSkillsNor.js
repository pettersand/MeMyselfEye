import React from "react";
import { useAppState } from "../../App";
import styled from "styled-components";

const SoftSkillsWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const SoftSkillsContainer = styled(({ isVisible, ...props }) => (
  <div {...props} style={{ display: isVisible ? "flex" : "none" }} />
))`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  height: 100%;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

const SoftSkillsNor = () => {
  const { state } = useAppState();
  const { detailLevel } = state;

  return (
    <SoftSkillsWrapper>
      <SoftSkillsContainer isVisible={detailLevel === "minimal"}>
        <h4>Lærer Raskt</h4>
      </SoftSkillsContainer>
      <SoftSkillsContainer isVisible={detailLevel === "detailed"}>
        <h4>Lærer Raskt</h4>
      </SoftSkillsContainer>
      <SoftSkillsContainer isVisible={detailLevel === "minimal"}>
        <h4>Empati</h4>
      </SoftSkillsContainer>
      <SoftSkillsContainer isVisible={detailLevel === "detailed"}>
        <h4>Empati</h4>
      </SoftSkillsContainer>
    </SoftSkillsWrapper>
  );
};

export default SoftSkillsNor;
