import React from "react";
import { FaRegCalendar } from "react-icons/fa6";

const ExpContent = ({ name, location, city, date }) => {
  return (
    <div className="flex flex-col gap-1 pl-7 before:w-1 before:h-full before:absolute before:bg-primary relative before:left-0 before:rounded-full after:absolute after:w-5 after:h-5 after:bg-primary after:-left-[8px] after:rounded-full hover:after:bottom-0 after:transition-all after:duration-300 cursor-pointer">
      <h1 className="font-semibold">{name}</h1>
      <p className="text-secondary text-sm">{location}</p>
      <p className="text-secondary text-sm">{city}</p>
      <p className="flex items-center gap-2 text-secondary text-sm">
        <span>
          <FaRegCalendar />
        </span>
        <span>{date}</span>
      </p>
    </div>
  );
};

export default ExpContent;
