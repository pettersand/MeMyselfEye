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

const ContainerItem = styled.div``;

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
