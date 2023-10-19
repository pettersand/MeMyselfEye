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

const AboutMeHeader = styled.div`
  h1,
  h2 {
    margin: 5px;
    align-items: center;
    justify-content: flex-start;
  }
`;

const Toggle = styled.div`
  width: 80%;
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
  const { activeInfo } = state;

  const toggleActiveInfo = (value) => {
    handleActiveInfo({ target: { value } });
  };

  const handleActiveInfo = (e) => {
    setState((prevState) => ({ ...prevState, activeInfo: e.target.value }));
  };

  return (
    <AboutMeWrapper>
      <AboutMeHeader>
        <h2>About Me</h2>
      </AboutMeHeader>
      <Toggle>
        <RadioWrapper>
          Changing Careers
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
        </RadioWrapper>
      </Toggle>

      <h3>Soft Skills</h3>
      <h3>Passions</h3>
    </AboutMeWrapper>
  );
};

export default AboutMe;
