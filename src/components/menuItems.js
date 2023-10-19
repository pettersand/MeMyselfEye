import React from "react";
import { useAppState } from "../App";
import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  border-top: 2px solid teal;
  border-radius: 5px;
`;

const LanguageToggle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
`;

const DetailToggle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
`;

const RadioButton = styled.input`
  display: none;
  + label {
    cursor: pointer;
    position: relative;
    padding-left: 20px;
  }

  + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border: 2px solid teal;
    border-radius: 50%;
    background-color: transparent;
  }

  :checked + label:after {
    content: "";
    position: absolute;
    left: 6px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: teal;
  }
`;

const MenuItems = () => {
  const { state, setState } = useAppState();

  const handleLanguage = (e) => {
    setState((prevState) => ({ ...prevState, language: e.target.value }));
  };

  const handleDetail = (e) => {
    setState((prevState) => ({ ...prevState, detailLevel: e.target.value }));
  };

  return (
    <MenuContainer>
      <LanguageToggle>
        <RadioButton
          type="radio"
          name="language"
          id="english"
          value="eng"
          checked={state.language === "eng"}
          onChange={handleLanguage}
        />
        <label htmlFor="english">English</label>
        <RadioButton
          type="radio"
          name="language"
          id="norwegian"
          value="nor"
          checked={state.language === "nor"}
          onChange={handleLanguage}
        />
        <label htmlFor="norwegian">Norsk</label>
      </LanguageToggle>

      <DetailToggle>
        <RadioButton
          type="radio"
          name="detailLevel"
          id="minimal"
          value="minimal"
          checked={state.detailLevel === "minimal"}
          onChange={handleDetail}
        />
        <label htmlFor="minimal">Minimal</label>

        <RadioButton
          type="radio"
          name="detailLevel"
          id="detailed"
          value="detailed"
          checked={state.detailLevel === "detailed"}
          onChange={handleDetail}
        />
        <label htmlFor="detailed">Detailed</label>
      </DetailToggle>
    </MenuContainer>
  );
};

export default MenuItems;
