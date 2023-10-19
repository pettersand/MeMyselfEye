import React from "react";
import styled from "styled-components";
import ToggleButton from "../utils/ToggleButton";
import { useAppState } from "../App";

const AboutMeWrapper = styled.div`
  color: white;
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
  padding: 10px;
  gap: 5px;

  p {
    font-weight: 100;
    margin: auto;
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
          <h2>About Me</h2>
        </AboutMeHeader>

        <AboutMeText>
          <p>
            Heres a little story all about how my life got flipped turned upside
            down.
          </p>
          <p>
            So this is where I write all the initial stuffs about myself.
            Curious? Read more!
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
            Changing Careers
          </RadioWrapper>
          <RadioWrapper>
            Passions & Motivations
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

      <AboutMeContainer isVisible={language === "nor"}>
        <AboutMeHeader>
          <h2>Litt Om Meg</h2>
        </AboutMeHeader>

        <AboutMeText>
          <p>Her en historien om hvordan livet mitt ble snudd på hodet.</p>
          <p>Her skriver jeg mer om nettopp dette. Okidoki</p>
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
