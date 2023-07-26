import React from "react";
import { motion } from "framer-motion";
import kev from "../images/kev.jpg";

function Home() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="flex flex-col justify-center content-center p-5 gap-4 overflow-hidden"
    >
      <div className=" max-w-md max-h-md flex-auto">
        <img src={kev} alt="kev_image" />
      </div>
      <motion.div
        className=""
        // animate={{ y: 0 }}
        // initial={{ y: "100%" }}
        // transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h1 className=" text-2xl">About me</h1>
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
          includes a Software Engineering Certificate from Fullstack Academy and
          a Master of Arts in Management from Doane University. They bring a
          multicultural perspective, having volunteered as a support member for
          startup incubators during the Google Development Lunchpad program in
          China.
        </motion.h2>
      </motion.div>
      {/* skills: react, redux,express ,etc. */}
      <div></div>
      {/* experience: */}
      <div></div>
      {/* educations: */}
      <div></div>
    </motion.div>
  );
}

export default Home;
