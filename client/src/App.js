import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("prefers-color-scheme:dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`mainDiv ${theme === "dark" ? "appDark" : "appLight"}`}>
      <Nav handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <div className="mainBody">
        <AnimatePresence initial={true} mode={"wait"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
