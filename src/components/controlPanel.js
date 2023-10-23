import React from "react";
import styled from "styled-components";
import ToggleButton from "../utils/ToggleButton";
import { useAppState } from "../App";

const ControlWrapper = styled.div`
  color: var(--text-light);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ControlHeader = styled.div`
  h1 {
    align-items: center;
    justify-content: flex-start;
    margin: 5px;
  }
`;

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const ControlRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex: 1;
`;

const ControlItem = styled.div`
  display: flex;
  gap: 5px;
  font-size: 1.25em;
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

const ControlPanel = () => {
  const { state, setState } = useAppState();
  const { activeInfo } = state;

  const toggleActiveInfo = (value) => {
    handleActiveInfo({ target: { value } });
  };

  const handleActiveInfo = (e) => {
    setState((prevState) => ({ ...prevState, activeInfo: e.target.value }));
  };

  return (
    <ControlWrapper>
      <ControlHeader>
        <h2>Control Panel</h2>
      </ControlHeader>
      <ControlContainer>
        <ControlRow>
          <RadioWrapper>
            <ToggleButton
              isSelected={state.activeInfo === "projects"}
              onClick={() => toggleActiveInfo("projects")}
            >
              <HiddenRadio
                type="radio"
                name="info"
                id="projects"
                value="projects"
                checked={state.activeInfo === "projects"}
                onChange={handleActiveInfo}
              />
            </ToggleButton>
            Projects
          </RadioWrapper>
          <RadioWrapper>
            Courses
            <ToggleButton
              isSelected={state.activeInfo === "courses"}
              onClick={() => toggleActiveInfo("courses")}
            >
              <HiddenRadio
                type="radio"
                name="info"
                id="courses"
                value="courses"
                checked={state.activeInfo === "courses"}
                onChange={handleActiveInfo}
              />
            </ToggleButton>
          </RadioWrapper>
        </ControlRow>
        <ControlRow>
          <RadioWrapper>
            <ToggleButton
              isSelected={state.activeInfo === "priorCareer"}
              onClick={() => toggleActiveInfo("priorCareer")}
            >
              <HiddenRadio
                type="radio"
                name="info"
                id="priorCareer"
                value="priorCareer"
                checked={state.activeInfo === "priorCareer"}
                onChange={handleActiveInfo}
              />
            </ToggleButton>
            Prior Career
          </RadioWrapper>
          <RadioWrapper>
            Soft Skills
            <ToggleButton
              isSelected={state.activeInfo === "softSkills"}
              onClick={() => toggleActiveInfo("softSkills")}
            >
              <HiddenRadio
                type="radio"
                name="info"
                id="softSkills"
                value="softSkills"
                checked={state.activeInfo === "softSkills"}
                onChange={handleActiveInfo}
              />
            </ToggleButton>
          </RadioWrapper>
        </ControlRow>
        <ControlRow>Quiz</ControlRow>
      </ControlContainer>
    </ControlWrapper>
  );
};

export default ControlPanel;
