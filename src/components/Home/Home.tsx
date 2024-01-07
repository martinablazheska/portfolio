import Introduction from "./Introduction/Introduction";

import classes from "./Home.module.scss";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

function Home() {
  return (
    <div className={classes.home}>
      <Introduction />
      <Skills id="skills" />
      <Projects id="projects" />
    </div>
  );
}

export default Home;
