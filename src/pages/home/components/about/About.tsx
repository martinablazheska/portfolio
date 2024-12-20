import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ContactButton from "@/pages/home/components/about/ContactButton";
import { links } from "@/store/links";

const About = () => {
  return (
    <SectionWrapper id="About" className="flex flex-col items-center">
      <SectionHeading heading="About" />
      <div className="w-full md:w-2/3 max-w-[600px] flex flex-col gap-4 px-4">
        <div className="w-full text-center font-mono flex flex-col gap-2 text-xs md:text-sm border-b-2 border-gray-400 pb-4">
          <p>
            Hi, I’m Martina Blazheska, a software engineer who loves solving
            problems and bringing ideas to life. I enjoy breaking challenges
            down, figuring out the best approach, and creating solutions that
            just make sense.
          </p>
          <p>
            For me, it’s all about keeping things clear, precise, and practical
            — whether that’s in how I think, code, or collaborate. I’m always
            curious, always learning, and always looking for better ways to do
            things.
          </p>
          <p>
            When I’m not at my desk, you’ll probably find me outdoors, reading,
            or exploring something new.
          </p>
        </div>
        <div className="w-full flex items-center justify-center gap-3">
          {links.map((link, index) => (
            <ContactButton key={index} {...link} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
