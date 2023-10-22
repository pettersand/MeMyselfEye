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
} from "react-icons/si";
import { PiFileSql, PiArrowElbowLeftDownBold } from "react-icons/pi";

const SkillDetailWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  border-bottom: 1px solid teal;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
  font-size: 0.8em;
`;

const Icon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  h2 {
    font-size: 1.1em;
  }
`;

const UsedInContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  h3 {
    margin: 5px;
    font-size: 0.9em;
  }
  ul {
    list-style-position: inside;
    padding-left: 5px;
    font-size: 0.8em;
  }
`;

const UsedForContainer = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  h3 {
    margin: 5px;
    font-size: 0.9em;
  }
  ul {
    list-style-position: inside;
    padding-left: 5px;
    font-size: 0.8em;
  }
`;

const BoxHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10px;
`;

const CloseButton = styled.div`
  font-size: 1.6em;
  cursor: pointer;
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
    frameworks: ["Tailwind CSS", "Styled-Components"],
    usedIn: ["Web Portfolio"],
    usedFor: ["Frontend", "Styling", "Animations"],
  },
  tailwind: {
    icon: SiTailwindcss,
    label: "Tailwind",
    startDate: "Aug '23",
    frameworks: ["Svelte"],
    usedIn: ["Web Portfolio"],
    usedFor: ["Frontend", "Styling", "Animations"],
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
          <skillDetail.icon size="2.5em" color="teal" />
          <h2>{skillDetail.label}</h2>
        </Icon>

        <p>Since: {skillDetail.startDate}</p>
        <p>With: {skillDetail.frameworks.join(", ")}</p>
      </DetailsContainer>
      <UsedInContainer>
        <h3>Used In:</h3>
        <ul>
          {skillDetail.usedIn.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </UsedInContainer>
      <UsedForContainer>
        <BoxHeader>
          <h3>Used For:</h3>
          <CloseButton>
            <PiArrowElbowLeftDownBold
              onClick={() => {
                onClose();
              }}
            />
          </CloseButton>
        </BoxHeader>

        <ul>
          {skillDetail.usedFor.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </UsedForContainer>
    </SkillDetailWrapper>
  );
};

export default SkillDetail;
