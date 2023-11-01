import React from "react";
import styled from "styled-components";

const DividerV = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-inline: 16px;
  div {
    height: 90%;
    border: 1px solid var(--bg);
  }
`;

const DividerH = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 16px 0;
  div {
    width: 90%;
    border: 1px solid var(--bg);
  }
`;

export const HorizontalDivider = () => {
  return (
    <DividerH>
      <div />
    </DividerH>
  );
};

export const VerticalDivider = () => {
  return (
    <DividerV>
      <div />
    </DividerV>
  );
};
