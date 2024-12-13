import { Button } from "@nextui-org/button";
import { useWindowScroll } from "@uidotdev/usehooks";
import { ArrowUp } from "lucide-react";

function ScrollUpButton() {
  const scroll = useWindowScroll();

  const isVisible = (scroll[0].y as number) >= window.innerHeight + 20;

  function scrollUpHandler() {
    document.getElementById("root")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <Button
      onPress={scrollUpHandler}
      isIconOnly
      size="sm"
      radius="full"
      className={`fixed bottom-16 right-5 p-2 bg-white bg-opacity-80 text-gray-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300 ease-in-out`}
    >
      <ArrowUp size={15} />
    </Button>
  );
}

export default ScrollUpButton;
