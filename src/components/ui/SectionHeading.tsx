import React from "react";
import { cn } from "@/lib/utils";

const SectionHeading: React.FC<{ heading: string; className?: string }> = ({
  heading,
  className = "",
}) => {
  return (
    <h2
      className={cn(
        "text-lg md:text-xl lg:text-2xl font-bold tracking-[0.25em] text-center mb-4 md:mb-10",
        className
      )}
    >
      {heading}
    </h2>
  );
};

export default SectionHeading;
