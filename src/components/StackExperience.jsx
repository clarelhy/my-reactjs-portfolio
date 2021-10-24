/**
 * StackExperience.jsx
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file Stack and Work Experience component
 */

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap/";
import { GetExperience, GetTechStack } from "../services";
import { Title, Subtitle, Experience } from ".";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendar,
  faArrowAltCircleDown,
} from "@fortawesome/free-regular-svg-icons";
// import ProgressBar from "react-bootstrap/ProgressBar";
import "../styles/StackExperience.css";

export const StackExperience = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [experiences, setExperience] = useState([]);
  const [techStack, setTechStack] = useState([]);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }

    GetExperience().then((response) => {
      const experienceList = response.data || [];
      const sortedExperience = experienceList.sort(
        (a, b) => Number(b.yearJoined) - Number(a.yearJoined)
      );
      setExperience(sortedExperience ?? []);
    });
    GetTechStack().then((response) => setTechStack(response.data));
  }, []);

  return (
    <section
      id="experience-stack"
      className="jumbotron d-flex align-items-center flex-column"
    >
      <Container className="content-container main-margin-top">
        <Fade bottom duration={1000} delay={300} distance="30px">
          <Title title="What I Know" />
        </Fade>
        {/* Tech Skills */}
        <Container className="d-flex flex-row">
          <Row
            style={{
              justifyContent: "center",
              height: "70vh",
            }}
          >
            {/* Tech Stack */}
            <Col md={3}>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={500}
                distance="30px"
              >
                <Subtitle subtitle="Tech Stack" />
                <div className="d-flex flex-row">
                  <div className="container">
                    <ul className="fa-ul" style={{ marginLeft: 0 }}>
                      {techStack?.map((item, key) => {
                        return (
                          <li key={key}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                              }}
                            >
                              <div style={{ width: "60%" }}>
                                <FontAwesomeIcon icon={faCheckSquare} />
                                <label style={{ paddingLeft: 10 }}>
                                  {item.tech}
                                </label>
                              </div>
                              <div style={{ width: "40%" }}>
                                <FontAwesomeIcon icon={faCalendar} />
                                <label style={{ paddingLeft: 10 }}>
                                  {item.yoe} {item.yoe > 1 ? "years" : "year"}
                                </label>
                              </div>
                              {/* <div style={{ width: "30%" }}>
                            <ProgressBar
                              animated
                              variant="success"
                              min={10}
                              max={100}
                              now={item.level}
                              label={`${item.level}%`}
                            />
                          </div> */}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="vr"></div>
                </div>
              </Fade>
            </Col>

            {/* Work Experiences */}
            <Col md={8}>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={900}
                distance="30px"
              >
                <div className="experience">
                  <div>
                    <Subtitle subtitle="Experience" />
                    <div>
                      {experiences?.map((experience, idx) => {
                        return <Experience key={idx} experience={experience} />;
                      })}
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* CTA to Project List */}
      <Fade bottom duration={1000} delay={600} distance="30px">
        <Row>
          <Col style={{ textAlign: "center" }}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={600}
              distance="30px"
            >
              <p className="cta">
                <span className="cta-btn cta-btn--about">
                  <Link to="project-list" smooth duration={500}>
                    {"My Projects"}{" "}
                    <FontAwesomeIcon icon={faArrowAltCircleDown} />
                  </Link>
                </span>
              </p>
            </Fade>
          </Col>
        </Row>
      </Fade>
    </section>
  );
};
