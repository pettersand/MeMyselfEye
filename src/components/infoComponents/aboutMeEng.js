import React from "react";
import { useAppState } from "../../App";
import styled from "styled-components";

const AboutMeWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const AboutMeContainer = styled(({ isVisible, ...props }) => (
  <div {...props} style={{ display: isVisible ? "flex" : "none" }} />
))`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  height: 100%;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

const AboutMeEng = () => {
  const { state } = useAppState();
  const { detailLevel } = state;

  return (
    <AboutMeWrapper>
      <AboutMeContainer isVisible={detailLevel === "minimal"}>
        <h4>Changing Careers</h4>
      </AboutMeContainer>
      <AboutMeContainer isVisible={detailLevel === "detailed"}>
        <h4>Changing Careers</h4>
      </AboutMeContainer>

      <AboutMeContainer isVisible={detailLevel === "minimal"}>
        <h4>Learning Process</h4>
      </AboutMeContainer>
      <AboutMeContainer isVisible={detailLevel === "detailed"}>
        <h4>Learning Process</h4>
      </AboutMeContainer>

      <AboutMeContainer isVisible={detailLevel === "minimal"}>
        <h4>Motivations</h4>
      </AboutMeContainer>
      <AboutMeContainer isVisible={detailLevel === "detailed"}>
        <h4>Motivations</h4>
      </AboutMeContainer>

      <AboutMeContainer isVisible={detailLevel === "minimal"}>
        <h4>Passions</h4>
      </AboutMeContainer>
      <AboutMeContainer isVisible={detailLevel === "detailed"}>
        <h4>Passions</h4>
      </AboutMeContainer>
    </AboutMeWrapper>
  );
};

export default AboutMeEng;
