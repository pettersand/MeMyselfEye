import React from "react";
import { useAppState } from "../../App";
import styled from "styled-components";

const SkillsWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const SkillsContainer = styled(({ isVisible, ...props }) => (
  <div {...props} style={{ display: isVisible ? "flex" : "none" }} />
))`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  height: 100%;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

const SkillsNor = () => {
  const { state } = useAppState();
  const { detailLevel } = state;

  return (
    <SkillsWrapper>
      <SkillsContainer isVisible={detailLevel === "minimal"}>
        <h4>Python, Django, Flask</h4>
      </SkillsContainer>
      <SkillsContainer isVisible={detailLevel === "detailed"}>
        <h4>Python, Django, Flask</h4>
      </SkillsContainer>
    </SkillsWrapper>
  );
};

export default SkillsNor;
