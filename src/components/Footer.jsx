import Link from "next/link";
import React from "react";
import Socials from "./Socials";
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="wrapper py-20 lg:py-28">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-3xl text-white font-semibold">Ahmad Nadeem</h1>
            <p className="text-white">UX UI Designer</p>
            <p className="text-center text-white mt-2 lg:text-start">
              As a passionate UI/UX and Graphic Designer, I specialize in
              creating visually compelling and user-centric digital experiences.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-xl font-semibold text-white">Useful Links</h1>
            <div className="flex flex-col gap-5 items-center text-white">
              <Link href="#home">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#services">Services</Link>
              <Link href="#portfolio">Portfolio</Link>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold text-white">Follow Us</h1>
            <Socials
              styles="lg:flex-col flex-col"
              content={true}
              linkStyle="bg-transparent flex items-center gap-2 py-0 px-0 hover:scale-[1]"
            />
          </div>
        </div>
        <div className="mt-10 text-white flex justify-center">
          <p className="text-center">
            Made with{" "}
            <span className="text-red-600 inline-block">
              <FaHeart />
            </span>{" "}
            by{" "}
            <Link
              href="https://msaqibali.vercel.app"
              className="font-semibold"
              target="_blank"
            >
              M Saqib Ali
            </Link>{" "}
            | &copy; Copyright 2024 |{" "}
            <span className="font-semibold">Ahmad Nadeem</span> | All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
