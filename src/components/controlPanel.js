import React from "react";
import styled from "styled-components";
import ToggleButton from "../utils/ToggleButton";
import { useAppState } from "../App";

const ControlWrapper = styled.div`
  color: var(--text-light);
  width: 100%;
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
  border-inline: 1px solid var(--bg);
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
      <LanguageContainer>
        <ContainerHeader>Language</ContainerHeader>
        <ControlToggle>
          <RadioWrapper>
            English
            <ToggleButton
              isSelected={state.language === "eng"}
              onClick={() => toggleLanguage("eng")}
            >
              <HiddenRadio
                type="radio"
                name="language"
                id="english"
                value="eng"
                checked={state.language === "eng"}
                onChange={handleLanguage}
              />
            </ToggleButton>
          </RadioWrapper>
          <RadioWrapper>
            Norsk
            <ToggleButton
              isSelected={state.language === "nor"}
              onClick={() => toggleLanguage("nor")}
            >
              <HiddenRadio
                type="radio"
                name="language"
                id="norwegian"
                value="nor"
                checked={state.language === "nor"}
                onChange={handleLanguage}
              />
            </ToggleButton>
          </RadioWrapper>
        </ControlToggle>
      </LanguageContainer>

      <ControlContainer>
        <ContainerHeader>Topics</ContainerHeader>
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
        </ControlRow>
      </ControlContainer>

      <DetailContainer>
        <ContainerHeader>Details</ContainerHeader>
        <ControlToggle>
          <RadioWrapper>
            Minimal
            <ToggleButton
              isSelected={state.detailLevel === "minimal"}
              onClick={() => toggleDetail("minimal")}
            >
              <HiddenRadio
                type="radio"
                name="detailLevel"
                id="minimal"
                value="minimal"
                checked={state.detailLevel === "minimal"}
                onChange={handleDetail}
              />
            </ToggleButton>
          </RadioWrapper>

          <RadioWrapper>
            Detailed
            <ToggleButton
              isSelected={state.detailLevel === "detailed"}
              onClick={() => toggleDetail("detailed")}
            >
              <HiddenRadio
                $position="right"
                type="radio"
                name="detailLevel"
                id="detailed"
                value="detailed"
                checked={state.detailLevel === "detailed"}
                onChange={handleDetail}
              />
            </ToggleButton>
          </RadioWrapper>
        </ControlToggle>
      </DetailContainer>
    </ControlWrapper>
  );
};

export default ControlPanel;
