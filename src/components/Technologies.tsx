import { useRef, useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import TechnologyTooltip from "@/components/TechnologyTooltip";
import { technologies } from "@/store/technologies";
import { Technology } from "@/types/types";

const Technologies = () => {
  const [activeTechnology, setActiveTechnology] = useState(technologies[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTooltipClick = (newTechnology: Technology) => {
    // Only proceed if clicking a different technology
    if (activeTechnology === newTechnology) {
      return;
    }

    if (!containerRef.current) return;

    // Store positions before the change
    const elements = containerRef.current.children;
    const oldPositions = Array.from(elements).map(el => {
      const rect = el.getBoundingClientRect();
      return {
        left: rect.left,
        top: rect.top,
      };
    });

    // Update state to the new technology
    setActiveTechnology(newTechnology);

    // After state update, apply FLIP
    requestAnimationFrame(() => {
      Array.from(elements).forEach((element, i) => {
        const newRect = element.getBoundingClientRect();
        const oldPosition = oldPositions[i];

        const deltaX = oldPosition.left - newRect.left;
        const deltaY = oldPosition.top - newRect.top;

        // Cast element to HTMLElement to access style property
        const htmlElement = element as HTMLElement;

        // Only animate if the element actually moved
        if (Math.abs(deltaX) > 0.1 || Math.abs(deltaY) > 0.1) {
          htmlElement.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
          htmlElement.style.transition = "none";

          requestAnimationFrame(() => {
            htmlElement.style.transition = "transform 500ms ease-out";
            htmlElement.style.transform = "translate(0, 0)";
          });
        }
      });
    });
  };

  return (
    <SectionWrapper id="Technologies" className="flex flex-col items-center">
      <SectionHeading heading="Technologies" />
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center p-4 gap-2 ">
        <div
          ref={containerRef}
          className="w-full md:w-1/2 max-w-96 h-full flex flex-wrap gap-2 justify-evenly md:justify-start"
        >
          {technologies.map((technology, index) => (
            <div
              key={index}
              className="will-change-transform"
              style={{
                transition: "transform 300ms ease-out",
              }}
            >
              <TechnologyTooltip
                {...technology}
                onClick={() => handleTooltipClick(technology)}
                isActive={activeTechnology === technology}
              />
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 max-w-96 h-full flex flex-col gap-4 p-4">
          <div className="font-semibold text-base tracking-widest md:text-2xl border-b-2 border-gray-400">
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
