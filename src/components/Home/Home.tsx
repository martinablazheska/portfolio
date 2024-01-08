import { useState, useEffect } from "react";

import Introduction from "./Introduction/Introduction";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import ProjectsScroll from "./Projects/ProjectsScroll";

import classes from "./Home.module.scss";

function Home() {
  const [currentWindowWidth, setCurrentWindowWidth] = useState(
    window.innerWidth
  );
  useEffect(() => {
    function handleResize() {
      setCurrentWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <div className={classes.home}>
      <Introduction />
      <Skills id="skills" />
      {currentWindowWidth > 830 ? (
        <Projects id="projects" />
      ) : (
        <ProjectsScroll id="projects" />
      )}
    </div>
  );
}

export default Home;
