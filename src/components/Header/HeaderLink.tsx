import scrollToElement from "../../util/scroll-to-element";

const HeaderLink: React.FC<{
  title: string;
  linkCollapseHandler: () => void;
}> = ({ title, linkCollapseHandler }) => {
  function clickHandler() {
    scrollToElement(title);
    linkCollapseHandler();
  }
  return <div onClick={clickHandler}>//{title}</div>;
};

export default HeaderLink;
