import React, { useState } from "react";

function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    if (isLight) {
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
    }
    setIsLight(!isLight);
  };

  return (
    <button onClick={toggleTheme}>
      {isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
}

export default ThemeToggle;
