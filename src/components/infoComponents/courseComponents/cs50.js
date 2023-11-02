import React, { useState } from "react";
import styled from "styled-components";

const CourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  align-content: center;
  width: 100%;

  padding: 16px;
  border: 1px solid var(--bg);
`;

const CarouselContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  max-width: 500px;
  gap: 24px;
  flex-direction: row;
  animation: scrollCarousel ${(props) => props.animationSpeed} linear infinite;

  @keyframes scrollCarousel {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const CarouselItem = styled.div`
  display: flex;
`;

const TabsRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  flex: 1;
  border: 1px solid var(--bg);
  border-radius: 8px;
  cursor: pointer;
`;

const courseData = {
  toolbox: [
    {
      id: 1,
      name: "C",
      categories: ["Languages", "Backend", "Computer Science", "All"],
    },
    {
      id: 2,
      name: "Python",
      categories: [
        "Languages",
        "Backend",
        "Data Analysis",
        "Computer Science",
        "All",
      ],
    },
    {
      id: 3,
      name: "SQL",
      categories: ["Languages", "Backend", "Data Analysis", "All"],
    },
    {
      id: 4,
      name: "HTML/CSS",
      categories: ["Languages", "Frontend", "Fullstack", "All"],
    },
    {
      id: 5,
      name: "JavaScript",
      categories: ["Languages", "Frontend", "Fullstack", "All"],
    },
    {
      id: 6,
      name: "Flask",
      categories: ["Backend", "Fullstack", "All"],
    },
    {
      id: 7,
      name: "SQLite",
      categories: ["Languages", "Backend", "Data Analysis", "All"],
    },
    {
      id: 8,
      name: "Bootstrap",
      categories: ["Frontend", "Fullstack", "All"],
    },
    {
      id: 9,
      name: "Jinja2",
      categories: ["Backend", "Fullstack", "All"],
    },
    {
      id: 10,
      name: "Clang",
      categories: ["Languages", "Backend", "Computer Science", "All"],
    },
  ],
  topics: [
    {
      id: 1,
      name: "Data Sanitizing",
      categories: ["Security", "Fullstack", "All"],
    },
    {
      id: 2,
      name: "Data Structures",
      categories: ["Computer Science", "Backend", "All"],
    },
    {
      id: 3,
      name: "Memory",
      categories: ["Computer Science", "All"],
    },
    {
      id: 4,
      name: "Web Development",
      categories: ["Frontend", "Backend", "Fullstack", "All"],
    },
    {
      id: 5,
      name: "Relational Databases",
      categories: ["Backend", "Data Analysis", "Computer Science", "All"],
    },
    {
      id: 6,
      name: "Web Security",
      categories: ["Security", "Backend", "All"],
    },
    {
      id: 7,
      name: "Algorithms",
      categories: ["Backend", "Computer Science", "All"],
    },
    {
      id: 8,
      name: "Web Protocols & Standards",
      categories: ["Frontend", "Backend", "Fullstack", "All"],
    },
    {
      id: 9,
      name: "Object Oriented Programming",
      categories: ["Computer Science", "Backend", "All"],
    },
    {
      id: 10,
      name: "Compiled Languages",
      categories: ["Languages", "Computer Science", "All"],
    },
    {
      id: 11,
      name: "File I/O",
      categories: ["Backend", "Computer Science", "All"],
    },
    {
      id: 12,
      name: "SQL Injections",
      categories: ["Security", "Backend", "All"],
    },
    {
      id: 13,
      name: "Authentication",
      categories: ["Security", "Backend", "All"],
    },
    {
      id: 14,
      name: "API & Rest API",
      categories: ["Backend", "Frontend", "Fullstack", "All"],
    },
    {
      id: 15,
      name: "Refactoring",
      categories: ["Backend", "Frontend", "Fullstack", "All"],
    },
    {
      id: 16,
      name: "Documentation",
      categories: ["Computer Science", "All"],
    },
    {
      id: 17,
      name: "External APIs",
      categories: ["Backend", "Frontend", "Fullstack", "All"],
    },
    {
      id: 18,
      name: "Input Validation",
      categories: ["Security", "Backend", "All"],
    },
    {
      id: 19,
      name: "Passwords & Security",
      categories: ["Security", "Backend", "All"],
    },
    {
      id: 20,
      name: "Brute Force Attacks",
      categories: ["Security", "All"],
    },
    {
      id: 21,
      name: "DDOS & Rate Limiting",
      categories: ["Security", "Backend", "All"],
    },
    {
      id: 22,
      name: "Args/Kwargs",
      categories: ["Languages", "Backend", "Computer Science", "All"],
    },
    {
      id: 23,
      name: "Memory Management & Malloc",
      categories: ["Computer Science", "All"],
    },
    {
      id: 24,
      name: "Pointers",
      categories: ["Languages", "Computer Science", "All"],
    },
    {
      id: 25,
      name: "Command Line Interface",
      categories: ["Languages", "Computer Science", "All"],
    },
    {
      id: 26,
      name: "Interpreted Languages",
      categories: ["Languages", "Computer Science", "All"],
    },
  ],
};

const categories = [
  "All",
  "Languages",
  "Fullstack",
  "Backend",
  "Frontend",
  "Data Analysis",
  "Computer Science",
  "Security",
];

const Harvard = () => {
  const [activeTabs, setActiveTabs] = useState(["All"]);
  const [animationSpeed, setAnimationSpeed] = useState(["30s"]);

  const toggleTab = (tab) => {
    if (tab === "All") {
      setActiveTabs(["All"]);
    } else {
      // If any tab other than "All" is clicked, add or remove it
      if (activeTabs.includes(tab)) {
        setActiveTabs((prev) => prev.filter((t) => t !== tab));
      } else {
        setActiveTabs((prev) => [...prev, tab]);
      }

      // If "All" is in the activeTabs array and another tab is clicked, remove "All"
      if (activeTabs.includes("All")) {
        setActiveTabs((prev) => prev.filter((t) => t !== "All"));
      }
    }
  };

  const filteredItems = (dataType) => {
    return courseData[dataType].filter((item) =>
      item.categories.some((category) => activeTabs.includes(category))
    );
  };

  const handleMouseEnter = () => {
    setAnimationSpeed("60s");
  };

  const handleMouseLeave = () => {
    setAnimationSpeed("30s");
  };

  return (
    <CourseWrapper>
      <DescriptionContainer>
        <p>
          Harvard University's introduction to the intellectual enterprises of
          computer science and the art of programming for majors and non-majors
          alike, with or without prior programming experience. An entry-level
          course taught by David J. Malan, CS50x teaches students how to think
          algorithmically and solve problems efficiently.
        </p>
      </DescriptionContainer>

      <CarouselContainer>
        <TabsRow>
          {categories.map((category) => (
            <Tabs
              key={category}
              onClick={() => toggleTab(category)}
              style={{
                backgroundColor: activeTabs.includes(category)
                  ? "var(--accent)"
                  : "var(--bg)",
              }}
            >
              {category}
            </Tabs>
          ))}
        </TabsRow>
        <Carousel
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <CarouselContent animationSpeed={animationSpeed}>
            {filteredItems("toolbox").map((tool) => (
              <CarouselItem key={tool.id}>{tool.name}</CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Carousel
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <CarouselContent animationSpeed={animationSpeed}>
            {filteredItems("topics").map((topic) => (
              <CarouselItem key={topic.id}>{topic.name}</CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CarouselContainer>
    </CourseWrapper>
  );
};

export default Harvard;
