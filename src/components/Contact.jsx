/**
 * Contact.jsx
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file Contact component for contact details
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { GetContact } from "../services/";
import { Title, ContactForm } from "../components";
import { Container, Row, Col, Stack } from "react-bootstrap/";
import Fade from "react-reveal/Fade";
import React, { useState, useEffect } from "react";
import "../styles/Contact.css";
import { log } from "../Utility";
import { useApplicationContext } from "../contexts/ApplicationContext";

const COMPONENT_NAME = "Contact";

export const Contact = () => {
  const applicationContext = useApplicationContext();
  const { isMobile, isDesktop, isTablet } = applicationContext;

  const [contactData, setContact] = useState({});

  useEffect(() => {
    GetContact().then((response) => {
      log(COMPONENT_NAME, "GetContact Response", response);
      setContact(response.data);
    });
  }, []);
  return (
    <section id="contact" className="jumbotron d-flex align-items-center">
      <Container className="content-container">
        {/* Section Header */}
        <Fade
          bottom={isMobile}
          left={isDesktop}
          duration={1000}
          delay={300}
          distance="30px"
        >
          <Title title="Connect With Me" />
        </Fade>

        <Row className="justify-content-md-center my-lg-4">
          <Col
            md={isTablet ? 2 : 1}
            className={isMobile ? "margin-vertical-5 border-top-bottom" : ""}
          >
            <Stack
              direction={isMobile ? "horizontal" : "vertical"}
              gap={5}
              className="place-content-center"
            >
              <Fade
                bottom={isMobile}
                left={isDesktop}
                duration={1000}
                delay={300}
                distance="30px"
              >
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
              <Fade
                bottom={isMobile}
                left={isDesktop}
                duration={1000}
                delay={700}
                distance="30px"
              >
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
              <Fade
                bottom={isMobile}
                left={isDesktop}
                duration={1000}
                delay={1100}
                distance="30px"
              >
                <div>
                  <a
                    className="a-link-contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`mailto:${contactData.email}`}
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
                  </a>
                </div>
              </Fade>
            </Stack>
          </Col>
          <Col md={6}>
            <Stack direction="vertical" gap={5}>
              <Row className="center">
                <Col md={12}>
                  <ContactForm />
                </Col>
              </Row>
            </Stack>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
