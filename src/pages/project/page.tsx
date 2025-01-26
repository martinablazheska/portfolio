import { Link, useParams } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@nextui-org/button";
import ContactButton from "@/components/ContactButton";
import { Github, MousePointerClick, ChevronRight } from "lucide-react";
import { Project } from "@/types/types";
import { skills } from "@/store/skills";
import { projects } from "@/store/projects";
import { technologies } from "@/store/technologies";

const ProjectPage = () => {
  const { projectId } = useParams();
  const project: Project = projects[Number(projectId) - 1];

  const projectTechnologies = technologies.filter(technology =>
    project.technologies.includes(technology.title)
  );

  const projectSkills = skills.filter(skill =>
    project.skills.includes(skill.title)
  );

  return (
    <div className="w-11/12 min-w-72 max-w-[1200px] p-2 md:p-4 pt-8 mx-auto h-auto min-h-screen">
      <header className="w-full flex flex-col gap-1 border-b border-b-white pb-2 md:pb-4">
        <h2 className="font-mono text-yellow-500 font-semibold text-xs md:text-sm">
          projects //
        </h2>
        <h1 className="font-bold tracking-widest text-lg md:text-2xl lg:text-3xl">
          {project.name}
        </h1>
      </header>
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-1 text-[10px] md:text-sm">
          <Button className="p-0">
            <Link
              to={"/"}
              className="underline underline-offset-2 md:underline-offset-4 font-light"
            >
              Home
            </Link>
          </Button>
          <span className="scale-[0.6] md:scale-1">
            <ChevronRight size={15} />
          </span>
          <span>{project.name}</span>
        </div>
        <div className="flex items-center gap-2">
          {project.repository && (
            <span className="scale-[0.8] md:scale-1">
              <ContactButton
                name="GitHub"
                link={project.repository}
                icon={<Github size={18} />}
                showTooltip={false}
              />
            </span>
          )}
          {project.deployment && (
            <span className="scale-[0.8] md:scale-1">
              <ContactButton
                name="Website"
                link={project.deployment}
                icon={<MousePointerClick size={18} />}
                showTooltip={false}
              />
            </span>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        {project.images && (
          <Carousel
            className="w-full"
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent className="w-full">
              {project.images.map((image, index) => (
                <CarouselItem key={index} className="w-full">
                  <div className="relative w-full h-full">
                    <img
                      src={image}
                      alt={`${project.name} screenshot`}
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
        <p className="w-full font-mono text-[10px] md:text-sm">
          {project.description}
        </p>
        <div className="font-mono text-[10px] md:text-sm">
          <h3 className="font-poppins font-semibold text-sm md:text-lg tracking-wider">
            The Challenge
          </h3>
          {Array.isArray(project.challenge) ? (
            <ul className="list-disc pl-5">
              {project.challenge.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="font-mono text-[10px] md:text-sm">
              {project.challenge}
            </p>
          )}
        </div>
        <div className="font-mono text-[10px] md:text-sm">
          <h3 className="font-poppins font-semibold tracking-wider text-sm md:text-lg">
            The Solution
          </h3>
          {Array.isArray(project.solution) ? (
            <ul className="list-disc pl-5">
              {project.solution.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="font-mono text-[10px] md:text-sm">
              {project.solution}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {projectTechnologies.map((technology, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-full bg-white bg-opacity-10 py-2 px-3 hover:bg-transparent transition-all duration-400"
            >
              <span>{technology.icon}</span>
              <span className="text-xs">{technology.title}</span>
            </div>
          ))}
          {projectSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-full bg-white bg-opacity-10 py-2 px-3 hover:bg-transparent transition-all duration-400"
            >
              <span className="scale-[0.6]">{skill.icon}</span>
              <span className="text-xs">{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
