import React from "react";

const SectionWrapper: React.FC<{ children: React.ReactNode; id: string }> = ({
  children,
  id,
}) => {
  return (
    <section className="h-screen w-full" id={id}>
      {children}
    </section>
  );
};

export default SectionWrapper;
