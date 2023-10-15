import React from "react";
import styled from "styled-components";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { HiCodeBracket } from "react-icons/hi2";

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
`;

const ContainerHeader = styled.div`
  display: flex;
`;

const ContainerItem = styled.div``;

const Resume = () => {
  return (
    <ResumeWrapper>
      <ResumeHeader>
        <h1>
          <HiOutlineDocumentText />
        </h1>
        <h1>Resume</h1>
      </ResumeHeader>
      <ResumeContainer color="yellow">
        <ContainerHeader>
          <h2>
            <HiCodeBracket />
            Skills:
          </h2>
        </ContainerHeader>

        <h4>Main</h4>
        <h4>Working Experience</h4>
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
