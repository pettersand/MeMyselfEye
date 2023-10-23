import React from "react";
import { useAppState } from "../../App";
import styled from "styled-components";

const CoursesWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
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
  align-items: center;

  h3 {
    margin: 4px 0 4px 0;
  }

  li {
    margin-bottom: 4px;
  }
`;

const CoursesEng = () => {
  const { state } = useAppState();
  const { detailLevel } = state;

  return (
    <CoursesWrapper>
      <CoursesContainer isVisible={detailLevel === "minimal"}>
        <CourseHeader>
          <HeaderItem>May 1st - 25th</HeaderItem>
          <HeaderTitle>Python for Everybody Specialization</HeaderTitle>
          <HeaderItem>Link</HeaderItem>
        </CourseHeader>
        <DescriptionContainer>
          Description:{" "}
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
      <CoursesContainer isVisible={detailLevel === "detailed"}>
        <h4>Python for Everybody</h4>
      </CoursesContainer>

      <CoursesContainer isVisible={detailLevel === "minimal"}>
        <CourseHeader>
          <HeaderItem>26/05 - 10/08</HeaderItem>
          <HeaderTitle>Harvard CS50x</HeaderTitle>
          <HeaderItem>
            <a href="https://pll.harvard.edu/course/cs50-introduction-computer-science">
              Link
            </a>
          </HeaderItem>
        </CourseHeader>
        <DescriptionContainer>
          Description:{" "}
          <p>
            Harvard University's introduction to the intellectual enterprises of
            computer science and the art of programming for majors and
            non-majors alike, with or without prior programming experience. An
            entry-level course taught by David J. Malan, CS50x teaches students
            how to think algorithmically and solve problems efficiently.
          </p>
          <p>Skills Used: C, Python, Flask, SQL, HTML, CSS, JavaScript</p>
        </DescriptionContainer>
        <ListContainer>
          <ListItem>
            <h3>Structure</h3>
            <ul>
              <li>Scratch</li>
              <li>C</li>
              <li>Arrays</li>
              <li>Algorithms</li>
              <li>Memory</li>
              <li>Data Structures</li>
              <li>Python</li>
              <li>SQL</li>
              <li>HTML, CSS, JavaScript</li>
              <li>Flask</li>
            </ul>
          </ListItem>
          <ListItem>
            <h3>Topics</h3>
            <ul>
              <li>Problem Solving</li>
              <li>Code Structure</li>
              <li>Security</li>
              <li>Web Development</li>
              <li>Encapsulation</li>
              <li>Computer Science</li>
              <li>Resource Management</li>
            </ul>
          </ListItem>
        </ListContainer>
      </CoursesContainer>
      <CoursesContainer isVisible={detailLevel === "detailed"}>
        <h4>Harvard CS50x</h4>
      </CoursesContainer>
    </CoursesWrapper>
  );
};

export default CoursesEng;
