import React from "react";
import { IoStatsChart } from "react-icons/io5";
import SkillsBar from "./SkillsBar";

const Skills = () => {
  return (
    <div className="wrapper py-20 lg:py-28 lg:w-[60%] lg:mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">
          My <span className="text-primary">Skills</span>
        </h1>
        <p className="text-secondary text-sm">What can I Do For You</p>
      </div>
      <div className="flex items-center gap-4 mt-10">
        <span className="text-4xl text-primary">
          <IoStatsChart />
        </span>
        <div>
          <h1 className="font-semibold text-lg">Professional Skills</h1>
          <p className="text-sm text-secondary">
            Creative experience in various fields
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-7">
        <SkillsBar
          skill="UX UI Design"
          percentage="90%"
          widthPercent="before:w-[90%]"
        />
        <SkillsBar
          skill="Graphic Design"
          percentage="85%"
          widthPercent="before:w-[85%]"
        />
        <SkillsBar
          skill="2D Game UI Design"
          percentage="70%"
          widthPercent="before:w-[70%]"
        />
        <SkillsBar
          skill="Video Editing"
          percentage="65%"
          widthPercent="before:w-[65%]"
        />
      </div>
    </div>
  );
};

export default Skills;
