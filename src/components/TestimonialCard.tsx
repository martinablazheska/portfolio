import React from "react";
import { Testimonial } from "@/types/types";

const TestimonialCard: React.FC<Testimonial> = ({
  testimonial,
  name,
  image,
  company,
  title,
}) => {
  return (
    <div className="w-full flex flex-col gap-5 justify-between border border-white rounded-lg p-6 bg-darkBlueGradient hover:-translate-y-2 hover:shadow-cardShadow transition-transform duration-500">
      <div className="font-mono text-xs md:text-sm text-justify">
        {testimonial}
      </div>
      <div className="w-full flex items-center gap-3 text-[10px] md:text-xs tracking-wider">
        <div className="h-9 w-9 relative bg-gradient-to-r from-pink-500 to-darkYellow rounded-full">
          <img
            src={image}
            alt={name}
            className="object-cover h-8 w-8 rounded-full absolute top-0 left-0 translate-x-[2px] translate-y-[2px]"
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <span className="font-semibold">{name}</span>
          <span>
            {title} @ {company}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
