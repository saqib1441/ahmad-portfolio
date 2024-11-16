import Link from "next/link";
import React from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import AhmadNadeem from "@/assets/ahmad-nadeem.png";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="bg-primary/10">
      <div className="wrapper lg:flex lg:py-10">
        <div className="flex justify-center items-center lg:items-start flex-col gap-3 py-20 lg:w-[50%]">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-xl lg:text-sm">Hello there, I&#39;m</h1>
            <h1 className="font-bold text-4xl lg:text-5xl text-primary">
              Ahmad Nadeem
            </h1>
          </div>
          <p className="text-secondary font-[500]">Expert UI UX Designer</p>
          <p className="text-center text-secondary lg:text-start">
            As a passionate UI/UX and Graphic Designer, I specialize in creating
            visually compelling and user-centric digital experiences.
          </p>
          <Link href="#contact" className="group">
            <Button>
              Contact Me{" "}
              <span className="group-hover:translate-x-2 transition-all duration-300">
                <FaArrowRight />
              </span>
            </Button>
          </Link>
          <Socials />
        </div>
        <div className="flex justify-center items-center py-20 lg:w-[50%]">
          <div>
            <span className="rounded-main h-80 w-80 block overflow-hidden">
              <Image src={AhmadNadeem} alt="ahmad-nadeem-hero-image" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
