import React from "react";
import ServicesCard from "./ServicesCard";
import { FaPalette } from "react-icons/fa6";
import { AiFillPicture } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";

const Services = () => {
  return (
    <div className="wrapper py-20 lg:py-28">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">
          My <span className="text-primary">Services</span>
        </h1>
        <p className="text-secondary text-sm">What I Offer</p>
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <ServicesCard
          icon={<AiFillPicture />}
          service="UX UI Designing"
          description="We offer expert UX/UI design services that enhance user experiences
        through research, intuitive layouts, and visually appealing interfaces, ensuring your digital products are engaging, accessible, and
        user-friendly."
        />
        <ServicesCard
          icon={<FaPalette />}
          service="Graphics Designing"
          description="Our graphic design services offer creative solutions tailored to your needs, including branding, logo creation, marketing materials, and digital graphics, all designed to enhance your visual identity and engage your audience."
        />
        <ServicesCard
          icon={<MdVideoLibrary />}
          service="Video Editing"
          description="Our video editing services transform raw footage into engaging content. We specialize in storytelling, color correction, sound design, and visual effects, ensuring your videos captivate and resonate with your audience."
        />
      </div>
    </div>
  );
};

export default Services;
