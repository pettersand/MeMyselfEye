import React from "react";
import styled from "styled-components";
import ToggleButton from "../utils/ToggleButton";
import { useAppState } from "../App";

const ControlWrapper = styled.div`
  color: white;
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
          <ControlItem>Courses o</ControlItem>
        </ControlRow>
        <ControlRow></ControlRow>
      </ControlContainer>
    </ControlWrapper>
  );
};

export default ControlPanel;
