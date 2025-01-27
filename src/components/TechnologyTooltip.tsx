import React from "react";
import { Technology } from "@/types/types";

type TechnologyTooltipProps = Technology & {
  isActive: boolean;
  onClick: () => void;
};

const TechnologyTooltip: React.FC<TechnologyTooltipProps> = ({
  title,
  progress,
  icon,
  isActive,
  onClick,
}) => {
  return (
    // <Tooltip
    //   content={
    //     <div className="text-white p-3 rounded-lg w-[150px] bg-darkBlueGradient">
    //       <h3 className="mb-2">{title}</h3>
    //       <div className="w-full">
    //         <Progress
    //           value={progress}
    //           size="sm"
    //           color="secondary"
    //           classNames={{
    //             track: "bg-veryDarkBlue",
    //             indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
    //           }}
    //         />
    //       </div>
    //     </div>
    //   }
    //   motionProps={{
    //     variants: {
    //       exit: {
    //         opacity: 0,
    //         transition: {
    //           duration: 0.1,
    //           ease: "easeIn",
    //         },
    //       },
    //       enter: {
    //         opacity: 1,
    //         transition: {
    //           duration: 0.15,
    //           ease: "easeOut",
    //         },
    //       },
    //     },
    //   }}
    // >
    //   <div className="rounded-full bg-darkBlueGradient bg-opacity-10 cursor-pointer p-2 flex items-center justify-center gap-2 hover:rotate-[360deg] hover:translate-y-1 hover:shadow-tooltipTriggerShadow transition-all duration-500 ease-in-out">
    //     <span className="w-8 h-8 flex items-center justify-center text-lg">
    //       {icon}
    //     </span>
    //   </div>
    // </Tooltip>
    <div
      className={`group rounded-full bg-darkBlueGradient bg-opacity-10 cursor-pointer p-2 flex items-center justify-center ${
        isActive ? "gap-2 shadow-tooltipTriggerShadow" : ""
      } transition-all duration-500 ease-in-out w-fit`}
      onClick={onClick}
    >
      <span className="w-12 h-12 flex items-center justify-center text-xl">
        {icon}
      </span>
      <div
        className={`flex flex-col items-start justify-center ${
          isActive ? "pr-4" : ""
        } gap-1`}
      >
        <span
          className={`transition-all duration-500 ${
            isActive ? "text-sm" : "text-[0px]"
          }`}
        >
          {title}
        </span>
        <div
          className={`relative ${
            isActive ? "w-36 h-2" : "w-0 h-0"
          } transition-all duration-500`}
        >
          <span className="absolute top-0 left-0 w-full bg-veryDarkBlue rounded-full transition-all h-full" />
          <span
            className="absolute top-0 left-0 bg-gradient-to-r from-pink-500 to-darkYellow rounded-full transition-all h-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologyTooltip;
