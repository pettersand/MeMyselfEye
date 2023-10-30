import React, { useState } from "react";
import { useAppState } from "../../App";
import styled from "styled-components";
import { HiMinus, HiPlus } from "react-icons/hi2";

const SoftSkillsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const CategoryContainer = styled.div`
display: flex;
flex-flow: column wrap;
align-items: center;
justify-content: flex-start;
flex: 1;
width 90%;
gap: 16px;

`;

const CategoryHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  font-weight: 500;
  width: 60%;
  border-bottom: 1px solid var(--accent);

  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const CategorySkills = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 8px;
  background-color: var(--bg);
  max-width: 40%;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 8px 0;

  p {
    margin: 4px 0;
    color: var(--paragraph);
  }
`;

const SubHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1.1em;
  font-weight: 500;
  width: 75%;
  border-bottom: 1px solid
    ${(props) => (props.expanded ? "var(--accent)" : "var(--complement)")};

  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const SkillDetails = styled(({ expanded, ...props }) => <div {...props} />)`
  max-height: ${(props) => (props.expanded ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;

const categorySkillsMap = {
  problemSolving: [
    "analytical",
    "innovative",
    "creative",
    "problemSolver",
    "criticalThinker",
    "resourceful",
  ],
  personal: [
    "positive",
    "curious",
    "quickLearner",
    "empathetic",
    "emotionalIntelligence",
    "patient",
  ],
  professional: ["publicSpeaking", "accountable", "ambitious", "adaptive"],
  teamwork: ["communicative", "amicable", "sociable", "leadership"],
};

const SoftSkillsEng = () => {
  const [categoryState, setCategoryState] = useState({
    problemSolving: false,
    personal: false,
    teamwork: false,
    professional: false,
  });

  const [skillState, setSkillState] = useState({
    analytical: true,
    innovative: true,
    positive: true,
    curious: true,
    communicative: true,
    amicable: true,
    accountable: true,
    adaptive: true,
  });

  const toggleCategory = (category) => {
    const categoryIsExpanded = categoryState[category];

    // Toggle the category itself
    setCategoryState((prevState) => ({
      ...prevState,
      [category]: !categoryIsExpanded,
    }));

    // If category is currently expanded, collapse all skills within it
    // If category is currently collapsed, expand all skills within it
    const updatedSkills = categorySkillsMap[category].reduce((acc, skill) => {
      acc[skill] = !categoryIsExpanded;
      return acc;
    }, {});

    setSkillState((prevState) => ({
      ...prevState,
      ...updatedSkills,
    }));
  };

  const toggleSkill = (skill) => {
    setSkillState((prevState) => ({
      ...prevState,
      [skill]: !prevState[skill],
    }));
  };

  return (
    <SoftSkillsWrapper>
      <ContainerRow>
        <CategoryContainer>
          <CategoryHeader onClick={() => toggleCategory("problemSolving")}>
            Problem Solving & Innovation
            {categoryState.problemSolving ? <HiMinus /> : <HiPlus />}
          </CategoryHeader>
          <CategorySkills>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("analytical")}
                expanded={skillState.analytical}
              >
                Analytical {skillState.analytical ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.analytical}>
                <SkillItem>
                  Description:
                  <p>
                    Breaking down complex information to draw informed
                    conclusions and make decisions.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    Leveraging the analytical mindset honed through my Master's
                    in Exercise Science, I approach coding systematically, and
                    always aim at improving programming solutions. This approach
                    mirrors my use of performance data as a personal trainer,
                    always aiming for optimized, data-driven outcomes.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>

            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("innovative")}
                expanded={skillState.innovative}
              >
                Innovation {skillState.innovative ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.innovative}>
                <SkillItem>
                  Description:
                  <p>
                    Thinking outside the box to develop original solutions and
                    improvements.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    In the realm of development, I continuously seek
                    unconventional methods to enhance efficiency and user
                    experience. My passion for breaking norms and improving
                    systems propels me to create unique digital solutions,
                    echoing my vision of pioneering innovative business
                    ventures.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("creative")}
                expanded={skillState.creative}
              >
                Creativity {skillState.creative ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.creative}>
                <SkillItem>
                  Description:
                  <p>
                    Imagine or invent something original, breaking away from
                    established patterns to look at things in a novel way.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    As a developer, I leverage my creativity to design intuitive
                    and unique user interfaces as well as to implement
                    unconventional solutions to problems. My drive to imagine
                    and invent has followed me in life through hobbies such as
                    playing instruments, drawing, and 3D modeling.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("problemSolver")}
                expanded={skillState.problemSolver}
              >
                Problem Solving
                {skillState.problemSolver ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.problemSolver}>
                <SkillItem>
                  Description:
                  <p>
                    Finding solutions to challenges, by analyzing the situation
                    and applying logical reasoning.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    I love the puzzle-like nature of coding. Each hurdle is an
                    opportunity for learning, and there's a unique satisfaction
                    when all the pieces assemble and you're met with a
                    completely new error.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("criticalThinker")}
                expanded={skillState.criticalThinker}
              >
                Critical Thinking
                {skillState.criticalThinker ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.criticalThinker}>
                <SkillItem>
                  Description:
                  <p>
                    Analyze, evaluate, and improve upon ideas or solutions
                    through reasoned judgement.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    I always question and evaluate new concepts and ideas,
                    ensuring no glaring mistakes, and for my own understanding.
                    Every choice should be approached with critical reflection
                    and based on solid reasoning. If you cannot explain the
                    thought process of your choices, there was no thought
                    process at all.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("resourceful")}
                expanded={skillState.resourceful}
              >
                Resourceful
                {skillState.resourceful ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.resourceful}>
                <SkillItem>
                  Description:
                  <p>
                    Find and use available resources to solve problems or
                    achieve goals.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    Whether diving into documentation, reading articles, or
                    tapping into the knowledge of peers, I ensure that I have
                    the tools and understanding necessary to move forward with a
                    challenge. This approach ensures I always have a starting
                    point and path forward. I believe anything can be learned if
                    you simply define the end result and figure out its
                    components.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
          </CategorySkills>
        </CategoryContainer>

        <CategoryContainer>
          <CategoryHeader onClick={() => toggleCategory("personal")}>
            Personal Attributes & Growth
            {categoryState.personal ? <HiMinus /> : <HiPlus />}
          </CategoryHeader>
          <CategorySkills>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("positive")}
                expanded={skillState.positive}
              >
                Positivity {skillState.positive ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.positive}>
                <SkillItem>
                  Description:
                  <p>
                    Maintain an optimistic and constructive outlook, even during
                    set-backs or challenging situations.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    In work and personal situations, I approach challenges with
                    a "glass half full" mindset. Recognizing the downsides of
                    negativity, I choose to focus on the potential and uplift
                    those around me, ensuring enhanced performance and fostering
                    a collaborative environment.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>

            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("curious")}
                expanded={skillState.curious}
              >
                Curiosity {skillState.curious ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.curious}>
                <SkillItem>
                  Description:
                  <p>Strong desire to learn or understand something new.</p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    In my role as a developer, my innate curiosity pushes me to
                    delve deeper than just solutions. I seek to understand the
                    "why" behind them. This drive not only bolsters my own
                    understanding but also prompts peers to re-evaluate
                    processes, potentially unveiling inefficiencies and
                    fostering improvement.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("quickLearner")}
                expanded={skillState.quickLearner}
              >
                Quick Learner
                {skillState.quickLearner ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.quickLearner}>
                <SkillItem>
                  Description:
                  <p>
                    Capacity to rapidly assimilate and apply new knowledge or
                    skills.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    In development, my aptitude for hyper-focus and systematic
                    learning allows me to understand complex subjects piece by
                    piece. Having mastered diverse fields like stock market
                    speculation, 3D modeling, and special needs education, I can
                    quickly adapt and become proficient in new domains, ensuring
                    I keep up with any requirements.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("empathetic")}
                expanded={skillState.empathetic}
              >
                Empathy
                {skillState.empathetic ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.empathetic}>
                <SkillItem>
                  Description:
                  <p>
                    Ability to understand and share the feelings of another.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    Recognizing and addressing the perspectives and emotions of
                    teammates ensures a harmonious work environment. This
                    deep-rooted empathy, evident through roles in personal
                    training and assisting students with special needs, equips
                    me to support and uplift colleagues, enhancing team dynamics
                    and project outcomes. Everyone deserves to be seen and
                    heard.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>

            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("patient")}
                expanded={skillState.patient}
              >
                Patience
                {skillState.patient ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.patient}>
                <SkillItem>
                  Description:
                  <p>
                    Capacity to tolerate or endure difficulties without becoming
                    annoyed or anxious.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    In software development, patience is crucial when tackling
                    complex challenges or debugging intricate code. My ability
                    to remain patient ensures a thorough and meticulous
                    approach. A skill honed through my work with hundreds of
                    personal training clients from all walks of life, and
                    through my work as a teaching assistant for youth with
                    special needs.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
          </CategorySkills>
        </CategoryContainer>
      </ContainerRow>

      <ContainerRow>
        <CategoryContainer>
          <CategoryHeader onClick={() => toggleCategory("teamwork")}>
            Teamwork & Collaboration
            {categoryState.teamwork ? <HiMinus /> : <HiPlus />}
          </CategoryHeader>
          <CategorySkills>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("communicative")}
                expanded={skillState.communicative}
              >
                Communication
                {skillState.communicative ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.communicative}>
                <SkillItem>
                  Description:
                  <p>
                    Expressing ideas clearly and actively listening to others,
                    ensuring mutual understanding and collaboration.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    In software development, effective communication is key. My
                    emphasis on both speaking and listening guarantees that
                    project requirements are understood, mistakes are minimized,
                    and the entire team remains aligned and informed throughout
                    the development process.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>

            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("amicable")}
                expanded={skillState.amicable}
              >
                Amicability {skillState.amicable ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.amicable}>
                <SkillItem>
                  Description:
                  <p>
                    Possessing a pleasant and agreeable nature, and the absence
                    of antagonism.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    In the context of a development team, my easy-going nature
                    ensures smooth team dynamics. I prioritize creating positive
                    interactions, avoiding unnecessary tensions, and ensuring
                    that I contribute to a constructive and cohesive work
                    environment.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("sociable")}
                expanded={skillState.sociable}
              >
                Sociability
                {skillState.sociable ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.sociable}>
                <SkillItem>
                  Description:
                  <p>
                    Ability to form connections and interact comfortably with
                    various individuals, often thriving in diverse group
                    settings.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    As an outgoing person I build relationships quickly,
                    bolstering team synergy. My knack for making strong first
                    impressions allows for smooth interactions with
                    stakeholders, clients, and team members alike.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("leadership")}
                expanded={skillState.leadership}
              >
                Leadership
                {skillState.leadership ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.leadership}>
                <SkillItem>
                  Description:
                  <p>
                    Guide, influence, and inspire a team towards achieving a
                    common goal, coupled with taking responsibility for
                    outcomes.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    Drawing from my roles as a head coach at a gym and a
                    leadership position in the military, I've cultivated a
                    leadership style rooted in extreme ownership. I believe a
                    leader should be accountable and take responsibility for all
                    mistakes, while simultaneously not taking the credit for
                    success. I prioritize the well-being and recognition of my
                    team members, ensuring they are valued and heard.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
          </CategorySkills>
        </CategoryContainer>

        <CategoryContainer>
          <CategoryHeader onClick={() => toggleCategory("professional")}>
            Professional Attributes
            {categoryState.professional ? <HiMinus /> : <HiPlus />}
          </CategoryHeader>
          <CategorySkills>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("accountable")}
                expanded={skillState.accountable}
              >
                Accountability
                {skillState.accountable ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.accountable}>
                <SkillItem>
                  Description:
                  <p>
                    Willingness to take responsibility for one's actions,
                    ensuring that commitments and duties are met without
                    deflecting blame onto others.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    Living by the belief that we can only influence factors
                    within our control, I consistently take ownership of my
                    actions, efforts, and performance. This ensures a reliable
                    and transparent work ethic, fostering trust with peers and
                    superiors.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>

            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("adaptive")}
                expanded={skillState.adaptive}
              >
                Adaptivity {skillState.adaptive ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.adaptive}>
                <SkillItem>
                  Description:
                  <p>
                    Capacity to adjust to new situations, challenges, or
                    environments with ease.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    Faced with unfamiliar scenarios, I don't let feelings of
                    uncertainty hinder me. Instead, I lean on my ability to
                    adapt, wearing different hats as the situation demands. The
                    world keeps changing, and so must we.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("publicSpeaking")}
                expanded={skillState.publicSpeaking}
              >
                Public Speaking
                {skillState.publicSpeaking ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.publicSpeaking}>
                <SkillItem>
                  Description:
                  <p>
                    Effectively conveying information or ideas to an audience,
                    captivating their attention and ensuring comprehension.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    With confidence and clarity, I engage audiences, delivering
                    messages in a way that ensures understanding. I have always
                    been comfortable in front of crowds, and have extensive
                    experience from public speaking from my work as a personal
                    trainer, be it in a group training setting, or holding
                    presentations for peers.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
            <SkillContainer>
              <SubHeader
                onClick={() => toggleSkill("ambitious")}
                expanded={skillState.ambitious}
              >
                Ambition
                {skillState.ambitious ? <HiMinus /> : <HiPlus />}
              </SubHeader>
              <SkillDetails expanded={skillState.ambitious}>
                <SkillItem>
                  Description:
                  <p>
                    Inner drive to achieve and exceed goals, continuously
                    pushing oneself to new heights and striving for improvement
                    and progress.
                  </p>
                </SkillItem>
                <SkillItem>
                  Application:
                  <p>
                    My ambition fuels my journey into the tech industry. Not
                    content with the mediocrity, I'm always seeking ways to
                    grow, innovate, and achieve more. This drive ensures I'm not
                    just meeting expectations but consistently aiming to surpass
                    them.
                  </p>
                </SkillItem>
              </SkillDetails>
            </SkillContainer>
          </CategorySkills>
        </CategoryContainer>
      </ContainerRow>
    </SoftSkillsWrapper>
  );
};

export default SoftSkillsEng;
