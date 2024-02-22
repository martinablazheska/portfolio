import skills from "../../../data/skills";

import SkillContainer from "./SkillContainer";

import { CgWebsite } from "react-icons/cg";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

import classes from "./Skills.module.scss";

const Skills: React.FC<{ id: string }> = ({ id }) => {
  const icons = [
    <CgWebsite />,
    <SiJavascript />,
    <SiReact />,
    <SiTypescript />,
  ];

  return (
    <div className={classes.skills} id={id}>
      <h1>My Skills</h1>
      <div className={classes["skill-container"]}>
        {skills.map((skill) => (
          <SkillContainer
            key={skill.id}
            title={skill.name}
            icon={icons[skill.id - 1]}
            highlightColor={skill.highlightColor}
          >
            {skill.description}
          </SkillContainer>
        ))}
      </div>
    </div>
  );
};

export default Skills;
