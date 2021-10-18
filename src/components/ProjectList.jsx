/**
 * ProjectList.jsx
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file ProjectList component that generates Project components based on data
 */

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap/";
import { GetProjects } from "../services/";
import { Title, Project } from "../components";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import "../styles/ProjectList.css";

export const ProjectList = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    GetProjects().then((response) => setProjectList(response.data));
  }, []);

  return (
    <section id="project-list" className="jumbotron">
      <Container>
        <Fade bottom duration={1000} delay={300} distance="30px">
          <Title title="Projects" />
        </Fade>

        {/* Project List */}
        <div class="container">
          <div class="row hidden-md-up">
            {projectList.map((project, key) => {
              return (
                <div class="col-md-4" key={key}>
                  <div style={{ display: "grid" }}>
                    <Project project={project} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA to Contact */}
        <Fade bottom duration={1000} delay={600} distance="30px">
          <Row>
            <Col style={{ textAlign: "center" }}>
              <p className="cta">
                <span className="cta-btn cta-btn--about">
                  <Link to="contact" smooth duration={500}>
                    {"Contact Me"}{" "}
                    <FontAwesomeIcon icon={faArrowAltCircleDown} />
                  </Link>
                </span>
              </p>
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
};
