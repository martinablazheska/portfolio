import React, { useEffect, useState } from "react";
import { useWindowScroll } from "@uidotdev/usehooks";
import useDebounce from "@/hooks/useDebounce";
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import NavigationButton from "@/components/NavigationButton";
import { MenuIcon, X as XIcon } from "lucide-react";

const navigationItems = [
  "Home",
  "Skills",
  "Technologies",
  "Projects",
  "Experience",
  "Testimonials",
  "About",
];

const Navigation: React.FC = () => {
  const [isOpaque, setIsOpaque] = useState(false);

  const [{ y }] = useWindowScroll();
  const debouncedScrollY = useDebounce(y, 100);

  useEffect(() => {
    if (debouncedScrollY !== null) {
      setIsOpaque(debouncedScrollY > window.innerHeight - 50);
    }
  }, [debouncedScrollY]);

  function scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const offset = id === "Home" ? 0 : 100;
      const elementPosition = element.offsetTop;
      const scrollPosition = elementPosition - offset;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  }

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div
        className={`w-full hidden lg:flex justify-center items-center gap-2 xl:gap-4 sticky top-0 z-10
      transition-colors duration-200 ease-out mt-4 py-4 ${
        isOpaque ? "bg-veryDarkBlue" : "bg-transparent"
      }`}
      >
        {navigationItems.map(item => (
          <NavigationButton
            key={item}
            label={item.toLowerCase()}
            onClick={() => {
              scrollToElement(item);
            }}
          />
        ))}
      </div>
      <div className="lg:hidden flex sticky top-0 z-10 p-4 items-center">
        <Button isIconOnly onPress={onOpen}>
          <MenuIcon />
        </Button>
        <Drawer
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="left"
          backdrop="blur"
        >
          <DrawerContent>
            {onClose => (
              <>
                <DrawerHeader className="flex w-full justify-end items-center">
                  <XIcon onClick={onClose} />
                </DrawerHeader>
                <DrawerBody>
                  {navigationItems.map(item => (
                    <Button
                      key={item}
                      onPress={() => {
                        scrollToElement(item);
                        onClose();
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </DrawerBody>
                <DrawerFooter></DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default Navigation;
