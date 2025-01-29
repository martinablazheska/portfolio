import React, { useEffect, useState } from "react";
import { useWindowScroll } from "@uidotdev/usehooks";
import useDebounce from "@/hooks/useDebounce";
import NavigationButton from "@/components/NavigationButton";
import { MenuIcon, X as XIcon } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

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
      setIsOpaque(debouncedScrollY > window.innerHeight - 250);
    }
  }, [debouncedScrollY]);

  function scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const offset = id === "Home" ? 0 : 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

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
      <div className="w-full lg:hidden bg-veryDarkBlue px-4 py-2 sticky top-0 z-10">
        <Drawer direction="left">
          <DrawerTrigger>
            <MenuIcon />
          </DrawerTrigger>
          <DrawerContent className="h-screen w-[85vw] rounded-l-lg bg-veryDarkBlue border-none flex flex-col text-white px-4 py-2 overflow-y-auto">
            <DrawerHeader className="w-full flex justify-between px-0">
              <DrawerTitle>Menu</DrawerTitle>
              <DrawerClose>
                <XIcon />
              </DrawerClose>
            </DrawerHeader>
            <DrawerDescription className="flex flex-col flex-grow justify-center gap-2 text-white">
              {navigationItems.map(item => (
                <div
                  key={item}
                  onClick={() => {
                    setTimeout(() => {
                      scrollToElement(item);
                    }, 100); // Small delay to allow drawer to start closing
                  }}
                  className="text-start"
                >
                  <DrawerClose>
                    <span className="font-mono text-sm md:text-lg">
                      {item.toLowerCase()}
                    </span>
                  </DrawerClose>
                </div>
              ))}
            </DrawerDescription>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default Navigation;
