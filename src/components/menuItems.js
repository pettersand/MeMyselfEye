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
  gap: 10px;
`;

const LanguageToggle = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DetailToggle = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  display: none;
`;

const StyledRadio = styled(({ isSelected, ...props }) => <div {...props} />)`
  width: 10px;
  height: 10px;
  border: 2px solid teal;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 5px;

  &:before {
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: teal;
    transition: background-color 0.3s;
    display: ${(props) => (props.isSelected ? "block" : "none")};
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      border-color: darkblue;
    }
    25% {
      border-color: purple;
    }
    50% {
      transform: rotate(180deg);
      border-color: gold;
    }
    75% {
      border-color: pink;
    }
    100% {
      transform: rotate(360deg);
      border-color: darkcyan;
    }
  }

  &:hover {
    animation: spin 1.5s linear infinite;
  }
`;

const MenuItems = () => {
  const { state, setState } = useAppState();

  const toggleLanguage = (value) => {
    handleLanguage({ target: { value } });
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
          <StyledRadio
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
          </StyledRadio>
          English
        </RadioWrapper>
        <RadioWrapper>
          Norsk
          <StyledRadio
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
          </StyledRadio>
        </RadioWrapper>
      </LanguageToggle>

      <DetailToggle>
        <RadioWrapper>
          <label>
            <HiddenRadio
              type="radio"
              name="detailLevel"
              id="minimal"
              value="minimal"
              checked={state.detailLevel === "minimal"}
              onChange={handleDetail}
            />
            Minimal
          </label>
        </RadioWrapper>

        <RadioWrapper>
          <label>
            Detailed
            <HiddenRadio
              $position="right"
              type="radio"
              name="detailLevel"
              id="detailed"
              value="detailed"
              checked={state.detailLevel === "detailed"}
              onChange={handleDetail}
            />
          </label>
        </RadioWrapper>
      </DetailToggle>
    </MenuContainer>
  );
};

export default MenuItems;
