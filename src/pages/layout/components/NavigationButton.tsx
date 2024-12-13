import React from "react";

const NavigationButton: React.FC<{
  label: string;
  onClick: () => void;
}> = ({ label, onClick }) => {
  return (
    <button
      className="group relative bg-transparent border-none font-mono p-0 cursor-pointer text-[0.8rem] xl:text-[0.9rem] tracking-[4px] text-white font-semibold"
      onClick={onClick}
    >
      <span className="relative block">&nbsp;{label}&nbsp;</span>
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 block text-darkYellow w-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:w-full group-hover:drop-shadow-[0_0_23px_#dda60e]"
      >
        &nbsp;{label}&nbsp;
      </span>
    </button>
  );
};

export default NavigationButton;
