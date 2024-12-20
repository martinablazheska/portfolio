import React from "react";
import Hero from "@/pages/home/components/hero/Hero";
import Skills from "@/pages/home/components/skills/Skills";
import Technologies from "@/pages/home/components/technologies/Technologies";
import Experience from "@/pages/home/components/experience/Experience";
import Testimonials from "@/pages/home/components/testimonials/Testimonials";
import About from "@/pages/home/components/about/About";

const HomePage: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-20 pb-10">
      <Hero />
      <Skills />
      <Technologies />
      <Experience />
      <Testimonials />
      <About />
    </div>
  );
};

export default HomePage;
