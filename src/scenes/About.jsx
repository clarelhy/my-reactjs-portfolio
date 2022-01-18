/**
 * About.jsx
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file About component for about me information
 */

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap/";
import { GetAboutData } from "../viewmodels";
import { Title, Subtitle } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faHeart,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import profilePicture from "../assets/images/AboutMe.jpg";
import ResumePdf from "../assets/Resume_January_2022.pdf";
import "../styles/About.css";
import "../styles/CtaButton.css";
import { log } from "../Utility";
import { useApplicationContext } from "../contexts/ApplicationContext";

const COMPONENT_NAME = "About";

export const About = () => {
  const applicationContext = useApplicationContext();
  const { isMobile, isDesktop, isTablet } = applicationContext;

  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    GetAboutData().then((data) => {
      log(COMPONENT_NAME, "GetAboutData Response", data);
      setAboutData(data);
    });
  }, []);

  return (
    <section
      id="about"
      className="jumbotron d-flex align-items-center flex-column"
    >
      <Container
        className={
          isMobile || isTablet
            ? "mobile-margin-top"
            : "content-container main-margin-top"
        }
      >
        {/* Section Header */}
        <Fade
          bottom={isMobile}
          left={isDesktop}
          duration={1000}
          delay={300}
          distance="30px"
        >
          <Title title="Who Am I" />
        </Fade>
        <Fade
          bottom={isMobile}
          left={isDesktop}
          duration={1000}
          delay={600}
          distance="30px"
        >
          {/* Profile */}
          <Row>
            <Col md={5}>
              <Fade
                bottom={isMobile}
                left={isDesktop}
                duration={1000}
                delay={800}
                distance="30px"
              >
                <div className="image-div">
                  <Image
                    src={profilePicture}
                    className={
                      isDesktop
                        ? "image-desktop"
                        : isTablet
                        ? "image-tablet"
                        : "image-mobile"
                    }
                    rounded
                  />
                </div>
              </Fade>
            </Col>
            <Col md={7}>
              <div>
                <p>{aboutData.education} </p>
                <p>
                  <span className="label label-default">
                    {aboutData.yoe} years of industry experience,{" "}
                    {aboutData.certifications[0]}
                  </span>
                </p>
                <p>
                  {aboutData.currentWork} @{" "}
                  <a
                    className="a-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={aboutData.currentCompanyWebsite}
                  >
                    {aboutData.currentCompany}

                    <FontAwesomeIcon
                      style={{ paddingLeft: 5 }}
                      icon={faExternalLinkAlt}
                    />
                  </a>
                </p>

                <div style={{ marginBottom: "5%" }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume a-link"
                    href={ResumePdf}
                  >
                    Resume
                    <FontAwesomeIcon
                      style={{ paddingLeft: 5 }}
                      icon={faExternalLinkAlt}
                    />
                  </a>
                </div>
              </div>
              <Row style={{ paddingTop: "1%" }}>
                <Col md={6}>
                  <Subtitle subtitle="My Interests" />
                  {aboutData.interests?.map((item, key) => {
                    return (
                      <p key={key}>
                        <FontAwesomeIcon
                          style={{ paddingRight: 5 }}
                          icon={faHeart}
                        />
                        {item}
                      </p>
                    );
                  })}
                </Col>
                <Col md={6}>
                  <Subtitle subtitle="Tech Interests" />
                  {aboutData.techInterests?.map((item, key) => {
                    return (
                      <p key={key}>
                        <FontAwesomeIcon
                          style={{ paddingRight: 5 }}
                          icon={faStar}
                        />
                        {item}
                      </p>
                    );
                  })}
                </Col>
              </Row>
            </Col>
          </Row>
        </Fade>
      </Container>
      {/* CTA to Stack and Experience */}
      <Fade
        bottom={isMobile}
        left={isDesktop}
        duration={1000}
        delay={600}
        distance="30px"
      >
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
                  <Link to="experience-stack" smooth duration={500}>
                    {"My Journey"}{" "}
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
