import React from "react";
import { useAppState } from "../../App";
import styled from "styled-components";

const CoursesWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 8px;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const CoursesContainer = styled(({ isVisible, ...props }) => (
  <div {...props} style={{ display: isVisible ? "flex" : "none" }} />
))`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  padding: 8px;
  height: 100%;
  gap: 8px;
  box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.75);
`;

const CourseHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 4px;
`;

const HeaderTitle = styled.div`
  font-size: 1.2em;
  font-weight: 500;
`;

const HeaderItem = styled.div`
  font-weight: 200;
  font-size: 1em;
`;

const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  p {
    font-weight: 200;
  }
`;

const ListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const CoursesEng = () => {
  const { state } = useAppState();
  const { detailLevel } = state;

  return (
    <CoursesWrapper>
      <CoursesContainer isVisible={detailLevel === "minimal"}>
        <CourseHeader>
          <HeaderItem>Date</HeaderItem>
          <HeaderTitle>Python for Everybody Specialization</HeaderTitle>
          <HeaderItem>Link</HeaderItem>
        </CourseHeader>
        <DescriptionContainer>
          Description: <p>Enter description of the course</p>
        </DescriptionContainer>
        <ListContainer>
          <ListItem>
            <h3>Structure</h3>
          </ListItem>
          <ListItem>
            <h3>Topics</h3>
          </ListItem>
        </ListContainer>
      </CoursesContainer>
      <CoursesContainer isVisible={detailLevel === "detailed"}>
        <h4>Python for Everybody</h4>
      </CoursesContainer>
      <CoursesContainer isVisible={detailLevel === "minimal"}>
        <h4>Harvard CS50x</h4>
      </CoursesContainer>
      <CoursesContainer isVisible={detailLevel === "detailed"}>
        <h4>Harvard CS50x</h4>
      </CoursesContainer>
    </CoursesWrapper>
  );
};

export default CoursesEng;
