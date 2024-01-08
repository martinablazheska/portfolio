import projects from "../data/projects";

import ProjectCard from "../components/UI/ProjectCard";
import ComingSoonCard from "../components/UI/ComingSoonCard";

const allProjects = projects
  .map((project) => <ProjectCard key={project.id} project={project} />)
  .concat(<ComingSoonCard />);

export default allProjects;
