import React from "react";
import styled from "styled-components";

const AboutMeWrapper = styled.div`
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutMeHeader = styled.div`
  h1 {
    align-items: center;
    justify-content: flex-start;
  }
`;

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <AboutMeHeader>
        <h1>About Me</h1>
      </AboutMeHeader>
      <h2>Changing Careers</h2>
      <h2>Soft Skills</h2>
      <h2>Passions</h2>
    </AboutMeWrapper>
  );
};

export default AboutMe;
