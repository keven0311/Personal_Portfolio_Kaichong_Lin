import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GoVibeSlides from "../components/GoVibeSlides";
import Slides from "../components/Slides";
import GitHubIcon from "@mui/icons-material/GitHub";

function Projects() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      className="projects-container flex flex-col items-center p-8 gap-7 dark:bg-black dark:text-white"
    >
      {/* first section: */}
      <div className="firstCard w-4/5 flex flex-row gap-3 items-center ">
        <div className="slidesDiv  flex-2 h-auto ">
          {/* <GoVibeSlides /> */}
          <Slides />
        </div>
        <div className="project-right flex-1 flex flex-col gap-2">
          <h1 className="  font-bold">
            <Link
              to="https://github.com/Dynamo-Dark-Aid/GoVibeFE"
              className="project-title text-zinc-500 "
            >
              GoVibe
            </Link>
          </h1>
          <h5 className="  lg:text-xl text-base">
            Go Vibe is a mobile app that combines spontaneity and adventure to
            combat loneliness. Users can explore thrilling activities and forge
            authentic connections with just a tap. Unlock five vibrant vibes
            offering new attractions and restaurants, seamlessly integrated
            through Google Maps, TravelAdvisor, and TrailsAPI. The app's
            'Profile' highlights users' adventurous spirit, while 'Favorites'
            and 'Today's Vibe' optimize organization and planning, fostering a
            vibrant community of intrepid adventurers.
          </h5>
          <Link to="https://github.com/Dynamo-Dark-Aid/GoVibeFE">
            <GitHubIcon className="githubicon  text-zinc-500" />
          </Link>
        </div>
      </div>
      {/* -------------first section end:----------------------------- */}
      {/* second section: */}
      <div className="second-section flex flex-row w-full items-center gap-5">
        <div className="projectCard flex-1">project one </div>
        <div className="projectCard flex-1">project two</div>
      </div>
    </motion.div>
  );
}

export default Projects;
