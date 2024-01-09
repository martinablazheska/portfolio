import upArrow from "../../assets/up-arrow.svg";
import scrollToElement from "../../util/scroll-to-element";
import classes from "./UpButton.module.scss";

function UpButton() {
  function scrollUpHandler() {
    scrollToElement("root");
  }
  return (
    <button className={classes["up-button"]} onClick={scrollUpHandler}>
      <img src={upArrow} alt="Scroll Up" />
    </button>
  );
}

export default UpButton;
