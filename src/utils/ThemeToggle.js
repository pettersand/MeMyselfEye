import React, { useState, useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import styled from "styled-components";

const ToggleContainer = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: var(--bg);
  border-radius: 1rem;
  cursor: pointer;
  transition: background-color 500ms ease-in-out, all 500ms ease-in-out;
  width: 4rem;
  height: 2rem;
  position: relative;
  overflow: hidden;
`;

const ToggleBall = styled.div`
  color: var(--headline);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1.5rem;

  cursor: pointer;
  transition: all 500ms ease-in-out;
  background-color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &.move {
    transform: translateX(124%);
  }
`;

const ToggleIcon = styled.div`
  width: 2rem;
  height: 2rem;
`;

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  }, [isLight]);

  return (
    <ToggleContainer onClick={() => setIsLight(!isLight)}>
      <ToggleBall className={isLight ? "move" : ""}>
        {isLight ? (
          <HiSun className="toggle-icon" as={ToggleIcon} />
        ) : (
          <HiMoon className="toggle-icon" as={ToggleIcon} />
        )}
      </ToggleBall>
    </ToggleContainer>
  );
};

export default ThemeToggle;
