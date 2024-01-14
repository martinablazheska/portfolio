import { useState, useEffect, useContext } from "react";

import Introduction from "./Introduction/Introduction";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import ProjectsScroll from "./Projects/ProjectsScroll";

import classes from "./Home.module.scss";
import UpButton from "../UI/UpButton";
import { scrollContext } from "../../context/scroll-context";
import About from "./About/About";

function Home() {
  const { isScrolled } = useContext(scrollContext);
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
      <About id="about" />
      {isScrolled && <UpButton />}
    </div>
  );
}

export default Home;
