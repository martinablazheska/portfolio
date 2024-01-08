import skills from "../../../data/skills";

import codeBg from "../../../assets/skills-backdrop.jpg";
import SkillWrapper from "../../UI/SkillWrapper";

import classes from "./Skills.module.scss";

const Skills: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div className={classes.skills} id={id}>
      <h1>My Skills</h1>
      <div className={classes["skill-container-wrapper"]}>
        <div className={classes["skill-container"]}>
          {skills.map((skill) => (
            <SkillWrapper
              key={skill.id}
              title={skill.name}
              imgSrc={skill.imgSrc}
              imgAlt={skill.imgAlt}
              highlightColor={skill.highlightColor}
            >
              {skill.description}
            </SkillWrapper>
          ))}
        </div>
        <img src={codeBg} alt="VS Code Screenshot" className={classes.code} />
      </div>
    </div>
  );
};

export default Skills;
