import React from "react";
import styled from "styled-components";
import { HiOutlineDocumentText, HiCodeBracket } from "react-icons/hi2";
import { DiPython, DiDjango, DiDatabase, DiPostgresql } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";

const ResumeWrapper = styled.div`
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResumeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid;
  border-color: ${(props) => props.color || "white"};
`;

const ResumeHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid orange;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const IconBackground = styled.div`
  height: ${(props) => props.size || "3em"};
  width: ${(props) => props.size || "3em"};
  border-radius: 50%;
  background-color: ${(props) => props.color || "white"};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  border-color: black;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover .icon-label {
    visibility: visible;
    opacity: 1;
  }
`;

const IconLabel = styled.div`
  margin-top: 5px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s, opacity 0.3s ease-in-out;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  margin-top: 10px;
  width: 90%;
`;

const GridHeader = styled.div`
  font-weight: bold;
  font-size: 1.3em;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid grey;
`;

const GridItem = styled.div`
  padding: 5px;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  border-right: ${({ borderRight }) =>
    borderRight ? "1px solid grey" : "none"};
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? "1px solid grey" : "none"};
  grid-row-end: ${({ spanRows }) => (spanRows ? "span 2" : "span 1")};
`;

function IconWithLabel({ IconComponent, size, label }) {
  return (
    <IconWrapper>
      <IconComponent size={size} />
      <IconLabel className="icon-label">{label}</IconLabel>
    </IconWrapper>
  );
}

const Resume = () => {
  return (
    <ResumeWrapper>
      <ResumeHeader>
        <IconBackground color="orange">
          <HiOutlineDocumentText
            style={{ zIndex: 2, color: "black" }}
            size={34}
          />
        </IconBackground>
        <h1>Resume</h1>
      </ResumeHeader>

      <SkillsGrid>
        {/* Headers */}
        <GridHeader>
          <IconBackground color="yellow" size="2em">
            <HiCodeBracket style={{ zIndex: 2, color: "black" }} size={24} />
          </IconBackground>
        </GridHeader>
        <GridHeader>Skills</GridHeader>
        <GridHeader>Working Experience</GridHeader>

        {/* Backend */}
        <GridItem spanRows borderRight borderBottom>
          Backend
        </GridItem>
        <GridItem>
          <IconWithLabel IconComponent={DiPython} size="40" label="Python" />
          <IconWithLabel IconComponent={SiFlask} size="40" label="Flask" />
          <IconWithLabel IconComponent={DiDjango} size="50" label="Django" />
        </GridItem>
        <GridItem spanRows borderBottom>
          C#, SQLite
        </GridItem>
        <GridItem borderBottom>
          <IconWithLabel IconComponent={PiFileSql} size="40" label="SQL" />
          <IconWithLabel
            IconComponent={DiPostgresql}
            size="40"
            label="PostgreSQL"
          />
        </GridItem>

        {/* Frontend */}
        <GridItem spanRows borderRight borderBottom>
          Frontend
        </GridItem>
        <GridItem>Svelte, HTML</GridItem>
        <GridItem>React</GridItem>
        <GridItem borderBottom>CSS, Tailwind CSS</GridItem>
        <GridItem borderBottom>JavaScript, TypeScript</GridItem>

        {/* DevOps & Others */}
        <GridItem spanRows borderRight>
          DevOps / Other
        </GridItem>
        <GridItem spanRows>Git, Excel, C</GridItem>
        <GridItem>GitHub Actions CI/CD, Docker</GridItem>
        <GridItem>C# WPF .NET, Linux VPS</GridItem>
      </SkillsGrid>

      <ResumeContainer color="purple">
        <h2>Projects</h2>
      </ResumeContainer>
      <ContainerHeader>
        <IconBackground color="yellow" size="2em">
          <HiCodeBracket style={{ zIndex: 2, color: "black" }} size={24} />
        </IconBackground>
        <h2>Skills</h2>
      </ContainerHeader>
      <ResumeContainer color="red">
        <h2>Courses</h2>
      </ResumeContainer>
      <ResumeContainer color="teal">
        <h2>Prior Career</h2>
      </ResumeContainer>
    </ResumeWrapper>
  );
};

export default Resume;
