/**
 * Contact.jsx
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file Contact component for contact details
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { GetContact } from "../services/";
import { Title, Subtitle } from "../components";
import { Container, Row, Col } from "react-bootstrap/";
import Fade from "react-reveal/Fade";
import React, { useState, useEffect } from "react";
import "../styles/Contact.css";

export const Contact = () => {
  const [contactData, setContact] = useState({});

  useEffect(() => {
    GetContact().then((response) => {
      console.log(response);
      setContact(response.data);
    });
  }, []);
  return (
    <section id="contact" className="jumbotron">
      <Container>
        {/* Section Header */}
        <Fade bottom duration={1000} delay={300} distance="30px">
          <Title title="Contact Me" />
        </Fade>
        <Row>
          <Col md={12} style={{ justifyContent: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Fade bottom duration={1000} delay={300} distance="30px">
                <div>
                  <a
                    className="a-link-contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={contactData.github}
                  >
                    <FontAwesomeIcon icon={faGithub} className="fa-icon" />
                  </a>
                </div>
              </Fade>

              <Fade bottom duration={1000} delay={700} distance="30px">
                <div>
                  <a
                    className="a-link-contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={contactData.linkedIn}
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
                  </a>
                </div>
              </Fade>

              <Fade bottom duration={1000} delay={1100} distance="30px">
                <div>
                  <a
                    className="a-link-contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={contactData.email}
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
                  </a>
                </div>
              </Fade>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ justifyContent: "center" }}>
            <Subtitle subtitle="// TO-DO: Add Contact Form" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
