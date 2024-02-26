import { FaArrowUp } from "react-icons/fa6";

import scrollToElement from "../../util/scroll-to-element";
import classes from "./UpButton.module.scss";

function UpButton() {
  function scrollUpHandler() {
    scrollToElement("root");
  }
  return (
    <button className={classes["up-button"]} onClick={scrollUpHandler}>
      <FaArrowUp />
    </button>
  );
}

export default UpButton;
