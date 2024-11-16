"use client";

import CountUp from "react-countup";

const Count = ({ start, end, text }) => {
  return (
    <div className="flex flex-col items-center bg-primary/10 py-5 rounded-md cursor-pointer hover:scale-105 transition-all duration-300">
      <h1 className="font-semibold text-primary text-2xl">
        <CountUp start={start} end={end} />+
      </h1>
      <p className="text-secondary w-24 text-sm">{text}</p>
    </div>
  );
};

export default Count;
