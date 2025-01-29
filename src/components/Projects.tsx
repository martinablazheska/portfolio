import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/store/projects";

const Projects = () => {
  return (
    <SectionWrapper id="Projects" className="flex flex-col items-center">
      <SectionHeading heading="Projects" />
      <div className="w-full md:w-3/4 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 px-4">
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} id={index + 1} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
