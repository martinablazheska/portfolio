import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/store/testimonials";

const Testimonials = () => {
  return (
    <SectionWrapper id="Testimonials" className="flex flex-col items-center">
      <SectionHeading heading="Testimonials" />
      <div className="w-full md:w-3/4 grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-3 gap-y-3 px-4 justify-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
