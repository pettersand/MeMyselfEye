import React from "react";
import { useAppState } from "../../App";
import styled from "styled-components";

const PriorCareerWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const PriorCareerContainer = styled(({ isVisible, ...props }) => (
  <div {...props} style={{ display: isVisible ? "flex" : "none" }} />
))`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  height: 100%;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

const PriorCareerNor = () => {
  const { state } = useAppState();
  const { detailLevel } = state;

  return (
    <PriorCareerWrapper>
      <PriorCareerContainer isVisible={detailLevel === "minimal"}>
        <h4>Utdanning</h4>
      </PriorCareerContainer>
      <PriorCareerContainer isVisible={detailLevel === "detailed"}>
        <h4>Utdanning</h4>
      </PriorCareerContainer>
      <PriorCareerContainer isVisible={detailLevel === "minimal"}>
        <h4>Arbeidserfaring</h4>
      </PriorCareerContainer>
      <PriorCareerContainer isVisible={detailLevel === "detailed"}>
        <h4>Arbeidserfaring</h4>
      </PriorCareerContainer>
    </PriorCareerWrapper>
  );
};

export default PriorCareerNor;
