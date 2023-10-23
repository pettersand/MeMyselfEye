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
  width: 100%;
  justify-content: center;
  color: var(--text-light);
`;

const GridHeader = styled.div`
  font-weight: 700;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid teal;
`;

const GridItem = styled(({ borderRight, borderBottom, spanRows, ...props }) => (
  <div {...props} />
))`
  font-size: 0.9em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-right: ${(props) => (props.borderRight ? "1px solid teal" : "none")};
  border-bottom: ${(props) => (props.borderBottom ? "1px solid teal" : "none")};
  grid-row-end: ${(props) => (props.spanRows ? "span 2" : "span 1")};
`;

function IconWithLabel({ IconComponent, size, label }) {
  return (
    <IconWrapper>
      <IconComponent size={size} />
      <IconLabel className="icon-label">{label}</IconLabel>
    </IconWrapper>
  );
}

const Skills = () => {
  return (
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
        <IconWithLabel IconComponent={SiPython} size="25" label="Python" />
        <IconWithLabel IconComponent={SiFlask} size="25" label="Flask" />
        <IconWithLabel IconComponent={SiDjango} size="25" label="Django" />
      </GridItem>
      <GridItem spanRows borderBottom>
        <IconWithLabel IconComponent={SiCsharp} size="25" label="C#" />
        <IconWithLabel IconComponent={SiSqlite} size="25" label="SQLite" />
      </GridItem>
      <GridItem borderBottom borderRight>
        <IconWithLabel IconComponent={PiFileSql} size="25" label="SQL" />
        <IconWithLabel
          IconComponent={SiPostgresql}
          size="25"
          label="PostgreSQL"
        />
      </GridItem>

      {/* Frontend */}
      <GridItem spanRows borderRight borderBottom>
        Frontend
      </GridItem>
      <GridItem borderRight>
        <IconWithLabel IconComponent={SiSvelte} size="25" label="Svelte" />
        <IconWithLabel IconComponent={SiHtml5} size="25" label="HTML" />
      </GridItem>
      <GridItem>
        <IconWithLabel IconComponent={SiReact} size="25" label="React" />
      </GridItem>
      <GridItem borderBottom borderRight>
        <IconWithLabel IconComponent={SiCss3} size="25" label="CSS" />
        <IconWithLabel
          IconComponent={SiTailwindcss}
          size="25"
          label="Tailwind"
        />
      </GridItem>
      <GridItem borderBottom>
        <IconWithLabel
          IconComponent={SiJavascript}
          size="25"
          label="JavaScript"
        />
        <IconWithLabel
          IconComponent={SiTypescript}
          size="25"
          label="TypeScript"
        />
      </GridItem>

      {/* DevOps & Others */}
      <GridItem spanRows borderRight>
        DevOps / Other
      </GridItem>
      <GridItem spanRows borderRight>
        <IconWithLabel IconComponent={SiGit} size="25" label="Git" />
        <IconWithLabel
          IconComponent={SiMicrosoftexcel}
          size="25"
          label="Excel"
        />
        <IconWithLabel IconComponent={SiC} size="25" label="C" />
      </GridItem>
      <GridItem>
        <IconWithLabel
          IconComponent={SiGithubactions}
          size="25"
          label="GitHub Actions"
        />
        <IconWithLabel IconComponent={SiDocker} size="25" label="Docker" />
      </GridItem>
      <GridItem>
        <IconWithLabel IconComponent={SiLinux} size="25" label="Linux VPS" />
      </GridItem>
    </SkillsGrid>
  );
};

export default Skills;
