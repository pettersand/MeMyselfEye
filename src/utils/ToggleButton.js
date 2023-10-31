import React from "react";
import styled from "styled-components";

const StyledRadio = styled(({ isSelected, ...props }) => <div {...props} />)`
  width: 14px;
  height: 14px;
  border: 4px solid var(--contrast);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 5px;

  &:before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: silver;
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

  ${(props) =>
    props.isSelected &&
    `
    box-shadow: 0 0 4px 1px var(--accent);
    border-color: var(--accent);
`}
`;

const ToggleButton = ({ isSelected, onClick }) => (
  <div>
    <StyledRadio isSelected={isSelected} onClick={onClick}></StyledRadio>
  </div>
);

export default ToggleButton;
