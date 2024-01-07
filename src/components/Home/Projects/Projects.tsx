import projects from "../../../data/projects";
import ComingSoonCard from "../../UI/ComingSoonCard";

import ProjectCard from "../../UI/ProjectCard";

import classes from "./Projects.module.scss";

const Projects: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div className={classes.projects} id={id}>
      <h1>My Projects</h1>
      <div className={classes["projects-container"]}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <ComingSoonCard />
      </div>
    </div>
  );
};

export default Projects;
