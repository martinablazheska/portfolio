import SectionWrapper from "@/components/ui/SectionWrapper";
import SkillsCard from "@/pages/home/components/skills/SkillsCard";
import {
  Origami,
  MonitorSmartphone,
  Zap,
  ChartScatter,
  MessagesSquare,
  Blocks,
  LayoutList,
  DatabaseZap,
  ShieldCheck,
  FolderGit2,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skill } from "@/types/types";
import Autoplay from "embla-carousel-autoplay";

export const skills: Skill[] = [
  {
    title: "Frontend Architecture",
    description:
      "To ensure the app remains maintainable, and easy to expand as requirements grow, I design project structures focusing on reusable components and neatly organized code.",
    icon: <Origami />,
  },
  {
    title: "UI/UX & Responsiveness",
    description:
      "I turn designs into functional, pixel-perfect interfaces while making sure they work seamlessly across devices. Responsive layouts and smooth user interactions are always a priority.",
    icon: <MonitorSmartphone />,
  },
  {
    title: "React Optimization",
    description:
      "I optimize React apps by applying techniques like code-splitting, memoization, and lazy loading. These steps help improve performance and efficiency, even with complex features and state updates.",
    icon: <Zap />,
  },
  {
    title: "Data Visualization",
    description:
      "Using D3.js, I create interactive charts and visualizations that make data easier to understand. I rely on math and geometry to build visuals that are both accurate and engaging.",
    icon: <ChartScatter />,
  },
  {
    title: "Real-Time Features",
    description:
      "I use WebSockets to enable real-time communication for features like chat, notifications, and collaborative editing. By managing bi-directional connections, I ensure data stays synchronized across users instantly.",
    icon: <MessagesSquare />,
  },
  {
    title: "Backend Development",
    description:
      "I design REST APIs that are secure, efficient, and easy to use. My focus is on clean endpoints and clear structure so the backend integrates smoothly with the frontend and external systems.",
    icon: <Blocks />,
  },
  {
    title: "Strapi Customization",
    description:
      "To fit specific app requirements to fit specific app requirements, I tailor Strapi as a headless CMS, customizing content types, roles, permissions, and integrating GraphQL with Apollo for flexible data management.",
    icon: <LayoutList />,
  },
  {
    title: "Database Design & Management",
    description:
      "I structure and connect data models logically to ensure smooth data flow and easy access. This approach supports the growth and scalability of the application.",
    icon: <DatabaseZap />,
  },
  {
    title: "Authentication & Authorization",
    description:
      "I set up authentication systems and manage role-based access to ensure that users can only access what they’re authorized to. This keeps the application secure and ensures proper user permissions.",
    icon: <ShieldCheck />,
  },
  {
    title: "Git & Version Control",
    description:
      "I use Git to manage code and collaborate effectively in a team. With clear workflows, code reviews, and pull requests, I help maintain consistency and ensure smooth project progress.",
    icon: <FolderGit2 />,
  },
];

const Skills = () => {
  return (
    <SectionWrapper
      id="Skills"
      className="flex flex-col md:justify-evenly items-center"
    >
      <h2 className="text-sm md:text-xl lg:text-2xl font-bold tracking-[0.25em] text-center mb-4 md:mb-10">
        Skills{" "}
      </h2>
      {/* <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 px-4">
        {skills.map((skill, index) => (
          <SkillsCard {...skill} key={index} />
        ))}
      </div> */}
      <Carousel
        className="w-full md:w-[80%] px-2"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {skills.map((skill, index) => (
            <CarouselItem
              key={index}
              className="py-3 md:basis-1/2 lg:basis-1/3"
            >
              <SkillsCard {...skill} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="hidden md:flex bg-transparent text-white border-none hover:bg-opacity-15" />
        <CarouselPrevious className="hidden md:flex bg-transparent text-white border-none hover:bg-opacity-15" />
      </Carousel>
    </SectionWrapper>
  );
};

export default Skills;
