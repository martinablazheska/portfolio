import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const Hero: React.FC = () => {
  return (
    <SectionWrapper id="Home" className="h-screen">
      <div className="flex flex-col justify-center items-center gap-1 md:gap-4 h-full">
        <h1 className="font-poppins text-xl md:text-5xl font-semibold tracking-widest">
          Martina Blazheska
        </h1>
        <h2 className="font-mono text-sm md:text-xl font-medium tracking-[0.25em] lowercase">
          Software Engineer
        </h2>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
