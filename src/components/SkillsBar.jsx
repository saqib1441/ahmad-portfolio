import React from "react";

const SkillsBar = ({ skill, percentage, widthPercent }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="font-[500]">{skill}</span>
        <span className="text-secondary">{percentage}</span>
      </div>
      <div
        className={`h-2 bg-primary/50 rounded-full before:absolute before:bg-primary ${widthPercent} before:h-full relative overflow-hidden before:top-0 before:left-0`}
      ></div>
    </div>
  );
};

export default SkillsBar;
