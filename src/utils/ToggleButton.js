import React from "react";
import styled from "styled-components";

const StyledRadio = styled(({ isSelected, ...props }) => <div {...props} />)`
  position: relative;
  width: 16px;
  height: 16px;
  border: 6px solid var(--contrast);
  border-radius: 50%;
  cursor: pointer;
  margin: 0;

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${(props) =>
      props.isSelected ? "var(--headline)" : "transparent"};
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

  @media (max-width: 600px) {
    width: 8px;
    height: 8px;
    border: 4px solid var(--contrast);
  }
`;

const ToggleButton = ({ isSelected, onClick }) => (
  <div>
    <StyledRadio isSelected={isSelected} onClick={onClick}></StyledRadio>
  </div>
);

export default ToggleButton;
