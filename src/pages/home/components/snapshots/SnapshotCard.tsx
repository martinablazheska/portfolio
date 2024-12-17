import React from "react";
import { Snapshot } from "@/types/types";

const SnapshotCard: React.FC<Snapshot> = ({ title, description, icon }) => {
  return (
    <div className="w-full h-full flex flex-col gap-4 border border-white rounded-lg p-6 bg-cardGradient hover:-translate-y-2 hover:shadow-cardBoxShadow transition-transform duration-500">
      <div className="w-full flex justify-end">{icon}</div>
      <div>
        <h2 className="text-sm md:text-xl font-bold mb-2 tracking-wider">
          {title}
        </h2>
        <p className="w-full font-mono text-xs md:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default SnapshotCard;
