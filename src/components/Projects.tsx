import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { Link } from "react-router-dom";
import { projects } from "@/store/projects";

const Projects = () => {
  return (
    <SectionWrapper id="Projects" className="flex flex-col items-center">
      <SectionHeading heading="Projects" />
      <div>
        {projects.map((project, index) => (
          <Link key={index} to={`/project/${index + 1}`}>
            {project.name}
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
