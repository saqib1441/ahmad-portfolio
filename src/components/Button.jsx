import React from "react";

const Button = ({ children, type = "button" }) => {
  return (
    <button
      type={type}
      className="flex items-center gap-2 font-[500] bg-primary/90 hover:bg-primary rounded-md px-5 py-3 text-white transition-all duration-300"
    >
      {children}
    </button>
  );
};

export default Button;
