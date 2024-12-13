import React from "react";
import Hero from "@/pages/home/components/hero/Hero";
import Snapshots from "@/pages/home/components/snapshots/Snapshots";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Snapshots />
    </div>
  );
};

export default HomePage;
