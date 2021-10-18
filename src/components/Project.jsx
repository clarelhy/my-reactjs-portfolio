/**
 * Project.jsx
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file Project component for contact details
 */

import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/Project.css";

export const Project = ({ project }) => {
  return (
    <Card id="project" className="card-div">
      <Card.Body>
        <Card.Title className="card-text">{project.name}</Card.Title>
        <Card.Header className="mb-2 text-muted" style={{ padding: 0 }}>
          {project.customer}, {project.yearStart} - {project.yearEnd}
        </Card.Header>
        <Card.Subtitle className="card-text">
          <span className="card-text-each">{project.devRole} Developer</span>
          <br></br>
          <span className="card-text-each">{project.domain}</span>
          <br></br>
          <span className="card-text-each">{project.tech}</span>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};
