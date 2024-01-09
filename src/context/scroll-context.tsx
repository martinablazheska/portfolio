import { createContext, useState } from "react";

type scrollContextType = {
  isScrolled: boolean;
  setIsScrolled: (isScrolled: boolean) => void;
};

export const scrollContext = createContext<scrollContextType>({
  isScrolled: false,
  setIsScrolled: () => {},
});

const ScrollContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const value: scrollContextType = { isScrolled, setIsScrolled };

  return (
    <scrollContext.Provider value={value}>{children}</scrollContext.Provider>
  );
};

export default ScrollContextProvider;
