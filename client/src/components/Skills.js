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

function Skills() {
  return (
    <div className="flex flex-col gap-2  sm:flex-row sm:justify-between mr-5 overflow-hidden dark:text-white dark:bg-black">
      <div className="flex flex-row gap-2 sm:flex-col sm:items-center">
        <img className="skillsIcons" src={jslogo} alt="JSimage" />
        <span>JavaScript</span>
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
      </div>
    </div>
  );
}

export default Skills;
