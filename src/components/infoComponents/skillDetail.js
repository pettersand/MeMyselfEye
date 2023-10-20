import React from "react";
import styled from "styled-components";
import { SiPython } from "react-icons/si";

const SkillDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  /* Add additional styling as needed */
`;

const Icon = styled.div`
  margin-right: 10px; // Adjust as necessary
`;

const UsedInContainer = styled.div`
  /* Styling for the usedIn container */
`;

const UsedForContainer = styled.div`
  /* Styling for the usedFor container */
`;

const detailMap = {
  python: {
    icon: SiPython,
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
      <p>Python</p>
      <button onClick={onClose}>Close</button>
    </SkillDetailWrapper>
  );
};

export default SkillDetail;
