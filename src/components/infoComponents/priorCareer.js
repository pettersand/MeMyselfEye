import React from "react";
import styled from "styled-components";
import { HorizontalDivider, VerticalDivider } from "../../utils/Dividers";

const PriorCareerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;

const TopicHeader = styled.div`
  width: 90%;
  display: flex;
  font-size: 1.5em;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--accent);
`;

const Disclaimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  font-size: 0.9em;
  color: var(--paragraph);
`;

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  font-weight: 500;
  width: 50%;
  border-bottom: 1px solid var(--accent);
`;

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  gap: 16px;
`;

const EducationItem = styled.div`
  display: flex;
  width: 90%;
  align-items: stretch;
  flex-flow: column wrap;
  background-color: var(--bg);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5), 0 6px 20px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 16px;
  gap: 8px;

  p {
    color: var(--paragraph);
    margin: 0;

    &.university {
      font-weight: 400;
    }

    &.location {
      font-style: italic;
      font-size: 0.9em;
    }
  }
`;

const ItemRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  h4 {
    color: var(--headline);
    margin: 0;
    font-size: 1.1em;
    border-bottom: 1px solid var(--contrast);
    padding-right: 24px;
  }

  p {
    font-style: italic;
    font-size: 0.9em;
  }
`;

const EducationDetails = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-bottom: 8px;
`;

const EducationTopics = styled.div`
  display: flex;
  max-height: 40%;
  flex-direction: column;

  ul {
    column-count: 2;
    padding-inline-start: 18px;
    margin: 0;
    font-size: 0.9em;
    color: var(--paragraph);
    li {
      break-inside: avoid;
      margin-bottom: 8px;
    }
  }

  h5 {
    margin: 8px 0;
    color: var(--headline);
    font-size: 1em;
  }
`;

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  gap: 16px;
`;

const JsonLike = styled.div`
  font-family: "Courier New", Courier, monospace;
  width: 90%;
  background-color: #030303;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  white-space: pre-line;
  tab-size: 2;
  & .key {
    color: var(--complement);
  }
  & .string-value {
    color: var(--accent);
  }
  & .brace {
    color: var(--contrast);
  }

  & .level-1 {
    margin-left: 15px;
  }
  & .level-2 {
    margin-left: 30px;
  }

  & .indent-keys {
    margin-left: 10px;
  }
`;

const experienceData = {
  personalTrainer: [
    {
      company: "SATS Bislett",
      duration: "2017-2023",
      location: "Oslo",
    },
    {
      company: "Fitness Renegades",
      duration: "2014-2017",
      location: "Perth",
    },
    {
      company: "SATS LHG",
      duration: "2010-2013",
      location: "Bergen",
    },
    {
      company: "Five55",
      duration: "2010",
      location: "Asker",
    },
  ],
  teachingAssistant: [
    {
      company: "Ullern VGS",
      duration: "2020-2023",
      location: "Oslo",
    },
    {
      company: "Marienlyst School",
      duration: "2020",
      location: "Oslo",
    },
  ],
};

const PriorCareer = () => {
  return (
    <PriorCareerWrapper>
      <TopicHeader>Prior Career</TopicHeader>
      <Disclaimer>
        Disclaimer: Not all of the contents of this section are relevant to the
        developer field. Therefore the specific contents of each section will
        not be explored in-depth.
      </Disclaimer>
      <RowContainer>
        <EducationContainer>
          <SubHeader>Education</SubHeader>
          <EducationItem>
            <EducationDetails>
              <ItemRow>
                <h4>Master of Exercise Science</h4>
                <p>2016-2017</p>
              </ItemRow>

              <p className="university">Edith Cowan University</p>

              <p className="location">Perth, Australia</p>
            </EducationDetails>

            <EducationTopics>
              <h5>Topics of Relevance:</h5>
              <ul>
                <li>Research & Computer Methods</li>
                <li>Statistics</li>
                <li>Ethics</li>
                <li>Leadership & Coaching</li>
                <li>Advanced Program Design</li>
                <li>Data Tracking & Analysis</li>
              </ul>
            </EducationTopics>
          </EducationItem>

          <HorizontalDivider />

          <EducationItem>
            <EducationDetails>
              <ItemRow>
                <h4>Bachelor of Science</h4>
                <p>2013-2016</p>
              </ItemRow>
              <p className="university">Edith Cowan University</p>
              <p className="location">Perth, Australia</p>
            </EducationDetails>

            <EducationTopics>
              <h5>Topics of Relevance:</h5>
              <ul>
                <li>Statistical Research Methods</li>
                <li>Data Analysis</li>
                <li>Data Monitoring</li>
                <li>Leadership & Coaching</li>
                <li>Social Psychology</li>
                <li>Skill Acquisition</li>
              </ul>
            </EducationTopics>
          </EducationItem>

          <HorizontalDivider />

          <EducationItem>
            <EducationDetails>
              <ItemRow>
                <h4>Diploma of Psychology</h4>
                <p>2010-2012</p>
              </ItemRow>
              <p className="university">University of Bergen</p>
              <p className="location">Bergen, Norway</p>
            </EducationDetails>

            <EducationTopics>
              <h5>Topics of Relevance:</h5>
              <ul>
                <li>Psychology 101</li>
                <li>Behvavioural Psychology</li>
                <li>Scientific Method</li>
                <li>Social Psychology</li>
                <li>Motivation Psychology</li>
              </ul>
            </EducationTopics>
          </EducationItem>
        </EducationContainer>

        <VerticalDivider />

        <WorkContainer>
          <SubHeader>Work Experience</SubHeader>
          <JsonLike>
            {"{"}
            <br />
            {Object.entries(experienceData).map(([role, jobs], idx) => (
              <div key={idx} className="level-1">
                <span className="key">"{role}":</span> <br />
                <span className="level-1">[</span>
                <br />
                {jobs.map((job, jIdx) => (
                  <div key={jIdx} className="level-2">
                    {"{"}
                    <br />
                    <div className="indent-keys">
                      <span className="key">"company":</span>{" "}
                      <span className="string-value">"{job.company}",</span>
                      <br />
                      <span className="key">"duration":</span>{" "}
                      <span className="string-value">"{job.duration}",</span>
                      <br />
                      <span className="key">"location":</span>{" "}
                      <span className="string-value">"{job.location}"</span>
                    </div>
                    <br />
                    {"}"}
                    {jIdx !== jobs.length - 1 && (
                      <>
                        ,<br />
                      </>
                    )}
                  </div>
                ))}
                <br />
                <span className="level-1">]</span>
                {idx !== Object.keys(experienceData).length - 1 && (
                  <>
                    ,<br />
                  </>
                )}
              </div>
            ))}
            <br />
            {"}"}
          </JsonLike>
        </WorkContainer>
      </RowContainer>
    </PriorCareerWrapper>
  );
};

export default PriorCareer;
