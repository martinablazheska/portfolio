import React from "react";
import { Tooltip } from "@nextui-org/tooltip";
import { ContactLink } from "@/types/types";

type ContactButtonProps = ContactLink & {
  showTooltip?: boolean;
};

const ContactButton: React.FC<ContactButtonProps> = ({
  name,
  link,
  download,
  icon,
  showTooltip = true,
}) => {
  return (
    <Tooltip
      content={name}
      motionProps={{
        variants: {
          exit: {
            opacity: 0,
            transition: {
              duration: 0.1,
              ease: "easeIn",
            },
          },
          enter: {
            opacity: 1,
            transition: {
              duration: 0.15,
              ease: "easeOut",
            },
          },
        },
      }}
      classNames={{ content: `text-white text-xs ${!showTooltip && "hidden"}` }}
      offset={-7}
    >
      {download ? (
        <a
          className="rounded-full bg-darkBlueGradient bg-opacity-10 cursor-pointer p-2 flex items-center justify-center gap-2 hover:rotate-[360deg] hover:translate-y-1 hover:shadow-tooltipTriggerShadow transition-all duration-500 ease-in-out"
          href={link}
          download={download}
        >
          <span className="w-8 h-8 flex items-center justify-center text-lg">
            {icon}
          </span>
        </a>
      ) : (
        <a
          className="rounded-full bg-darkBlueGradient bg-opacity-10 cursor-pointer p-2 flex items-center justify-center gap-2 hover:rotate-[360deg] hover:translate-y-1 hover:shadow-tooltipTriggerShadow transition-all duration-500 ease-in-out"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="w-8 h-8 flex items-center justify-center text-lg">
            {icon}
          </span>
        </a>
      )}
    </Tooltip>
  );
};

export default ContactButton;
