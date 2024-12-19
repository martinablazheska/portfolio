import SectionWrapper from "@/components/ui/SectionWrapper";
import SkillsCard from "@/pages/home/components/skills/SkillsCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { skills } from "@/store/skills";
import Autoplay from "embla-carousel-autoplay";

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
