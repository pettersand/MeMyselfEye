import React from "react";
import styled from "styled-components";
import { VerticalDivider } from "../../utils/Dividers";
import Harvard from "./courseComponents/cs50";

const CoursesWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 24px;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  max-width: 45%;
  padding: 16px;
  height: 100%;
  gap: 16px;
`;

const CourseHeader = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: 600;
  padding: 4px;
  border-bottom: 1px solid var(--accent);
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
  width: 95%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  h3 {
    border-bottom: 1px solid var(--accent);
    margin: 4px 0 4px 0;
  }
  p {
    color: var(--paragraph);
  }
`;

const ListItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  li {
    margin-bottom: 4px;
  }
`;

const Courses = () => {
  return (
    <CoursesWrapper>
      <CoursesContainer>
        <CourseHeader>Harvard CS50x</CourseHeader>
        <Harvard />
      </CoursesContainer>

      <VerticalDivider />

      <CoursesContainer>
        <CourseHeader>Python for Everybody Specialization</CourseHeader>
        <DescriptionContainer>
          <p>
            This course introduces fundamental programming concepts including
            data structures, networked application program interfaces, and
            databases, using the Python programming language. Offered by the
            University of Michigan, through Coursera.
          </p>
          <p>Skills Used: Python, SQLite, Pandas, BeautifulSoup</p>
        </DescriptionContainer>
        <ListContainer>
          <ListItem>
            <h3>Structure</h3>
            <ul>
              <li>Getting Started with Python</li>
              <li>Python Data Structures</li>
              <li>Using Python to Access Web Data</li>
              <li>Using Databases with Python</li>
              <li>Retrieving, Processing, Visualizing Data</li>
            </ul>
          </ListItem>
          <ListItem>
            <h3>Topics</h3>
            <ul>
              <li>Data Structures</li>
              <li>SQLite</li>
              <li>File I/O</li>
              <li>Using APIs</li>
              <li>Data Visualization</li>
              <li>Web Scraping</li>
              <li>XML/JSON Handling</li>
            </ul>
          </ListItem>
        </ListContainer>
      </CoursesContainer>
    </CoursesWrapper>
  );
};

export default Courses;
