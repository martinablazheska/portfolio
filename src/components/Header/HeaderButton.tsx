import scrollToElement from "../../util/scroll-to-element";
import classes from "./HeaderButton.module.scss";

const HeaderButton: React.FC<{
  title: string;
  scrollTo: string;
  toggleDrawerHandler?: () => void;
}> = ({ title, scrollTo, toggleDrawerHandler }) => {
  function clickHandler() {
    scrollToElement(scrollTo);
    if (toggleDrawerHandler) {
      toggleDrawerHandler();
    }
  }

  return (
    <button className={classes["header-button"]} onClick={clickHandler}>
      <span className={classes["actual-text"]}>&nbsp;{title}&nbsp;</span>
      <span aria-hidden="true" className={classes["hover-text"]}>
        &nbsp;{title}&nbsp;
      </span>
    </button>
  );
};

export default HeaderButton;
