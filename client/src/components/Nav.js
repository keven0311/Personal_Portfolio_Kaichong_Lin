import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ theme, handleThemeSwitch }) {
  return (
    <nav className="w-screen text-white bg-black dark:bg-white dark:text-black flex justify-between items-center ">
      <div className="linkDiv flex-2 ml-3">
        <Link to="/" className="button pulse-grow  text-2xl ">
          Home
        </Link>
        <Link to="/projects" className="button pulse-grow  text-2xl ">
          Projects
        </Link>
        <Link to="/resume" className="button pulse-grow  text-2xl ">
          Resume
        </Link>
      </div>
      <button
        className="modeButton bg-black-200 p-4 rounded-3xl mr-5  justify-self-end "
        onClick={handleThemeSwitch}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}

export default Nav;
