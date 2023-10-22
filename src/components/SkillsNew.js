import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
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
import { PiFileSql, PiArrowElbowLeftDownBold } from "react-icons/pi";
import { TbBrandCSharp } from "react-icons/tb";
import SkillDetail from "./infoComponents/skillDetail";
import { detailMap } from "./infoComponents/skillDetail";

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SkillsContainer = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0px 0px 5px 5px rgba(0, 0, 0, 0.75);
`;

const SkillsRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex: 1;
  font-size: 0.8em;
  border-bottom: 1px solid teal;
`;

const HeaderRow = styled.div`
  display: flex;
  margin-top: 5px;
  width: 100%;
  flex-direction: row;
  flex: 1;
  font-size: 0.8em;
  border-bottom: 1px solid teal;
`;

const HeaderCat = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderSkills = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderWorking = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryCell = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillsCell = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-inline: 1px solid teal;
`;

const WorkingCell = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const IconLabel = styled.div`
  margin-top: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  gap: 5px;
`;

const Icon = styled.div`
  height: ${(props) => props.size || "3em"};
  width: ${(props) => props.size || "3em"};
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1) translateY(-5px);
    cursor: pointer;
    filter: drop-shadow(0 0 5px rgba(0, 128, 128, 0.4));
  }
`;

const DetailContainer = styled(({ isOpening, isClosing, isOpen, ...props }) => (
  <div {...props} />
))`
  width: 100%;
  display: flex;
  flex-direction: column;

  overflow: hidden;
  max-height: ${(props) => {
    if (props.isOpening) return "0px";
    if (props.isOpen) return "300px";
    return "0px";
  }};

  animation: ${({ isOpening, isClosing }) => {
    if (isOpening)
      return css`
        ${slideOpen} 0.8s ease-in-out forwards
      `;
    if (isClosing)
      return css`
        ${slideClose} 0.8s ease-in-out forwards
      `;
    return "none";
  }};
  transition: none;
`;

const slideOpen = keyframes`
  from {
    max-height: 0px;
  }
  to {
    max-height: 300px;
  }
`;

const slideClose = keyframes`
  from {
    max-height: 300px; 
  }
  to {
    max-height: 0px; 
  }
`;

function TechIcon({ IconComponent, size, color, onMouseEnter, onClick }) {
  return (
    <Icon size={size} onMouseEnter={onMouseEnter}>
      <IconComponent size={size} color={color || "black"} onClick={onClick} />
    </Icon>
  );
}

const SkillsCellGroup = ({ icons, onIconClick }) => {
  const [currentLabel, setCurrentLabel] = useState("Hover & Click!");

  return (
    <SkillsCell>
      <IconLabel>{currentLabel}</IconLabel>
      <IconRow>
        {icons.map((icon) => (
          <TechIcon
            key={icon.label}
            IconComponent={icon.component}
            size="2.1em"
            color="teal"
            onMouseEnter={() => setCurrentLabel(icon.label)}
            onClick={() => {
              console.log("Icon clicked:", icon.label);
              onIconClick(icon.label);
            }}
          />
        ))}
      </IconRow>
    </SkillsCell>
  );
};

const WorkingCellGroup = ({ icons }) => {
  const [currentLabel, setCurrentLabel] = useState("Hover!");

  return (
    <WorkingCell>
      <IconLabel>{currentLabel}</IconLabel>
      <IconRow>
        {icons.map((icon) => (
          <TechIcon
            key={icon.label}
            IconComponent={icon.component}
            size="2.1em"
            color="teal"
            onMouseEnter={() => setCurrentLabel(icon.label)}
          />
        ))}
      </IconRow>
    </WorkingCell>
  );
};

const SkillsNew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [currentSkillDetail, setCurrentSkillDetail] = useState(null);
  const [currentLabel, setCurrentLabel] = useState("Hover over an icon!");
  const [isClosing, setIsClosing] = useState(false);

  const handleIconClick = (label) => {
    setCurrentSkillDetail(label.toLowerCase());
    if (!isOpen) {
      setIsClosing(false);
      setIsOpening(true);
      setTimeout(() => {
        setIsOpen(true);
        setIsOpening(false);
      }, 800);
    }
  };

  const handleCloseDetail = () => {
    setIsOpening(false);
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 725);
  };

  return (
    <SkillsWrapper>
      <SkillsContainer>
        {(isOpen || isOpening || isClosing) && (
          <DetailContainer
            isOpening={isOpening}
            isClosing={isClosing}
            isOpen={isOpen}
          >
            <SkillDetail
              skill={currentSkillDetail}
              onClose={handleCloseDetail}
            />
          </DetailContainer>
        )}
        <HeaderRow>
          <HeaderCat>Category</HeaderCat>
          <HeaderSkills>Skills</HeaderSkills>
          <HeaderWorking>Working Exp</HeaderWorking>
        </HeaderRow>
        <SkillsRow>
          <CategoryCell>Backend</CategoryCell>
          <SkillsCellGroup
            icons={[
              { component: SiPython, label: "Python" },
              { component: SiDjango, label: "Django" },
              { component: SiFlask, label: "Flask" },
              { component: PiFileSql, label: "SQL" },
              { component: SiPostgresql, label: "PostgreSQL" },
            ]}
            onIconClick={handleIconClick}
          />

          <WorkingCellGroup
            icons={[{ component: TbBrandCSharp, label: "C Sharp" }]}
            onIconClick={handleIconClick}
          />
        </SkillsRow>
        <SkillsRow>
          <CategoryCell>Frontend</CategoryCell>
          <SkillsCellGroup
            icons={[
              { component: SiSvelte, label: "Svelte" },
              { component: SiReact, label: "React" },
              { component: SiHtml5, label: "HTML" },
              { component: SiCss3, label: "CSS" },
              { component: SiTailwindcss, label: "Tailwind CSS" },
            ]}
            onIconClick={handleIconClick}
          />
          <WorkingCellGroup
            icons={[
              { component: SiJavascript, label: "JavaScript" },
              { component: SiTypescript, label: "TypeScript" },
            ]}
            onIconClick={handleIconClick}
          />
        </SkillsRow>
        <SkillsRow>
          <CategoryCell>Other</CategoryCell>
          <SkillsCellGroup
            icons={[
              { component: SiGit, label: "Git" },
              { component: SiMicrosoftexcel, label: "Excel" },
              { component: SiC, label: "C" },
            ]}
            onIconClick={handleIconClick}
          />
          <WorkingCellGroup
            icons={[
              { component: SiGithubactions, label: "CI/CD" },
              { component: SiDocker, label: "Docker" },
              { component: SiLinux, label: "Linux" },
            ]}
            onIconClick={handleIconClick}
          />
        </SkillsRow>
      </SkillsContainer>
    </SkillsWrapper>
  );
};

export default SkillsNew;
