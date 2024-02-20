import { useWindowSize, useWindowScroll } from "@uidotdev/usehooks";

import Introduction from "./Introduction/Introduction";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import ProjectsScroll from "./Projects/ProjectsScroll";
import UpButton from "../UI/UpButton";
import About from "./About/About";
import Contact from "./Contact/Contact";

import classes from "./Home.module.scss";

function Home() {
  const size = useWindowSize();
  const scroll = useWindowScroll();

  return (
    <div className={classes.home}>
      <Introduction />
      <Skills id="skills" />
      {(size.width as number) > 830 ? (
        <Projects id="projects" />
      ) : (
        <ProjectsScroll id="projects" />
      )}
      <About id="about" />
      <Contact id="contact" />
      {(scroll[0].y as number) >= 25 && <UpButton />}
    </div>
  );
}

export default Home;
