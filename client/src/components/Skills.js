import React from "react";
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
  ];

  return (
    <div className="flex flex-col gap-3">
      <h1 className="flex-1 text-2xl ">Technologies:</h1>
      <div className="flex flex-col gap-2 items-start sm:flex-row sm:justify-start mr-5 overflow-hidden dark:text-white dark:bg-black">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex  gap-2 sm:flex-col sm:items-center">
            <img className="skillsIcons" src={skill.logo} alt="JSimage" />
            <span>{skill.name}</span>
          </div>
        ))}
        {/* <div className="flex flex-row gap-2 sm:flex-col sm:items-center">
          <img className="skillsIcons" src={htmllogo} alt="JSimage" />
          <span>HTML</span>
        </div>
        <div className="flex flex-row gap-2 sm:flex-col sm:items-center">
          <img className="skillsIcons" src={csslogo} alt="JSimage" />
          <span>CSS</span>
        </div>
        <div className="flex flex-row gap-2 sm:flex-col sm:items-center">
          <img className="skillsIcons" src={nodejslogo} alt="JSimage" />
          <span>Node.js</span>
        </div>
        <div className="flex flex-row gap-2 sm:flex-col sm:items-center">
          <img className="skillsIcons" src={reactlogo} alt="reactImage" />
          <span>React</span>
        </div>
        <div className="flex flex-row gap-2 sm:flex-col sm:items-center">
          <img className="skillsIcons" src={reduxlogo} alt="JSimage" />
          <span>Redux</span>
        </div>
        <div className="flex flex-row gap-2 sm:flex-col sm:items-center">
          <img className="skillsIcons" src={expresslogo} alt="JSimage" />
          <span>Express</span>
        </div>
        <div className="flex flex-row gap-2 sm:flex-col sm:items-center">
          <img className="skillsIcons" src={postgresSQLlogo} alt="JSimage" />
          <span>PostgresSQL</span>
        </div>
        <div className="flex flex-row gap-2 sm:flex-col sm:items-center">
          <img className="skillsIcons" src={axioslogo} alt="JSimage" />
          <span>Axios</span>
        </div>
        <div className="flex flex-row gap-2 sm:flex-col sm:items-center">
          <img className="skillsIcons" src={reactnativelogo} alt="JSimage" />
          <span>React-Native</span>
        </div>
        <div className="flex flex-row gap-2 sm:flex-col sm:items-center">
          <img className="skillsIcons" src={tailwindcsslogo} alt="JSimage" />
          <span>TailwindCSS</span>
        </div>
        <div className="flex flex-row gap-2 sm:flex-col sm:items-center">
          <img className="skillsIcons" src={graphqllogo} alt="JSimage" />
          <span>GraphQL</span>
        </div>
        <div className="flex flex-row gap-2 sm:flex-col sm:items-center">
          <img className="skillsIcons" src={pythonlogo} alt="JSimage" />
          <span>Python</span>
        </div> */}
      </div>
    </div>
  );
}

export default Skills;
