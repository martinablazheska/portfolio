import classes from "./SkillWrapper.module.scss";

const SkillWrapper: React.FC<{
  children: React.ReactNode;
  title: string;
  imgSrc: string;
  imgAlt: string;
  highlightColor: string;
}> = ({ children, title, imgSrc, imgAlt, highlightColor }) => {
  return (
    <div className={classes["skill-wrapper"]}>
      <div>
        <img src={imgSrc} alt={imgAlt} />
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

export default SkillWrapper;
