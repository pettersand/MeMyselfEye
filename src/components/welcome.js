import React from "react";
import styled from "styled-components";
import ToggleButton from "../utils/ToggleButton";
import { useAppState } from "../App";

const AboutMeWrapper = styled.div`
  color: var(--text-light);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutMeHeader = styled.div`
  color: var(--complement);

  h1,
  h2 {
    margin: 5px;
    align-items: center;
    justify-content: flex-start;
  }
`;

const AboutMeText = styled.div`
  width: 95%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;

  p {
    font-weight: 200;
    margin: 8px;
  }
`;

const Welcome = () => {
  return (
    <AboutMeWrapper>
      <AboutMeContainer>
        <AboutMeHeader>
          <h2>Hey! Over Here!</h2>
        </AboutMeHeader>

        <AboutMeText>
          <p>
            Welcome to my interactive resume! This website houses everything you
            might want to know about me; professionally, and personally.
          </p>
          <p>
            I invite you to explore any topic of relevance to the motivations
            behind your visit. Select a radiobutton to change the contents of
            the main container. Look out for ( + ) signs, which reveal in-depth
            information about individual topics.
          </p>
        </AboutMeText>
      </AboutMeContainer>
    </AboutMeWrapper>
  );
};

export default Welcome;
