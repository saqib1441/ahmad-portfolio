import Link from "next/link";
import React from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";

const ContactCard = () => {
  return (
    <div className="bg-primary sm:bg-transparent py-16">
      <div className="wrapper flex flex-col items-center py-16 gap-3 sm:items-start sm:bg-primary px-10 rounded-xl lg:w-[60%]">
        <h1 className="font-[500] text-white text-2xl text-center">
          Have a new project?
        </h1>
        <p className="text-white text-center sm:text-start">
          Contact me now and get discounts on your Web development projects.
        </p>
        <Link href="#contact" className="group">
          <button className="flex items-center gap-2 font-[500] bg-white/90 rounded-md px-5 py-3 text-primary  transition-all duration-300">
            Contact me{" "}
            <span className="transition-all duration-300 group-hover:translate-x-1">
              <FaArrowRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
