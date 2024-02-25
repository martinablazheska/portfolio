import { useWindowScroll } from "@uidotdev/usehooks";

import HeaderButton from "./HeaderButton";
import { headerLinks } from "../../data/header-links";

import classes from "./Header.module.scss";

function Header() {
  const scroll = useWindowScroll();

  return (
    <div
      className={classes.header}
      id="header"
      style={{
        padding: (scroll[0].y as number) > 32 ? "15px 0" : "30px 0",
        backgroundColor:
          (scroll[0].y as number) > window.innerHeight
            ? "var(--dark-blue)"
            : "transparent",
      }}
    >
      {headerLinks.map((link) => (
        <HeaderButton
          key={link.id}
          title={link.title}
          scrollTo={link.scrollTo}
        />
      ))}
    </div>
  );
}

export default Header;
