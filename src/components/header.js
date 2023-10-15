import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 90%;
  background-color: #12182d;
  color: white;
  padding: 20px;
  display: flex;
  margin-top: 20px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
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
    background-color: #555;
    color: white;
    border: none;
    padding: 5px;
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
