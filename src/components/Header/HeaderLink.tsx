import scrollToElement from "../../util/scroll-to-element";

const HeaderLink: React.FC<{
  title: string;
  scrollTo: string;
  linkCollapseHandler: () => void;
}> = ({ title, scrollTo, linkCollapseHandler }) => {
  function clickHandler() {
    scrollToElement(scrollTo);
    linkCollapseHandler();
  }
  return <div onClick={clickHandler}>//{title}</div>;
};

export default HeaderLink;
