import React from "react";
import { useAppState } from "../App";
import styled from "styled-components";
import ToggleButton from "../utils/ToggleButton";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  border-top: 2px solid var(--accent);
  border-radius: 5px;
  color: var(--text-light);
  gap: 10px;
`;

const LanguageToggle = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const DetailToggle = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
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

const MenuItems = () => {
  const { state, setState } = useAppState();

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
    <MenuContainer>
      <LanguageToggle>
        <RadioWrapper>
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
          English
        </RadioWrapper>
        <RadioWrapper>
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
          Norsk
        </RadioWrapper>
      </LanguageToggle>

      <DetailToggle>
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
      </DetailToggle>
    </MenuContainer>
  );
};

export default MenuItems;
