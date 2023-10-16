import React from "react";
import styled from "styled-components";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { HiCodeBracket } from "react-icons/hi2";
import { DiPython } from "react-icons/di";
import { DiDjango } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";

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

const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const LangSet = styled.div`
  border-right: 1px solid grey;
  padding-inline: 5px;
  display: flex;
  align-items: center;
`;

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
      <ResumeContainer color="yellow">
        <ContainerHeader>
          <IconBackground color="yellow" size="2em">
            <HiCodeBracket style={{ zIndex: 2, color: "black" }} size={24} />
          </IconBackground>
          <h2>Skills:</h2>
        </ContainerHeader>
        <ContainerItem>
          <h4>Backend:</h4>
          <SkillsContainer>
            <LangSet>
              <DiPython size={40} />
              Python
            </LangSet>
            <DiDjango size={40} />
            <SiFlask size={34} />
          </SkillsContainer>
          <SkillsContainer>
            <LangSet>
              <DiDatabase size={40} /> SQL
            </LangSet>
            <DiPostgresql size={40} />
          </SkillsContainer>
           <h4>Frontend:</h4>
           <SkillsContainer>
            <LangSet>
              
            </LangSet>
           </SkillsContainer>
          <h4>Working Experience</h4>
        </ContainerItem>
      </ResumeContainer>
      <ResumeContainer color="purple">
        <h2>Projects</h2>
      </ResumeContainer>
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
