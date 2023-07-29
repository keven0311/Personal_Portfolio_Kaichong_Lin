import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slides from "../components/Slides";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Button from "react-bootstrap/Button";
import massproshopimage from "../images/mass-pro-shops-home.png";
import kevtify from "../images/kevtify.png";

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
      {/* left part project section: */}
      <div className="second-section flex flex-row w-full items-center gap-5">
        <div className="projectCard flex-1">
          <div className="project-image">
            <img alt="massproshop" src={massproshopimage} />
          </div>
          <div className="project-right flex-1 flex flex-col gap-2">
            <h1 className="  font-bold">
              <Link
                to="https://two303-mass-pro-shops.onrender.com/home"
                className="project-title text-zinc-500 "
              >
                Mass-Pro-Shops
              </Link>
            </h1>
            <h5 className="  lg:text-xl text-base">
              An extensive e-commerce website with user profiles, product
              selection, cart, and Stripe API for checkout. Admins can manage
              products and users.
            </h5>
            <div className="flex gap-3">
              <Link to="https://github.com/mass-pro-shops/grace-shopper">
                <GitHubIcon className="githubicon icons text-zinc-500" />
              </Link>
              <Button
                variant="outline-secondary"
                onClick={() =>
                  (window.location.href =
                    "https://two303-mass-pro-shops.onrender.com/home")
                }
              >
                Visit
              </Button>
            </div>
          </div>
        </div>
        {/*------------------- left side project section end -------------------------*/}
        {/* right side project section */}
        <div className="projectCard flex-1">
          <div className="project-image">
            <img alt="massproshop" src={kevtify} />
          </div>
          <div className="project-right flex-1 flex flex-col gap-2">
            <h1 className="  font-bold">
              <Link
                to="https://spotify-clone-e384a.firebaseapp.com/"
                className="project-title text-zinc-500 "
              >
                Kevtify
              </Link>
            </h1>
            <h5 className="  lg:text-xl text-base">
              Kevtify is an impressive Spotify-clone, meticulously crafted using
              React, Tailwind CSS, and Material UI. Just like its inspiration,
              Spotify, Kevtify offers a list of songs that you can play.
              Leveraging the power of Firebase, the app seamlessly stores its
              extensive collection of songs in Firebase Cloud Storage. Immerse
              yourself in the world of music and enjoy the seamless experience
              of Kevtify, your go-to Spotify-clone deployed effortlessly on
              Firebase.
            </h5>
            <div className="flex gap-3">
              <Link to="https://github.com/keven0311/Spotify-clone.Kaichong/tree/main/spotify-clone">
                <GitHubIcon className="githubicon icons text-zinc-500" />
              </Link>
              <Button
                variant="outline-secondary"
                onClick={() =>
                  (window.location.href =
                    "https://spotify-clone-e384a.firebaseapp.com/")
                }
              >
                Visit
              </Button>
            </div>
          </div>
        </div>
        {/* -------- right side project section end ------------------------ */}
      </div>
    </motion.div>
  );
}

export default Projects;
