import classes from "./SkillContainer.module.scss";

const SkillContainer: React.FC<{
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  highlightColor: string;
}> = ({ children, title, icon, highlightColor }) => {
  return (
    <div className={classes["skill-container"]}>
      <div
        className={classes["skill-header"]}
        style={{ color: `${highlightColor}` }}
      >
        {icon}
        <h2 style={{ textDecorationColor: `${highlightColor}` }}>{title}</h2>
      </div>
      <div className={classes.description}>
        <div>{"<div>"}</div>
        <div>{children}</div>
        <div>{"</div>"}</div>
      </div>
    </div>
  );
};

export default SkillContainer;
