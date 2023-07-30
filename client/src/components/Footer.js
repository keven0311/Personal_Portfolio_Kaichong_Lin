import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Contact from "./Contact";
import "./Footer.css";

function Footer() {
  return (
    <div className=" w-screen h-20 mt-auto bg-black text-white flex justify-evenly gap-5 p-4  dark:bg-white dark:text-black">
      <p className=" justify-self-start text-lg">
        2023
        <CopyrightIcon />
        All Rights Reserved
      </p>
      <div className=" w-10  flex flex-row gap-3">
        <Link className="text-white" to="https://github.com/keven0311">
          <GitHubIcon className="icons" />
        </Link>
        <Link
          className="text-white"
          to="https://www.linkedin.com/in/kaichonglin/"
        >
          <LinkedInIcon className="icons" />
        </Link>
      </div>
      <div className=" text-lg ">
        <Link className=" no-underline text-white" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Footer;
