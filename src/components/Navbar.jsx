"use client";

import Link from "next/link";
import { BsMoonStars } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import { FaArrowUp, FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const navbar = useRef();
  const nav = useRef();
  const scrollBtn = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        nav?.current?.classList.add("fixed");
        scrollBtn?.current?.classList.remove("hidden");
      } else {
        nav?.current?.classList.remove("fixed");
        scrollBtn?.current?.classList.add("hidden");
      }
    });
  }, []);

  const navToggler = () => {
    navbar.current.classList.toggle("translate-x-[100%]");
  };

  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="shadow-main w-full bg-white z-10" ref={nav}>
      <span
        className="fixed right-10 bottom-10 text-white bg-primary p-3 rounded-md text-lg cursor-pointer hover:scale-110 transition-all duration-300 hidden"
        ref={scrollBtn}
        onClick={scrollHandler}
      >
        <FaArrowUp />
      </span>
      <div className="wrapper py-5 flex items-center justify-between">
        <Link href="/">
          <h1 className="font-semibold text-lg md:text-xl">
            <span className="text-primary">Ahmad</span> Nadeem
          </h1>
        </Link>
        <div
          className="fixed lg:static top-0 left-0 bg-primary h-full w-full flex flex-col items-center justify-center gap-6 font-[500] text-white translate-x-[100%] transition-all duration-500 lg:translate-x-0 lg:flex-row lg:w-auto lg:text-black lg:bg-transparent"
          ref={navbar}
        >
          <Link
            href="#home"
            onClick={navToggler}
            className="lg:hover:text-primary transition-all duration-300 relative before:absolute lg:before:bg-primary before:h-[3px] before:bg-white before:w-0 before:-bottom-[2px] before:left-0 before:rounded-full hover:before:w-full before:transition-all before:duration-300"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={navToggler}
            className="lg:hover:text-primary transition-all duration-300 relative before:absolute lg:before:bg-primary before:h-[3px] before:bg-white before:w-0 before:-bottom-[2px] before:left-0 before:rounded-full hover:before:w-full before:transition-all before:duration-300"
          >
            About
          </Link>
          <Link
            href="#skills"
            onClick={navToggler}
            className="lg:hover:text-primary transition-all duration-300 relative before:absolute lg:before:bg-primary before:h-[3px] before:bg-white before:w-0 before:-bottom-[2px] before:left-0 before:rounded-full hover:before:w-full before:transition-all before:duration-300"
          >
            Skills
          </Link>
          <Link
            href="#services"
            onClick={navToggler}
            className="lg:hover:text-primary transition-all duration-300 relative before:absolute lg:before:bg-primary before:h-[3px] before:bg-white before:w-0 before:-bottom-[2px] before:left-0 before:rounded-full hover:before:w-full before:transition-all before:duration-300"
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            onClick={navToggler}
            className="lg:hover:text-primary transition-all duration-300 relative before:absolute lg:before:bg-primary before:h-[3px] before:bg-white before:w-0 before:-bottom-[2px] before:left-0 before:rounded-full hover:before:w-full before:transition-all before:duration-300"
          >
            Portfolio
          </Link>
          <Link
            href="#contact"
            onClick={navToggler}
            className="lg:hover:text-primary transition-all duration-300 relative before:absolute lg:before:bg-primary before:h-[3px] before:bg-white before:w-0 before:-bottom-[2px] before:left-0 before:rounded-full hover:before:w-full before:transition-all before:duration-300"
          >
            Contact
          </Link>
          <span
            className="absolute right-8 text-xl top-4 cursor-pointer lg:hidden"
            onClick={navToggler}
          >
            <FaXmark />
          </span>
        </div>
        <span className="text-lg cursor-pointer lg:hidden" onClick={navToggler}>
          <FaBarsStaggered />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
