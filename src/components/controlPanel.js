import React from "react";
import styled from "styled-components";

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


const ControlPanel = () => {
  return (
    <ControlWrapper>
      <ControlHeader>
        <h1>Control Panel</h1>
      </ControlHeader>
      <ControlContainer>
        <ControlRow>
          <ControlItem>

            Projects
          </ControlItem>
          <ControlItem>Courses o</ControlItem>
        </ControlRow>
        <ControlRow></ControlRow>
      </ControlContainer>
    </ControlWrapper>
  );
};

export default ControlPanel;
