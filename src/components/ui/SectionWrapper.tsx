import React from "react";
import { cn } from "@/lib/utils";

const SectionWrapper: React.FC<{
  children: React.ReactNode;
  id: string;
  className?: string;
}> = ({ children, id, className }) => {
  return (
    <section className={cn("w-full", className)} id={id}>
      {children}
    </section>
  );
};

export default SectionWrapper;
