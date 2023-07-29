import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Nav({ theme, handleThemeSwitch }) {
  return (
    <div className="navbar w-screen text-white bg-black dark:bg-white dark:text-black flex justify-between items-center ">
      <div className="linkDiv flex-2 ml-3">
        <Link to="/" className="linkButton pulse-grow  text-2xl ">
          Kaichong
        </Link>
        <Link to="/projects" className="linkButton pulse-grow  text-2xl ">
          Projects
        </Link>
        <Link to="/resume" className="linkButton pulse-grow  text-2xl ">
          Resume
        </Link>
      </div>
      <button
        className="linkButton pulse-grow bg-black-200 p-4 rounded-3xl mr-5  justify-self-end "
        onClick={handleThemeSwitch}
      >
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </button>
    </div>
  );
}

export default Nav;
