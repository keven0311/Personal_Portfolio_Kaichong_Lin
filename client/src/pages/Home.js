import React, { useRef } from "react";
import { motion } from "framer-motion";
import kev_nobg from "../images/kev_nobg.png";
import "./Home.css";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function Home() {
  const targetSection = useRef(null);

  return (
    <div ref={targetSection}>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="page-container flex flex-col justify-items-start gap-4 overflow-hidden dark:bg-black dark:text-white"
      >
        {/* first part div section: */}
        <div className="page-section flex flex-row gap-3 self-center items-center">
          {/* kev image section: */}
          <motion.div
            className=" max-w-md max-h-md flex-1 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            exit={{ opacity: 0 }}
          >
            <img src={kev_nobg} alt="kev_image" className="rounded-lg" />
          </motion.div>
          {/* -----------------kev image section end------------------- */}
          {/* about me text section: */}
          <motion.div
            className="aboutText flex-1 flex flex-col max-w-2xl justify-start gap-3 dark:text-white"
            // animate={{ y: 0 }}
            // initial={{ y: "100%" }}
            // transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h1 className=" text-4xl">
              👋 Hello there, fellow creators! I'm Kaichong Lin, but you can
              call me Keven
            </h1>
            <motion.h2
              className="dark:text-white text-lg"
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              😎—a driven software engineer with a burning passion for building
              things that make a difference. I thrive in the dynamic energy of a
              collaborative team, where we can combine our skills and ideas to
              bring something truly cool to life.
            </motion.h2>
            <motion.h2
              className="dark:text-white text-lg"
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              If you share the same excitement for innovation and creating
              remarkable projects, I'd love to connect! Let's join forces and
              embark on a journey to craft exceptional solutions together. Feel
              free to reach out, and let's build something amazing! 🚀
            </motion.h2>
          </motion.div>
          {/* -------------------about me text section end------------------ */}
        </div>
        {/* ---------------------first part div section end------------------- */}

        {/* skills: react, redux,express ,etc. */}
        <div className="page-section dark:bg-black ">
          <Skills />
        </div>
        {/* professional bios: */}
        <div className="page-section dark:bg-black dark:text-white">
          <h1 className=" text-3xl ">About me</h1>
          <motion.h2
            className="dark:text-white text-lg"
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Kaichong Lin is a dedicated Full Stack Software Engineer with
            expertise in JavaScript, React, React-Redux, React-Native, and
            Express. They have successfully contributed to notable projects like
            "GoVibe," a travel app, "Kevtify," a personal Spotify clone website,
            and "Mass Pro Shops," an e-commerce site. Kaichong's education
            includes a Software Engineering Certificate from Fullstack Academy
            and a Master of Arts in Management from Doane University. They bring
            a multicultural perspective, having volunteered as a support member
            for startup incubators during the Google Development Lunchpad
            program in China.
          </motion.h2>
        </div>
        {/* experience: */}
        <div>
          <Experience />
        </div>
      </motion.div>
      <div className="backToTopButton bg-gray-200 p-3  rounded-xl ">
        <button
          onClick={() =>
            targetSection.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          <ArrowUpwardIcon />
        </button>
      </div>
    </div>
  );
}

export default Home;
