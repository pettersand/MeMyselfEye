import React from "react";
import { useAppState } from "../../App";
import styled from "styled-components";

const MotivationWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const MotivationContainer = styled(({ isVisible, ...props }) => (
  <div {...props} style={{ display: isVisible ? "flex" : "none" }} />
))`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  height: 100%;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

const MotivationEng = () => {
  const { state } = useAppState();
  const { detailLevel } = state;

  return (
    <MotivationWrapper>
      <MotivationContainer isVisible={detailLevel === "minimal"}>
        <h4>Motivation</h4>
      </MotivationContainer>
      <MotivationContainer isVisible={detailLevel === "detailed"}>
        <h4>Motivation</h4>
      </MotivationContainer>

      <MotivationContainer isVisible={detailLevel === "minimal"}>
        <h4>Passion</h4>
      </MotivationContainer>
      <MotivationContainer isVisible={detailLevel === "detailed"}>
        <h4>Passion</h4>
      </MotivationContainer>
    </MotivationWrapper>
  );
};

export default MotivationEng;
