import React, { useState } from "react";
import styled from "styled-components";
import {
  SiFlask,
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
import { TbBrandCSharp } from "react-icons/tb";
import SkillDetail from "./infoComponents/skillDetail";
import { HiCode } from "react-icons/hi";

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ContainerHeader = styled.div`
  width: 90%;
  border-bottom: 1px solid var(--accent);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const SkillsContainer = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  box-shadow: inset 0px 0px 5px 5px rgba(0, 0, 0, 0.5);
`;

const SkillsRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex: 1;
  border-top: 1px solid var(--bg);
`;

const HeaderRow = styled.div`
  display: flex;
  margin-top: 8px;
  width: 100%;
  flex-direction: row;
  flex: 1;
`;

const HeaderCat = styled.div`
  flex: 1.25;
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

  h4 {
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;

const HeaderWorking = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;

const CategoryCell = styled.div`
  flex: 1.25;
  display: flex;
  align-items: center;
  justify-content: center;

  h5 {
    @media (max-width: 600px) {
      font-size: 0.8rem;
    }
  }
`;

const SkillsCell = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-inline: 1px solid var(--bg);
`;

const WorkingCell = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const IconLabel = styled.div`
  margin-top: 4px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--paragraph);
`;

const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 95%;
  padding: 4px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1) translateY(-5px);
    cursor: pointer;
    filter: drop-shadow(0 0 4px rgba(0, 128, 128, 0.4));
  }
  svg {
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
`;

const DetailContainer = styled(({ isOpen, ...props }) => <div {...props} />)`
  width: 100%;
  display: flex;
  flex-direction: column;

  overflow: hidden;
  max-height: ${(props) => (props.isOpen ? "500px" : "0px")};
  transition: max-height 0.5s ease-in-out;
`;

function TechIcon({ IconComponent, color, onMouseEnter, onClick }) {
  return (
    <Icon onMouseEnter={onMouseEnter}>
      <IconComponent color={color || "black"} onClick={onClick} />
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
            color="var(--accent)"
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
            color="var(--accent)"
            onMouseEnter={() => setCurrentLabel(icon.label)}
          />
        ))}
      </IconRow>
    </WorkingCell>
  );
};

const SkillsNew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSkillDetail, setCurrentSkillDetail] = useState(null);

  const handleIconClick = (label) => {
    setCurrentSkillDetail(label.toLowerCase());
    setIsOpen(true);
  };

  const handleCloseDetail = () => {
    setIsOpen(false);
  };

  return (
    <SkillsWrapper>
      <ContainerHeader>
        <h3>Languages</h3>
      </ContainerHeader>
      <SkillsContainer>
        {isOpen && (
          <DetailContainer isOpen={isOpen}>
            <SkillDetail
              skill={currentSkillDetail}
              onClose={handleCloseDetail}
            />
          </DetailContainer>
        )}
        <HeaderRow>
          <HeaderCat>
            <h5>
              <HiCode />
            </h5>
          </HeaderCat>
          <HeaderSkills>
            <h4>Primary</h4>
          </HeaderSkills>
          <HeaderWorking>
            <h4>Secondary</h4>
          </HeaderWorking>
        </HeaderRow>
        <SkillsRow>
          <CategoryCell>
            <h5>Backend</h5>
          </CategoryCell>
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
          <CategoryCell>
            <h5>Frontend</h5>
          </CategoryCell>
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
          <CategoryCell>
            <h5>Other</h5>
          </CategoryCell>
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
