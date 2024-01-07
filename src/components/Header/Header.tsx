import { useState } from "react";

import HeaderLink from "./HeaderLink";

import openMenu from "../../assets/hamburger-svgrepo-com.svg";
import closeMenu from "../../assets/close-very-dark-grey.svg";

import classes from "./Header.module.scss";

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function collapseHandler() {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  }

  function linkCollapseHandler() {
    setIsCollapsed(true);
  }

  return (
    <div
      className={
        isCollapsed
          ? `${classes.header} ${classes.closed}`
          : `${classes.header} ${classes.open}`
      }
    >
      <button className={classes["menu-button"]}>
        <img src={openMenu} onClick={collapseHandler} alt="Open navigation" />
      </button>
      <button className={classes["close-button"]}>
        <img src={closeMenu} alt="Close navigation" onClick={collapseHandler} />
      </button>
      <HeaderLink title="home" linkCollapseHandler={linkCollapseHandler} />
      <HeaderLink title="skills" linkCollapseHandler={linkCollapseHandler} />
      <HeaderLink title="projects" linkCollapseHandler={linkCollapseHandler} />
      <HeaderLink title="about" linkCollapseHandler={linkCollapseHandler} />
      <HeaderLink title="contact" linkCollapseHandler={linkCollapseHandler} />
    </div>
  );
}

export default Header;
