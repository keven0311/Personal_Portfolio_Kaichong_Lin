import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experienceMainDiv dark:bg-black dark:text-white">
      <VerticalTimeline lineColor="grey">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(149, 205, 245)", color: "black" }}
          date="2011-2015"
          dateClassName="date"
          iconStyle={{ background: "black", color: "white" }}
          icon={<SchoolIcon />}
        >
          <div className="vertical-timeline-element-card">
            <h3 className="vertical-timeline-element-title">
              University of Nebraska-Lincoln, Lincoln, Nebraska
            </h3>
            <p>Bechelor of Science in Business Administration</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(149, 205, 245)", color: "black" }}
          date="2016-2018"
          dateClassName="date"
          iconStyle={{ background: "black", color: "white" }}
          icon={<SchoolIcon />}
        >
          <div className="vertical-timeline-element-card">
            <h3 className="vertical-timeline-element-title">
              Doane University, Lincoln, Nebraska
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Master of Arts in Management
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255, 217, 102)", color: "black" }}
          date="2017-2018"
          dateClassName="date"
          iconStyle={{ background: "rgb(255, 217, 102)", color: "#378ac9" }}
          icon={<WorkIcon />}
        >
          <div className="vertical-timeline-element-card">
            <h3 className="vertical-timeline-element-title">
              Area Manager, KAICHENG Co., Ltd
            </h3>
            <p>
              This is an international trading company who buying goods from the
              U.S. and exporting them to China. My job here is to arrange and
              negotiation the products in Nebraska, including releasing funds,
              arrange shipments or transpotations, and negotiation deals.
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255, 217, 102)", color: "black" }}
          date="Sep 2018 - Dec 2018"
          dateClassName="date"
          iconStyle={{ background: "rgb(255, 217, 102)", color: "#378ac9" }}
          icon={<WorkIcon />}
        >
          <div className="vertical-timeline-element-card">
            <h3 className="vertical-timeline-element-title">
              Volunteer, Google Development Launchpad, Hefei, China
            </h3>
            <p>
              Google Development Launchpad is a startup incubator supported by
              Google. Provided hands-on support and guidance to incubator teams
              in the Google Development Launchpad program, contributing to their
              growth and success. Supported incubator teams with some marketing
              strategies and actionable suggestions to refine their business
              plan, utilizing my expertise in business for some of the startup
              groups in the incubator
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(149, 205, 245)", color: "black" }}
          date="Mar 2023 - Jul 2023"
          dateClassName="date"
          iconStyle={{ background: "black", color: "white" }}
          icon={<SchoolIcon />}
        >
          <div className="vertical-timeline-element-card">
            <h3 className="vertical-timeline-element-title">
              Fullstack Academy, New York City
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Certificate, Computer Software Engineering
            </p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
