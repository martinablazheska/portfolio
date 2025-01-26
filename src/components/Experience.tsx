import SectionWrapper from "@/components/ui/SectionWrapper";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { experiences } from "@/store/experiences";

const Experience = () => {
  return (
    <SectionWrapper
      id="Experience"
      className="flex flex-col items-center justify-center"
    >
      <h2 className="text-sm md:text-xl lg:text-2xl font-bold tracking-[0.25em] text-center mb-4 md:mb-10">
        Experience
      </h2>
      <div className="w-full px-4 md:w-2/3">
        <Accordion
          itemClasses={{
            heading: "bg-darkBlueGradient mt-2 rounded-lg w-full",
            content: "bg-darkBlueGradient mt-2 rounded-lg",
            titleWrapper: "flex flex-col justify-start items-start",
            title: "text-sm md:text-md font-bold ",
            subtitle: "text-xs md:text-sm",
            trigger: "flex justify-between w-full px-4",
            indicator: "data-[open=true]:-rotate-90",
          }}
          defaultExpandedKeys={["0"]}
        >
          {experiences.map((experience, index) => (
            <AccordionItem
              key={index}
              title={`${experience.position} @ ${experience.company}`}
              subtitle={`${experience.start} - ${experience.end}`}
              aria-label={`${experience.position} @ ${experience.company}`}
            >
              <div className="flex flex-col w-full gap-3 p-4">
                <div className="font-mono text-xs md:text-sm text-justify border-b-2 border-gray-400 py-2">
                  {experience.description}
                </div>
                <div className="w-full flex gap-2 flex-wrap">
                  {experience.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-pink-500 to-darkYellow text-white text-[10px] md:text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {experience.technologies.map(technology => (
                    <span
                      key={technology}
                      className="px-3 py-1 bg-gradient-to-r from-pink-500 to-darkYellow text-white text-[10px] md:text-xs rounded-full"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
