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

const AboutMeContainer = styled.div`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  height: 100%;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

const AboutMeNor = () => {
  const { state } = useAppState();
  const { detailLevel } = state;

  return (
    <AboutMeWrapper>
      <AboutMeContainer visible={detailLevel === "minimal"}>
        <h4>Ny Karriere</h4>
      </AboutMeContainer>
      <AboutMeContainer visible={detailLevel === "detailed"}>
        <h4>Ny Karriere</h4>
      </AboutMeContainer>

      <AboutMeContainer visible={detailLevel === "minimal"}>
        <h4>Læringsprosessen</h4>
      </AboutMeContainer>
      <AboutMeContainer visible={detailLevel === "detailed"}>
        <h4>Læringsprosessen</h4>
      </AboutMeContainer>

      <AboutMeContainer visible={detailLevel === "minimal"}>
        <h4>Motivasjon</h4>
      </AboutMeContainer>
      <AboutMeContainer visible={detailLevel === "detailed"}>
        <h4>Motivasjon</h4>
      </AboutMeContainer>

      <AboutMeContainer visible={detailLevel === "minimal"}>
        <h4>Lidenskap</h4>
      </AboutMeContainer>
      <AboutMeContainer visible={detailLevel === "detailed"}>
        <h4>Lidenskap</h4>
      </AboutMeContainer>
    </AboutMeWrapper>
  );
};

export default AboutMeNor;
