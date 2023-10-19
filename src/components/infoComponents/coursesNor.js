import React from "react";
import { useAppState } from "../../App";
import styled from "styled-components";

const CoursesWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const CoursesContainer = styled(({ isVisible, ...props }) => (
  <div {...props} style={{ display: isVisible ? "flex" : "none" }} />
))`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  height: 100%;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

const CoursesNor = () => {
  const { state } = useAppState();
  const { detailLevel } = state;

  return (
    <CoursesWrapper>
      <CoursesContainer isVisible={detailLevel === "minimal"}>
        <h4>Pyton forr evverybaddy</h4>
      </CoursesContainer>
      <CoursesContainer isVisible={detailLevel === "detailed"}>
        <h4>Harvard CS50x</h4>
      </CoursesContainer>
    </CoursesWrapper>
  );
};

export default CoursesNor;
