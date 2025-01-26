import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slides from "../components/Slides";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SingleProject from "../components/SingleProject";
import projectsData from "../util/projectsData";

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
        <div className="slidesDiv  flex-1 h-auto flex justify-center">
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
          <div className="flex gap-3">
            <Link to="https://github.com/Dynamo-Dark-Aid/GoVibeFE">
              <GitHubIcon className="githubicon icons text-zinc-500" />
            </Link>
            <Link to="https://www.youtube.com/watch?v=ay9SkdeftR4&ab_channel=Danny">
              <YouTubeIcon className="youtubeicon icons text-zinc-500" />
            </Link>
          </div>
        </div>
      </div>
      {/* -------------first section end:----------------------------- */}
      {/* second section: */}
      <div className="second-section flex flex-col w-full items-center gap-5">
        {Object.keys(projectsData).map((key) => (
          <SingleProject projectData={projectsData[key]}/>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
