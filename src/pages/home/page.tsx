import React from "react";
import Hero from "@/pages/home/components/hero/Hero";
import Skills from "@/pages/home/components/skills/Skills";
import Technologies from "@/pages/home/components/technologies/Technologies";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Technologies />
    </div>
  );
};

export default HomePage;
