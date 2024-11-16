import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { Pagination } from "swiper/modules";

import Portfolio1 from "@/assets/portfolio1.jpg";
import Portfolio2 from "@/assets/portfolio2.png";
import Portfolio3 from "@/assets/portfolio3.PNG";
import Ecommerce from "@/assets/e-commerce.jpg";
import FitnessTracker from "@/assets/fitness-tracker.jpg";
import Food from "@/assets/food.png";
import SocialMedia from "@/assets/social-media.png";

const SwiperComponent = () => {
  const data = [
    {
      imgSrc: Portfolio1,
      title: "Modern Dashboard",
      description:
        "Data analitical dashboard adaptable to all devices, with ui components and animated interactions.",
      link: "https://behance.net/ahgraphics5",
    },
    {
      imgSrc: Portfolio2,
      title: "Amazon Clone",
      description:
        "Above Amazon clone is adaptable to all devices, with ui components and animated interactions.",
      link: "https://behance.net/ahgraphics5",
    },
    {
      imgSrc: Portfolio3,
      title: "Tesla Clone",
      description:
        "Tesla Clone is adaptable to all devices, with ui components and animated interactions.",
      link: "https://behance.net/ahgraphics5",
    },
    {
      imgSrc: Ecommerce,
      title: "E Commerce Re-Design",
      description:
        "Revamped an online store's interface, enhancing user navigation and boosting sales through UX improvements.",
      link: "https://behance.net/ahgraphics5",
    },
    {
      imgSrc: FitnessTracker,
      title: "Fitness Tracker Dashboard",
      description:
        "Created a user-friendly dashboard for tracking workouts, nutrition, and progress toward fitness goals.",
      link: "https://behance.net/ahgraphics5",
    },
    {
      imgSrc: Food,
      title: "Recipe Sharing Platform",
      description:
        "Designed an engaging platform for users to share, discover, and save recipes easily.",
      link: "https://behance.net/ahgraphics5",
    },
    {
      imgSrc: SocialMedia,
      title: "Social Media Management Tool",
      description:
        "Developed a web app for scheduling posts and analyzing engagement metrics across various platforms.",
      link: "https://behance.net/ahgraphics5",
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {data &&
        data.map((value, key) => (
          <SwiperSlide key={key}>
            <div className="cursor-pointer relative h-[430px] lg:w-[80%] lg:mx-auto lg:flex items-center lg:h-[330px] gap-10">
              <div className="flex items-center justify-center lg:w-[500px] lg:h-full">
                <Image
                  src={value.imgSrc}
                  alt={`ahmad-nadeem-portfolio-${key}`}
                  width={320}
                />
              </div>
              <div className="flex flex-col gap-2 mt-4 items-center lg:items-start">
                <h1 className="text-xl font-semibold lg:text-2xl">
                  {value.title}
                </h1>
                <p className="text-secondary text-center lg:text-start">
                  {value.description}
                </p>
                <Link href={value.link} className="group">
                  <Button>
                    Demo{" "}
                    <span className="transition-all duration-300 group-hover:translate-x-1">
                      <FaArrowRight />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperComponent;
