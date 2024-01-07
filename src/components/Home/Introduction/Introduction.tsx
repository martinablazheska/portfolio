import scrollToElement from "../../../util/scroll-to-element";

import downArrow from "../../../assets/down-arrow.png";

import classes from "./Introduction.module.scss";

const Introduction = () => {
  function clickHandler() {
    scrollToElement("skills");
  }

  return (
    <div className={classes.intro} id="home">
      <div className={classes.title}>Martina Blazheska</div>
      <div className={classes.subtitle}>aspiring frontend developer</div>
      <button onClick={clickHandler}>
        <img src={downArrow} alt="Scroll down" />
      </button>
    </div>
  );
};

export default Introduction;
