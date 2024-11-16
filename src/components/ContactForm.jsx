"use client";

import { useState } from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const FormHandler = (e) => {
    e.preventDefault();

    toast.success("Form Submitted");
    emailjs
      .send(
        "service_scciwh8",
        "template_3e6u0w4",
        { name, email, subject, message },
        "6A7fGAgwmwDM9ekKm"
      )
      .then((response) => {
        toast.success("Message sent successfully.");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again later.");
      });
  };

  return (
    <form className="flex flex-col gap-4 items-start" onSubmit={FormHandler}>
      <div className="flex flex-col gap-4 w-full">
        <input
          type="text"
          placeholder="Name"
          className="bg-primary/10 rounded-md px-4 py-2 focus:outline-primary"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-primary/10 rounded-md px-4 py-2 focus:outline-primary"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          className="bg-primary/10 rounded-md px-4 py-2 focus:outline-primary"
          value={subject || ""}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          placeholder="Enter your message"
          rows={8}
          className="resize-none bg-primary/10 rounded-md px-4 py-2 focus:outline-primary"
          value={message || ""}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <Button type="submit">
        Send Message
        <span>
          <FaArrowRight />
        </span>
      </Button>
    </form>
  );
};

export default ContactForm;
