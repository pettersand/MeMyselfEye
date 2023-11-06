import React from "react";
import styled from "styled-components";
import ToggleButton from "../utils/ToggleButton";
import { useAppState } from "../App";
import { VerticalDivider } from "../utils/Dividers";

const ControlWrapper = styled.div`
  color: var(--headline);
  width: 100%;
  padding: 16px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContainerHeader = styled.div`
  width: 90%;
  border-bottom: 1px solid var(--accent);
  font-size: 1.3em;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ControlRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 90%;
  gap: 8px;

  @media (max-width: 1199px) {
    justify-content: center;
    align-items: center;
  }
`;

const ControlColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 16px;

  &.left {
    align-items: flex-end;
  }

  &.right {
    align-items: flex-start;
  }

  @media (max-width: 1199px) {
    flex-direction: row;
    align-items: center;
    gap: 0;
    padding: 16px 0;

    &.left {
      justify-content: flex-end;
    }

    &.right {
      justify-content: flex-start;
    }
  }
`;

const RadioWrapper = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 5px;
  white-space: nowrap;

  &.reverse {
    flex-direction: row-reverse;
    @media (max-width: 1199px) {
      flex-direction: row;
    }
  }
`;

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  display: none;
`;

const ControlPanel = () => {
  const { state, setState } = useAppState();

  const toggleActiveInfo = (value) => {
    handleActiveInfo({ target: { value } });
  };

  const handleActiveInfo = (e) => {
    setState((prevState) => ({ ...prevState, activeInfo: e.target.value }));
  };

  return (
    <ControlWrapper>
      <ContainerHeader>
        <h3>Control Panel</h3>
      </ContainerHeader>
      <ControlRow>
        <ControlColumn className="left">
          <RadioWrapper>
            About Me
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
          <RadioWrapper>
            Prior Career
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
          </RadioWrapper>
        </ControlColumn>

        <ControlColumn className="right">
          <RadioWrapper className="reverse">
            Projects
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
          </RadioWrapper>

          <RadioWrapper className="reverse">
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
        </ControlColumn>
      </ControlRow>
    </ControlWrapper>
  );
};

export default ControlPanel;
