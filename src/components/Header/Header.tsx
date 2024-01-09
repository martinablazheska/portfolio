import { useContext, useEffect, useState } from "react";
import { scrollContext } from "../../context/scroll-context";

import HeaderLink from "./HeaderLink";

import openMenu from "../../assets/hamburger-svgrepo-com.svg";
import closeMenu from "../../assets/close-very-dark-grey.svg";

import classes from "./Header.module.scss";

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { isScrolled, setIsScrolled } = useContext(scrollContext);

  function collapseHandler() {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  }

  function linkCollapseHandler() {
    setIsCollapsed(true);
  }

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = `${classes.header} ${
    isCollapsed ? classes.closed : classes.open
  } ${isScrolled && classes.scrolled}`;

  return (
    <div className={headerClasses} id="header">
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
