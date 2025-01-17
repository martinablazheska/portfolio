import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TechnologyTooltip from "@/components/TechnologyTooltip";
import { technologies } from "@/store/technologies";
import { Technology } from "@/types/types";

const Technologies = () => {
  const [activeTechnology, setActiveTechnology] = useState<Technology>(
    technologies[0]
  );

  return (
    <SectionWrapper id="Technologies" className="flex flex-col items-center">
      <h2 className="text-sm md:text-xl lg:text-2xl font-bold tracking-[0.25em] text-center mb-4 md:mb-10">
        Technologies
      </h2>
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center p-4 gap-2 ">
        <div className="w-full md:w-1/2 max-w-96 h-full flex flex-wrap gap-2 justify-evenly md:justify-start">
          {technologies.map((technology, index) => (
            <TechnologyTooltip
              key={index}
              {...technology}
              onClick={() => setActiveTechnology(technology)}
              isActive={activeTechnology === technology}
            />
          ))}
        </div>
        <div className="w-full md:w-1/2 max-w-96 h-full flex flex-col gap-4 p-4">
          <div className="font-semibold text-lg md:text-2xl tracking-wider border-b-2 border-gray-400">
            {activeTechnology.title}
          </div>
          <p className="font-mono text-xs md:text-sm w-full text-justify">
            {activeTechnology.description}
          </p>
          {activeTechnology.categories && (
            <div className="flex flex-wrap gap-2 mt-2">
              {activeTechnology.categories.map(category => (
                <span
                  key={category}
                  className="text-[10px] md:text-xs px-3 py-2 bg-gradient-to-tr  from-pink-500 to-darkYellow rounded-full lowercase tracking-wider"
                >
                  #{category}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Technologies;
