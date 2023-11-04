import React from "react";
import styled from "styled-components";
import {
  SiDjango,
  SiPython,
  SiFlask,
  SiPostgresql,
  SiSvelte,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiMicrosoftexcel,
  SiCsharp,
  SiC,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { PiFileSql, PiArrowElbowLeftDownBold } from "react-icons/pi";

const SkillDetailWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 8px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  border-bottom: 1px solid var(--bg);
`;

const DetailsContainer = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 16px;
`;

const Icon = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UsedInContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 16px;

  ul {
    list-style-position: inside;
    padding-left: 4px;
  }
`;

const UsedForContainer = styled.div`
  display: flex;
  flex: 1.5;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  ul {
    list-style-position: inside;
    padding-left: 4px;
  }
`;

const CloseButton = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px;
  cursor: pointer;

  svg {
    color: var(--contrast);
  }
`;

export const detailMap = {
  python: {
    icon: SiPython,
    label: "Python",
    startDate: "May '23",
    frameworks: ["Flask", "Django"],
    usedIn: ["Builder", "Salloc", "Portfolio"],
    usedFor: ["API", "Backend SQL", "Data Analysis"],
  },
  django: {
    icon: SiDjango,
    label: "Django",
    startDate: "Aug '23",
    frameworks: ["DRF"],
    usedIn: ["Builder"],
    usedFor: ["API", "Backend SQL", "Security"],
  },
  flask: {
    icon: SiFlask,
    label: "Flask",
    startDate: "July '23",
    frameworks: ["-"],
    usedIn: ["Salloc", "Web Portfolio"],
    usedFor: ["API", "Backend SQL", "Authentication"],
  },
  sql: {
    icon: PiFileSql,
    label: "SQL",
    startDate: "July '23",
    frameworks: ["SQLite", "PostgreSQL"],
    usedIn: ["Salloc", "Builder"],
    usedFor: ["Database", "Data Analysis", "Authentication"],
  },
  postgresql: {
    icon: SiPostgresql,
    label: "PostgreSQL",
    startDate: "July '23",
    frameworks: [""],
    usedIn: ["Salloc", "Builder"],
    usedFor: ["Database", "Data Analysis", "Authentication"],
  },
  "c sharp": {
    icon: SiCsharp,
    label: "C Sharp",
    startDate: "Sept '23",
    frameworks: [".NET", "WPF"],
    usedIn: ["Tripple-P"],
    usedFor: ["Desktop Application"],
  },
  svelte: {
    icon: SiSvelte,
    label: "Svelte",
    startDate: "Aug '23",
    frameworks: ["TypeScript"],
    usedIn: ["Builder"],
    usedFor: ["Frontend", "Reactive UI", "Validation"],
  },
  react: {
    icon: SiReact,
    label: "React",
    startDate: "Oct '23",
    frameworks: ["styled-components"],
    usedIn: ["This Page!"],
    usedFor: ["Frontend", "Reactive UI"],
  },
  html: {
    icon: SiHtml5,
    label: "HTML",
    startDate: "June '23",
    frameworks: ["Jinja2", "React", "Svelte"],
    usedIn: ["All Projects"],
    usedFor: ["Frontend"],
  },
  css: {
    icon: SiCss3,
    label: "CSS",
    startDate: "June '23",
    frameworks: ["Tailwind", "Styled-Components"],
    usedIn: ["Web Portfolio"],
    usedFor: ["Frontend", "Styling", "Animations"],
  },
  "tailwind css": {
    icon: SiTailwindcss,
    label: "Tailwind CSS",
    startDate: "Aug '23",
    frameworks: ["Svelte"],
    usedIn: ["Builder"],
    usedFor: ["Frontend", "Styling", "Reactive"],
  },
  javascript: {
    icon: SiJavascript,
    label: "JavaScript",
    startDate: "June '23",
    frameworks: ["TypeScript"],
    usedIn: ["Salloc", "Web Portfolio"],
    usedFor: ["Frontend", "Reactive UI"],
  },
  typescript: {
    icon: SiTypescript,
    label: "TypeScript",
    startDate: "June '23",
    frameworks: ["Jest", "Svelte"],
    usedIn: ["Builder"],
    usedFor: ["Frontend", "Reactive UI", "Utilities", "Stores"],
  },
  git: {
    icon: SiGit,
    label: "git",
    startDate: "June '23",
    frameworks: ["Everything"],
    usedIn: ["All Projects"],
    usedFor: ["Version Control"],
  },
  excel: {
    icon: SiMicrosoftexcel,
    label: "Excel",
    startDate: "2017",
    frameworks: ["Project Planning"],
    usedIn: ["All Projects", "Previous Job"],
    usedFor: ["Planning", "Project Management"],
  },
  c: {
    icon: SiC,
    label: "C",
    startDate: "May '23",
    frameworks: ["CS50x"],
    usedIn: ["Course Work"],
    usedFor: ["Learning", "Terminal"],
  },
};

const SkillDetail = ({ skill, onClose }) => {
  const skillDetail = detailMap[skill];

  if (!skillDetail) {
    return null;
  }

  return (
    <SkillDetailWrapper>
      <DetailsContainer>
        <Icon>
          <skillDetail.icon />
          <h3>{skillDetail.label}</h3>
        </Icon>

        <p>{skillDetail.startDate}</p>
        <p>{skillDetail.frameworks.join(", ")}</p>
      </DetailsContainer>
      <UsedInContainer>
        <h4>Used In:</h4>

        <ul>
          {skillDetail.usedIn.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </UsedInContainer>
      <UsedForContainer>
        <h4>Used For:</h4>

        <ul>
          {skillDetail.usedFor.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </UsedForContainer>
      <CloseButton>
        <PiArrowElbowLeftDownBold
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        />
      </CloseButton>
    </SkillDetailWrapper>
  );
};

export default SkillDetail;
