import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ScrollUpButton from "@/components/ScrollUpButton";

const HomePage: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-20">
      <Navigation />
      <Hero />
      <Skills />
      <Technologies />
      <Projects />
      <Experience />
      <Testimonials />
      <About />
      <Footer />
      <ScrollUpButton />
    </div>
  );
};

export default HomePage;
