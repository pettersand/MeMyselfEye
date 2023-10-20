import React from "react";
import styled from "styled-components";

const SkillDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DescriptionContainer = styled.div``;

const UsedInContainer = styled.div``;

const UsedForContainer = styled.div``;

const detailMap = {
  python: {
    icon: "SiPython",
    label: "Python",
    startDate: "May 1st",
    frameworks: ["Flask", "Django"],
    usedIn: ["Builder", "Salloc", "Portfolio"],
    usedFor: ["API", "Backend SQL", "Data Analysis"],
  },
};

const SkillDetail = ({ skill, onClose }) => {
  return (
    <SkillDetailWrapper>
      <p>{skill.description}</p>
      <button onClick={onClose}>Close</button>
    </SkillDetailWrapper>
  );
};

export default SkillDetail;
