import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const Socials = ({ styles, content, linkStyle }) => {
  return (
    <div
      className={`flex items-center gap-4 text-lg mt-5 text-white ${styles}`}
    >
      <Link
        href="https://www.linkedin.com/in/ahmad-nadeem-432ba02b3"
        className={`bg-primary/90 p-2 rounded-lg hover:bg-primary transition-all duration-300 hover:scale-110 ${linkStyle}`}
        target="_blank"
      >
        {content ? "Linkedin" : ""}
        <FaLinkedinIn />
      </Link>
      <Link
        href="https://www.instagram.com/ahmadcreations12/profilecard/?igsh=MWN0NTN2Zm1sN3pzeQ=="
        className={`bg-primary/90 p-2 rounded-lg hover:bg-primary transition-all duration-300 hover:scale-110 ${linkStyle}`}
        target="_blank"
      >
        {content ? "Instagram" : ""}
        <FaInstagram />
      </Link>
      <Link
        href="https://wa.me/+923253135601"
        className={`bg-primary/90 p-2 rounded-lg hover:bg-primary transition-all duration-300 hover:scale-110 ${linkStyle}`}
        target="_blank"
      >
        {content ? "Whatsapp" : ""}
        <FaWhatsapp />
      </Link>
    </div>
  );
};

export default Socials;
