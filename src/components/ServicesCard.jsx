import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ServicesCard = ({ icon, service, description }) => {
  return (
    <div className="bg-white shadow-main py-10 px-5 rounded-md cursor-pointer hover:scale-105 transition-all duration-300">
      <span className="text-primary text-6xl">{icon}</span>
      <h1 className="font-semibold text-xl mt-2">{service}</h1>
      <p className="text-secondary my-3">{description}</p>
      <Link
        href="https://behance.net/ahgraphics5"
        className="flex items-center gap-2 text-primary font-[500] text-sm"
      >
        View More{" "}
        <span>
          <FaArrowRight />
        </span>
      </Link>
    </div>
  );
};

export default ServicesCard;
