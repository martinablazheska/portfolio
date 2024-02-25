import { useState } from "react";

import { ClickAwayListener } from "@mui/base";

import HeaderButton from "./HeaderButton";
import { headerLinks } from "../../data/header-links";

import { HiOutlineMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

import classes from "./HeaderDrawer.module.scss";

function HeaderDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDrawerHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <div
        className={
          isOpen ? `${classes.drawer} ${classes.open}` : `${classes.drawer}`
        }
      >
        <button
          onClick={toggleDrawerHandler}
          className={classes["toggle-button"]}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
        {isOpen &&
          headerLinks.map((link) => (
            <HeaderButton
              key={link.id}
              title={link.title}
              scrollTo={link.scrollTo}
              toggleDrawerHandler={toggleDrawerHandler}
            />
          ))}
      </div>
    </ClickAwayListener>
  );
}

export default HeaderDrawer;
