import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      className=" dark:bg-black dark:text-white"
    >
      <p>test projects</p>
    </motion.div>
  );
}

export default Projects;
