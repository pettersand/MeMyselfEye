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

const AboutMeContainer = styled(({ isVisible, ...props }) => (
  <div {...props} style={{ display: isVisible ? "flex" : "none" }} />
))`
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
  width: 90%;
  box-shadow: inset 0px 0px 5px 5px rgba(0, 0, 0, 0.75);
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

const Toggle = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
`;

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  display: none;
`;
const AboutMe = () => {
  const { state, setState } = useAppState();
  const { activeInfo, language } = state;

  const toggleActiveInfo = (value) => {
    handleActiveInfo({ target: { value } });
  };

  const handleActiveInfo = (e) => {
    setState((prevState) => ({ ...prevState, activeInfo: e.target.value }));
  };

  return (
    <AboutMeWrapper>
      <AboutMeContainer isVisible={language === "eng"}>
        <AboutMeHeader>
          <h2>Hey! Over Here!</h2>
        </AboutMeHeader>

        <AboutMeText>
          <p>
            Welcome to my interactive resume! This web app houses everything you
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

      <AboutMeContainer isVisible={language === "nor"}>
        <AboutMeHeader>
          <h2>Reisen Starter HER</h2>
        </AboutMeHeader>

        <AboutMeText>
          <p>
            Dette er historien on hvordan livet mitt ble snudd på hodet. Jeg
            ønsker å ta et minutt, så sett deg til rette, så skal jeg fortelle
            om hvordan jeg endte opp som en utvikler, med en dose flair.
          </p>
          <p>
            Jeg ønsker deg velkommen! Følg kake-smulene for å finne veien
            gjennom denne interaktive reisen.
          </p>
          <p>
            Jeg er en selvlært utvikler med en appetitt for kunnskap og
            ambisjoner om kontinuerlig faglig utvikling. Jeg er typen til å
            ville utforske stien der de færreste har gått. Dette har ledet meg
            på flere unike eventyr gjennom livet. Heng på deg, og la meg ta deg
            med på reisen om meg, meg selv, og .. jeg. (Dette funker bedre på
            engelsk...)
          </p>
        </AboutMeText>

        <Toggle>
          <RadioWrapper>
            <ToggleButton
              isSelected={state.activeInfo === "aboutMe"}
              onClick={() => toggleActiveInfo("aboutMe")}
            >
              <HiddenRadio
                type="radio"
                name="info"
                id="aboutMe"
                value="aboutMe"
                checked={state.activeInfo === "aboutMe"}
                onChange={handleActiveInfo}
              />
            </ToggleButton>
            Karriereskiftet
          </RadioWrapper>
          <RadioWrapper>
            Motivasjon & Lidenskap
            <ToggleButton
              isSelected={state.activeInfo === "motivations"}
              onClick={() => toggleActiveInfo("motivations")}
            >
              <HiddenRadio
                type="radio"
                name="info"
                id="motivations"
                value="motivations"
                checked={state.activeInfo === "motivations"}
                onChange={handleActiveInfo}
              />
            </ToggleButton>
          </RadioWrapper>
        </Toggle>
      </AboutMeContainer>
    </AboutMeWrapper>
  );
};

export default AboutMe;
