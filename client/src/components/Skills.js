import React from "react";
import "./Skills.css";
import jslogo from "../images/jslogo.png";
import nodejslogo from "../images/nodejslogo.png";
import reactlogo from "../images/reactlogo.png";
import reduxlogo from "../images/reduxlogo.png";
import expresslogo from "../images/expresslogo.png";
import postgresSQLlogo from "../images/postgresSQLlogo.png";
import axioslogo from "../images/axioslogo.png";
import reactnativelogo from "../images/reactnativelogo.png";
import tailwindcsslogo from "../images/tailwindcsslogo.png";
import graphqllogo from "../images/graphqllogo.png";
import pythonlogo from "../images/pythonlogo.png";
import htmllogo from "../images/htmllogo.png";
import csslogo from "../images/csslogo.avif";

function Skills() {
  const skills = [
    { name: "JavaScript", logo: jslogo },
    { name: "HTML", logo: htmllogo },
    { name: "CSS", logo: csslogo },
    { name: "Node.js", logo: nodejslogo },
    { name: "React", logo: reactlogo },
    { name: "Redux", logo: reduxlogo },
    { name: "Express.js", logo: expresslogo },
    { name: "PostgreSQL", logo: postgresSQLlogo },
    { name: "Axios", logo: axioslogo },
    { name: "React-Native", logo: reactnativelogo },
    { name: "TailwindCSS", logo: tailwindcsslogo },
    { name: "GraphQL", logo: graphqllogo },
    { name: "Python", logo: pythonlogo },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h1 className="flex-1 text-2xl ">Technologies:</h1>
      <div className=" skills-list flex gap-2  items-start flex-row  justify-evenly mr-5 overflow-hidden dark:text-white dark:bg-black">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex w-1/3 gap-2 flex-col items-center">
            <img className="skillsIcons" src={skill.logo} alt="JSimage" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
