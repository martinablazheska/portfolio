import { projectType } from "../../data/projects";

import Button from "./Button";

import githubIcon from "../../assets/github-icon.svg";
import websiteIcon from "../../assets/website-icon.svg";

import classes from "./ProjectCard.module.scss";

const ProjectCard: React.FC<{ project: projectType }> = ({ project }) => {
  return (
    <div className={classes["project-card"]}>
      <div className={classes.info}>
        <img src={project.imgSrc} alt={project.imgAlt} />
        <div>
          <h2>{project.name}</h2>
          <span>completed project</span>
        </div>
        <div className={classes.description}>{project.description}</div>
      </div>
      <div className={classes.actions}>
        <Button
          link={project.repository}
          icon={githubIcon}
          alt="GitHub"
          name="GitHub"
        />
        <Button
          link={project.website}
          icon={websiteIcon}
          alt="Website"
          name="Website"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
