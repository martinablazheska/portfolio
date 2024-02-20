import classes from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <div className={classes.intro} id="home">
      <div className={classes.title}>Martina Blazheska</div>
      <div className={classes.subtitle}>aspiring frontend developer</div>
    </div>
  );
};

export default Introduction;
