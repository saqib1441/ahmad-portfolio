import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="wrapper py-20 lg:py-28">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">
          <span className="text-primary">Contact</span> Me
        </h1>
        <p className="text-secondary text-sm">Let&#39;s Talk</p>
      </div>
      <div className="lg:flex mt-10">
        <div className="lg:w-[50%]">
          <ContactInfo />
        </div>
        <div className="lg:w-[50%] mt-10 lg:mt-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
