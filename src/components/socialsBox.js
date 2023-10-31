import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { HiPhone } from "react-icons/hi2";

const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SocialsContainer = styled.div`
  font-family: "Onest";
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

const SocialsItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 400;
  font-size: 1.1em;

  a {
    text-decoration: none;
    color: var(--headline);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    font-size: 1.4em;
    color: var(--accent);
    margin-right: 8px;
  }

  &:hover {
    svg {
      transform: scale(1.2);
      filter: drop-shadow(0 0 5px rgba(0, 128, 128, 0.4));
  }
`;

const Tooltip = styled.div`
  background-color: black;
  max-width: 250px;
  white-space: nowrap;
  color: white;
  text-align: center;
  padding: 8px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  visibility: ${(props) => (props.text === "Copied!" ? "visible" : "hidden")};
  opacity: ${(props) => (props.text === "Copied!" ? "1" : "0")};
  transition: opacity 0.3s;
  animation: ${(props) =>
    props.text === "Copied!"
      ? css`
          ${bounce} 1s
        `
      : "none"};

  ${SocialsItem}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
  }
  40% {
      transform: translateY(-10px);
  }
  60% {
      transform: translateY(-5px);
  }
`;

const SocialsBox = () => {
  const [emailTooltipText, setEmailTooltipText] = useState(
    "Click to copy email"
  );
  const [phoneTooltipText, setPhoneTooltipText] = useState(
    "Click to copy phone number"
  );

  const copyToClipboard = async (content, type) => {
    try {
      await navigator.clipboard.writeText(content);

      if (type === "email") {
        setEmailTooltipText("Copied!");
        setTimeout(() => setEmailTooltipText("Click to copy email"), 2000);
      } else if (type === "phone") {
        setPhoneTooltipText("Copied!");
        setTimeout(
          () => setPhoneTooltipText("Click to copy phone number"),
          2000
        );
      }
    } catch (err) {
      console.error("Error in copying text: ", err);
    }
  };

  return (
    <SocialsWrapper>
      <SocialsContainer>
        <SocialsItem>
          <a
            href="https://www.linkedin.com/in/petteraustnes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin />
            LinkedIn
          </a>
        </SocialsItem>
        <SocialsItem>
          <a
            href="https://github.com/pettersand"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub />
            GitHub
          </a>
        </SocialsItem>
        <SocialsItem
          onClick={() => copyToClipboard("petter.sand@gmail.com", "email")}
        >
          <SiGmail />
          Email
          <Tooltip text={emailTooltipText}>{emailTooltipText}</Tooltip>
        </SocialsItem>
        <SocialsItem onClick={() => copyToClipboard("+4790010136", "phone")}>
          <HiPhone />
          Phone
          <Tooltip text={phoneTooltipText}>{phoneTooltipText}</Tooltip>
        </SocialsItem>
      </SocialsContainer>
    </SocialsWrapper>
  );
};

export default SocialsBox;
