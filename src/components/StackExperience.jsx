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
import ProgressBar from "react-bootstrap/ProgressBar";
import "../styles/StackExperience.css";

export const StackExperience = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [experience, setExperience] = useState([]);
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
      const experiences = response.data?.experience || [];
      const sortedExperience = experiences.sort(
        (a, b) => b.yearJoined - a.yearJoined
      );

      response.data.experience = sortedExperience ?? [];
      setExperience(response.data);
    });
    GetTechStack().then((response) => setTechStack(response.data));
  }, []);

  return (
    <section id="experience-stack" className="jumbotron">
      <Container>
        <Fade bottom duration={1000} delay={300} distance="30px">
          <Title title="What I Know" />
        </Fade>
        {/* Tech Skills */}
        <Fade bottom duration={1000} delay={600} distance="30px">
          <Row style={{ justifyContent: "center" }}>
            <Col md={6}>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <Subtitle subtitle="Tech Stack" />
                <ul className="fa-ul" style={{ marginLeft: 0 }}>
                  {techStack?.map((item, key) => {
                    return (
                      <li key={key}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                          }}
                        >
                          <div style={{ width: "40%" }}>
                            <FontAwesomeIcon icon={faCheckSquare} />
                            <label style={{ paddingLeft: 10 }}>
                              {item.tech}
                            </label>
                          </div>
                          <div style={{ width: "30%" }}>
                            <FontAwesomeIcon icon={faCalendar} />
                            <label style={{ paddingLeft: 10 }}>
                              {item.yoe} years
                            </label>
                          </div>
                          <div style={{ width: "30%" }}>
                            <ProgressBar
                              animated
                              variant="success"
                              min={10}
                              max={100}
                              now={item.level}
                              label={`${item.level}%`}
                            />
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </Fade>
            </Col>
          </Row>
        </Fade>

        {/* Tech Experiences */}
        <Fade bottom duration={1000} delay={1000} distance="30px">
          <Row style={{ justifyContent: "center", marginTop: "3%" }}>
            <Col md={6}>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="experience">
                  <div>
                    <Subtitle subtitle="Experience" />
                    <div>
                      {experience?.map((experience, idx) => {
                        return <Experience key={idx} experience={experience} />;
                      })}
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </Fade>

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
      </Container>
    </section>
  );
};
