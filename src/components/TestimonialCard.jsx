"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import Review1 from "@/assets/review1.jpg";
import Review2 from "@/assets/review2.jpg";
import Review3 from "@/assets/review3.jpg";
import Review4 from "@/assets/review4.jpg";
import Review5 from "@/assets/review5.jpg";
import Image from "next/image";

const TestimonialCard = () => {
  const data = [
    {
      imgSrc: Review1,
      name: "Sarah Thompson",
      role: "Client",
      review:
        "The UX/UI design transformed our app's usability. Their approach was user-centered, leading to a remarkable increase in engagement. Highly recommend!",
    },
    {
      imgSrc: Review2,
      name: "Jason Lee",
      role: "Client",
      review:
        "Incredible video editing services! They captured our vision perfectly and delivered a polished final product that wowed our audience. Will collaborate again!",
    },
    {
      imgSrc: Review3,
      name: "Emma Robinson",
      role: "Client",
      review:
        "Their graphic designs are stunning and perfectly aligned with our brand. The team's creativity and attention to detail truly set them apart!",
    },
    {
      imgSrc: Review4,
      name: "Tom Harris",
      role: "Client",
      review:
        "The 2D game UI design exceeded our expectations! The visuals are engaging, and player feedback has been overwhelmingly positive. A fantastic partner!",
    },
    {
      imgSrc: Review5,
      name: "Lisa Green",
      role: "Client",
      review:
        "Excellent UX/UI design service! They took our concepts and turned them into an intuitive interface that users love. Professional and timely!",
    },
  ];

  return (
    <Swiper
      slidesPerView={2}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
    >
      {data &&
        data.map((review, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="mt-10 cursor-pointer md:h-[260px] h-[240px] sm:h-[220px]">
                <div className="flex items-center">
                  <div className="h-[80px] w-[80px] flex items-center justify-center">
                    <Image
                      src={review.imgSrc}
                      alt={review.name}
                      className="rounded-full w-[60px] h-[60px]"
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold text-xl">{review.name}</h1>
                    <p className="text-secondary">{review.role}</p>
                  </div>
                </div>
                <p className="text-secondary">{review.review}</p>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default TestimonialCard;
