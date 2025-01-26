import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";

const HomePage: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="w-11/12 min-w-72 max-w-[1200px] p-2 md:p-4 mx-auto flex flex-col gap-20">
        <Hero />
        <Skills />
        <Technologies />
        <Projects />
        <Experience />
        <Testimonials />
        <About />
      </div>
    </>
  );
};

export default HomePage;
