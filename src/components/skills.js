import React from "react";
import styled from "styled-components";
import { HiOutlineDocumentText, HiCodeBracket } from "react-icons/hi2";
import {
  SiFlask,
  SiCsharp,
  SiSqlite,
  SiSvelte,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiMicrosoftexcel,
  SiGithubactions,
  SiDocker,
  SiLinux,
  SiPostgresql,
  SiDjango,
  SiPython,
  SiC,
} from "react-icons/si";
import { PiFileSql } from "react-icons/pi";

const IconWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

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
  font-weight: 700;
  font-size: 1.3em;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid grey;
`;

const GridItem = styled.div`
  padding-top: 10px;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
  <GridItem borderRight>
    <IconWithLabel IconComponent={SiPython} size="40" label="Python" />
    <IconWithLabel IconComponent={SiFlask} size="40" label="Flask" />
    <IconWithLabel IconComponent={SiDjango} size="40" label="Django" />
  </GridItem>
  <GridItem spanRows borderBottom>
    <IconWithLabel IconComponent={SiCsharp} size="40" label="C#" />
    <IconWithLabel IconComponent={SiSqlite} size="40" label="SQLite" />
  </GridItem>
  <GridItem borderBottom borderRight>
    <IconWithLabel IconComponent={PiFileSql} size="40" label="SQL" />
    <IconWithLabel IconComponent={SiPostgresql} size="40" label="PostgreSQL" />
  </GridItem>

  {/* Frontend */}
  <GridItem spanRows borderRight borderBottom>
    Frontend
  </GridItem>
  <GridItem borderRight>
    <IconWithLabel IconComponent={SiSvelte} size="40" label="Svelte" />
    <IconWithLabel IconComponent={SiHtml5} size="40" label="HTML" />
  </GridItem>
  <GridItem>
    <IconWithLabel IconComponent={SiReact} size="40" label="React" />
  </GridItem>
  <GridItem borderBottom borderRight>
    <IconWithLabel IconComponent={SiCss3} size="40" label="CSS" />
    <IconWithLabel
      IconComponent={SiTailwindcss}
      size="40"
      label="Tailwind CSS"
    />
  </GridItem>
  <GridItem borderBottom>
    <IconWithLabel IconComponent={SiJavascript} size="40" label="JavaScript" />
    <IconWithLabel IconComponent={SiTypescript} size="40" label="TypeScript" />
  </GridItem>

  {/* DevOps & Others */}
  <GridItem spanRows borderRight>
    DevOps / Other
  </GridItem>
  <GridItem spanRows borderRight>
    <IconWithLabel IconComponent={SiGit} size="40" label="Git" />
    <IconWithLabel IconComponent={SiMicrosoftexcel} size="40" label="Excel" />
    <IconWithLabel IconComponent={SiC} size="40" label="C" />
  </GridItem>
  <GridItem>
    <IconWithLabel
      IconComponent={SiGithubactions}
      size="40"
      label="GitHub Actions"
    />
    <IconWithLabel IconComponent={SiDocker} size="40" label="Docker" />
  </GridItem>
  <GridItem>
    <IconWithLabel IconComponent={SiLinux} size="40" label="Linux VPS" />
  </GridItem>
</SkillsGrid>;
