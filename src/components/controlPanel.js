import React from "react";
import styled from "styled-components";
import ToggleButton from "../utils/ToggleButton";
import { useAppState } from "../App";

const ControlWrapper = styled.div`
  color: var(--text-light);
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  align-items: center;
  justify-content: space-evenly;
`;

const LanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;

const ContainerHeader = styled.div`
  width: 90%;
  border-bottom: 1px solid var(--accent);
  font-size: 1.1em;
  font-weight: 600;
  display: flex;
  justify-content: center;
`;

const ControlRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const ControlToggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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

  const toggleLanguage = (value) => {
    handleLanguage({ target: { value } });
  };

  const toggleDetail = (value) => {
    handleDetail({ target: { value } });
  };

  const handleLanguage = (e) => {
    setState((prevState) => ({ ...prevState, language: e.target.value }));
  };

  const handleDetail = (e) => {
    setState((prevState) => ({ ...prevState, detailLevel: e.target.value }));
  };

  return (
    <ControlWrapper>
      <ControlContainer>
        <ContainerHeader>Control Panel</ContainerHeader>
        <ControlRow>
          <ControlToggle>
            <RadioWrapper>
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
          </ControlToggle>
          <ControlToggle>
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
          </ControlToggle>
          <ControlToggle>
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
          </ControlToggle>
        </ControlRow>
      </ControlContainer>
    </ControlWrapper>
  );
};

export default ControlPanel;
