import Image from "next/image";
import AhmadNadeem from "@/assets/ahmad-nadeem.png";
import Count from "./CountUp";
import Link from "next/link";
import Button from "./Button";
import { FaDownload } from "react-icons/fa6";

const About = () => {
  return (
    <div className="wrapper py-20 lg:py-28">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">
          <span className="text-primary">About</span> Me
        </h1>
        <p className="text-secondary text-sm">A Short Intro To Myself</p>
      </div>
      <div className="mt-10 flex flex-col gap-10 lg:gap-5 lg:flex-row">
        <div className="flex items-center justify-center lg:w-[50%]">
          <Image
            src={AhmadNadeem}
            alt="ahmad-nadeem-about-img"
            height={500}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center gap-5 lg:w-[50%] lg:items-start">
          <p className="text-secondary text-center lg:text-start">
            ✨Transforming ideas into pixel-perfect design✨. As a passionate
            UI/UX and Graphic Designer, I specialize in creating visually
            compelling and user-centric digital experiences. My expertise lies
            in blending creativity with functionality to deliver designs that
            not only captivate but also enhance usability. With a keen eye for
            detail, I focus on clean, modern aesthetics and seamless user
            journeys, ensuring every project I work on stands out. Proficient in
            Adobe Photoshop, Illustrator , Adobe XD and Figma. Let&#39;s
            collaborate and bring your vision to life. I bring 2 years of
            experience in this field and have completed various projects
            including various Mobile App Design, Websites Design, Poster Design,
            2D Game UI Design, product design and much more.
          </p>
          <div className="grid grid-cols-3 text-center gap-5 w-full">
            <Count start={0} end={2} text="Years experience" />
            <Count start={0} end={100} text="Projects Completed" />
            <Count start={0} end={80} text="Satisfied Clients" />
          </div>
          <Link href="/ahmad.pdf" download={true}>
            <Button>
              Download CV{" "}
              <span>
                <FaDownload />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
