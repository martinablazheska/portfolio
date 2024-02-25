import { useWindowSize, useWindowScroll } from "@uidotdev/usehooks";

import Introduction from "./Introduction/Introduction";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import ProjectsCarousel from "./Projects/ProjectsCarousel";
import UpButton from "../UI/UpButton";
import MusicButton from "../UI/MusicButton";
import About from "./About/About";
import Contact from "./Contact/Contact";

import classes from "./Main.module.scss";

function Main() {
  const size = useWindowSize();
  const scroll = useWindowScroll();

  return (
    <div className={classes.main}>
      <Introduction />
      <Skills id="skills" />
      {(size.width as number) > 830 ? (
        <Projects id="projects" />
      ) : (
        <ProjectsCarousel id="projects" />
      )}
      <About id="about" />
      <Contact id="contact" />
      {(scroll[0].y as number) >= 25 && <UpButton />}
      <MusicButton />
    </div>
  );
}

export default Main;
