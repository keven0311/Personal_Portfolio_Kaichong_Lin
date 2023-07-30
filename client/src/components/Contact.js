import React, { useState, useRef } from "react";
import "./Contact.css";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion as m } from "framer-motion";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //emailJS part:
  const formRef = useRef();

  const handlesubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_niiyq1m",
        "template_hrut8w8",
        formRef.current,
        "zKgYyhJBE5SkCdmku"
      )
      .then(
        (result) => {
          console.log(result.text);
          successMessage();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  //------emailJS part end--------

  //email sending success message part:
  const successMessage = () => {
    toast("✅Message Sent! Thank You!🎈");
  };

  return (
    <m.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="flex flex-col justify-center items-center p-20  dark:text-white dark:bg-black"
    >
      <h5>😊Get in touch🎈</h5>
      <h1>CONTACT</h1>
      {/* main body section */}
      <div className="contact-main flex flex-1 gap-7 mt-8 justify-evenly">
        {/* left side part: */}
        <div className="contact-left flex flex-col gap-7">
          <div className="flex flex-row items-center rounded-md gap-3 p-4 bg-gray-600 ">
            <div className="flex items-center p-2 bg-gray-300 text-center rounded-full text-black ">
              <PhoneIphoneIcon />
            </div>
            <div className="dark:text-white ">
              <h4 className="text-white">{"+1 (402)-560-9810"}</h4>
            </div>
          </div>
          <div className="flex flex-row items-center rounded-md gap-3 p-4 bg-gray-600 ">
            <div className="flex items-center p-2 bg-gray-300 text-center rounded-full text-black ">
              <EmailIcon />
            </div>
            <div className="dark:text-white ">
              <h4 className="text-white">{"coco.keven@gmail.com"}</h4>
            </div>
          </div>
          <div className="flex flex-row items-center rounded-md gap-3 p-4 bg-gray-600 ">
            <div className="flex items-center p-2 bg-gray-300 text-center rounded-full text-black ">
              <LocationOnIcon />
            </div>
            <div className="dark:text-white ">
              <h4 className="text-white">{"Lincoln, Nebraska"}</h4>
            </div>
          </div>
        </div>
        {/* ------------left side part end --------------------- */}
        <div className="contact-midline w-px h-auto "></div>
        {/* right side part */}
        <div className="contact-right ">
          <form onSubmit={handlesubmit} ref={formRef}>
            <label>Your name</label>
            <input
              placeholder="name"
              type="text"
              id="name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Your email</label>
            <input
              placeholder="E-mail"
              type="text"
              id="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Your message</label>
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button variant="secondary" type="submit">
              Send
            </Button>
          </form>
        </div>
        {/* ---------------right side part end -------------------- */}
      </div>
      {/* --------main body section end -------------- */}
      <ToastContainer />
    </m.div>
  );
}

export default Contact;
