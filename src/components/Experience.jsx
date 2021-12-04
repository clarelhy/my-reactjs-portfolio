/**
 * Experience.jsx
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file Experience component for each work experience
 */

import React from "react";
import Fade from "react-reveal/Fade";
import Badge from "react-bootstrap/Badge";
import "../styles/Experience.css";

export const Experience = ({ experience }) => {
  const yearLeft =
    experience.yearLeft === null ? "Present" : experience.yearLeft;

  return (
    <Fade bottom duration={1000} delay={400} distance="30px">
      <div className="experience-div">
        {experience.present === true ? (
          <div>
            <Badge bg="primary">
              {experience.yearJoined} - {yearLeft}
            </Badge>
            <Badge style={{ marginLeft: 5 }} bg="dark">
              {experience.duration} {experience.duration > 1 ? "years" : "year"}
            </Badge>
          </div>
        ) : (
          <div>
            <Badge bg="secondary">
              {experience.yearJoined} - {yearLeft}
            </Badge>
            <Badge style={{ marginLeft: 5 }} bg="dark">
              {experience.duration} {experience.duration > 1 ? "years" : "year"}
            </Badge>
          </div>
        )}
        <div className="experience-header">
          <b>{experience.role}</b> @ {experience.company}
        </div>
        <span>{experience.scope}</span>
      </div>
    </Fade>
  );
};
