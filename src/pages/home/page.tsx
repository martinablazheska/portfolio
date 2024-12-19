import React from "react";
import Hero from "@/pages/home/components/hero/Hero";
import Skills from "@/pages/home/components/skills/Skills";
import Technologies from "@/pages/home/components/technologies/Technologies";
import Experience from "@/pages/home/components/experience/Experience";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Technologies />
      <Experience />
    </div>
  );
};

export default HomePage;
