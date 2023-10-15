import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 90%;
  background: linear-gradient(to right, #090c16, #12182d, #242f5a);
  color: white;
  padding: 20px;
  margin-top: 5px;
  display: flex;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  box-shadow: -0px 5px 8px rgba(0, 0, 0, 0.75);
`;
const NameAndTitle = styled.div`
  font-size: 24px;
`;

const SocialLinks = styled.div`
  a {
    margin-right: 20px;
    color: white;
    text-decoration: none;
  }
`;

const LanguageSettings = styled.div`
  select {
    background-color: #47b49e;
    color: white;
    border: none;
    padding: 5px;
  }
  option {
    background-color: #5ea1bd;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NameAndTitle>Petter Sand Austnes - Software Developer</NameAndTitle>
      <SocialLinks>
        <a href="#github">GitHub</a>
        <a href="#linkedin">LinkedIn</a>
      </SocialLinks>
      <LanguageSettings>
        <select>
          <option value="en">English</option>
          <option value="nor">Norsk</option>
        </select>
      </LanguageSettings>
    </HeaderContainer>
  );
};

export default Header;
