import allProjects from "../../../util/all-projects";

import { useState } from "react";

import leftArrow from "../../../../public/left-arrow.svg";
import rightArrow from "../../../../public/right-arrow.svg";

import classes from "./ProjectsScroll.module.scss";

const ProjectsScroll: React.FC<{ id: string }> = ({ id }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  function rightClickHandler() {
    if (currentProjectIndex !== allProjects.length - 1) {
      setCurrentProjectIndex((prevIndex) => prevIndex + 1);
    }
    if (currentProjectIndex === allProjects.length - 1) {
      setCurrentProjectIndex(0);
    }
  }

  function leftClickHandler() {
    if (currentProjectIndex !== 0) {
      setCurrentProjectIndex((prevIndex) => prevIndex - 1);
    }
    if (currentProjectIndex === 0) {
      setCurrentProjectIndex(allProjects.length - 1);
    }
  }

  return (
    <div id={id} className={classes.projects}>
      <h1>My Projects</h1>
      <div className={classes.carousel}>
        <button className={classes.arrow} onClick={leftClickHandler}>
          <img src={leftArrow} alt="previous project" />
        </button>
        {allProjects[currentProjectIndex]}
        <button className={classes.arrow} onClick={rightClickHandler}>
          <img src={rightArrow} alt="next project" />
        </button>
      </div>
    </div>
  );
};

export default ProjectsScroll;
