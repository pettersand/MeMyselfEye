import React from "react";
import styled from "styled-components";

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
    box-shadow: 0 0 5px 1px teal;
`}
`;

const ToggleButton = ({ isSelected, onClick }) => (
  <div>
    <StyledRadio isSelected={isSelected} onClick={onClick}></StyledRadio>
  </div>
);

export default ToggleButton;
