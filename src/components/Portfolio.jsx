"use client";

import { useState } from "react";
import Portfolio1 from "@/assets/portfolio/web_portfolio_1.png";
import Portfolio2 from "@/assets/portfolio/web_portfolio_2.png";
import Portfolio3 from "@/assets/portfolio/web_portfolio_3.png";
import Portfolio4 from "@/assets/portfolio/web_portfolio_4.png";
import Portfolio5 from "@/assets/portfolio/web_portfolio_5.png";
import Portfolio6 from "@/assets/portfolio/web_portfolio_6.png";
import Image from "next/image";
import Link from "next/link";
import { IoLinkSharp } from "react-icons/io5";

const Portfolio = () => {
  const [portfolioStatus, setPortfolioStatus] = useState("web");

  const data = {
    web: [
      {
        imgSrc: Portfolio1,
      },
      {
        imgSrc: Portfolio2,
      },
      {
        imgSrc: Portfolio3,
      },
      {
        imgSrc: Portfolio4,
      },
      {
        imgSrc: Portfolio5,
      },
      {
        imgSrc: Portfolio6,
      },
    ],
    graphic: [],
    ux: [],
    video: [],
  };

  const StatusHandler = (status) => {
    setPortfolioStatus(status);
  };

  return (
    <main className="py-20 lg:py-28 wrapper">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">
          My <span className="text-primary">Portfolio</span>
        </h1>
        <p className="text-secondary text-sm">My Most Recent Work</p>
      </div>
      <div className="mt-10 flex flex-col gap-5 items-center font-semibold md:flex-row md:justify-center">
        <button
          className={`${portfolioStatus === "web" ? "text-primary" : ""}`}
          onClick={() => StatusHandler("web")}
        >
          WEB DEVELOPMENT
        </button>
        <button
          className={`${portfolioStatus === "graphic" ? "text-primary" : ""}`}
          onClick={() => StatusHandler("graphic")}
        >
          GRAPHIC DESIGNING
        </button>
        <button
          className={`${portfolioStatus === "ux" ? "text-primary" : ""}`}
          onClick={() => StatusHandler("ux")}
        >
          UX/UI DESIGN
        </button>
        <button
          className={`${portfolioStatus === "video" ? "text-primary" : ""}`}
          onClick={() => StatusHandler("video")}
        >
          VIDEO EDITING
        </button>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioStatus === "web" &&
          data.web.map((portfolio, key) => (
            <div
              key={key}
              className="overflow-hidden rounded-2xl relative group cursor-pointer"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-primary/10 hidden opacity-0 group-hover:block group-hover:opacity-100 z-40 transition-all duration-300"></span>
              <Image
                src={portfolio.imgSrc}
                alt="the-ace-solutions-web-portfolio"
                className="h-[300px] group-hover:scale-110 transition-all duration-300 cursor-pointer"
              />
              <div className="w-12 h-12 bg-primary flex items-center justify-center text-white text-xl rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[400px] group-hover:translate-y-[-50%] transition-all duration-300 z-50">
                <Link href="">
                  <IoLinkSharp />
                </Link>
              </div>
            </div>
          ))}
        {portfolioStatus === "graphic" &&
          data.graphic.map((portfolio, key) => (
            <div
              key={key}
              className="overflow-hidden rounded-2xl relative group"
            >
              <Image
                src={portfolio.imgSrc}
                alt="the-ace-solutions-graphic-portfolio"
                className="h-[300px] group-hover:scale-110 transition-all duration-300 cursor-pointer"
              />
              <div className="w-12 h-12 bg-primary flex items-center justify-center text-white text-xl rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[400px] group-hover:translate-y-[-50%] transition-all duration-300">
                <Link href="">
                  <IoLinkSharp />
                </Link>
              </div>
            </div>
          ))}
        {portfolioStatus === "ux" &&
          data.ux.map((portfolio, key) => (
            <div
              key={key}
              className="overflow-hidden rounded-2xl relative group"
            >
              <Image
                src={portfolio.imgSrc}
                alt="the-ace-solutions-ux-portfolio"
                className="h-[300px] group-hover:scale-110 transition-all duration-300 cursor-pointer"
              />
              <div className="w-12 h-12 bg-primary flex items-center justify-center text-white text-xl rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[400px] group-hover:translate-y-[-50%] transition-all duration-300">
                <Link href="">
                  <IoLinkSharp />
                </Link>
              </div>
            </div>
          ))}
        {portfolioStatus === "video" &&
          data.video.map((portfolio, key) => (
            <div
              key={key}
              className="overflow-hidden rounded-2xl relative group"
            >
              <Image
                src={portfolio.imgSrc}
                alt="the-ace-solutions-video-portfolio"
                className="h-[300px] group-hover:scale-110 transition-all duration-300 cursor-pointer"
              />
              <div className="w-12 h-12 bg-primary flex items-center justify-center text-white text-xl rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[400px] group-hover:translate-y-[-50%] transition-all duration-300">
                <Link href="">
                  <IoLinkSharp />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Portfolio;
