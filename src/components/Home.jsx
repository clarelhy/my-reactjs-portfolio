/**
 * Home.jsx
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file Landing page component
 */

import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { GetAbout } from "../services/";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import "../styles/Home.css";
import "../styles/CtaButton.css";

export const Home = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [aboutData, setAboutData] = useState({
    name: "Clare",
    role: "Full-Stack Developer",
  });

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }

    // Filter fields
    const query = ["name", "role"];

    // Get About data
    GetAbout(query).then((res) => {
      console.log(res);
      setAboutData(res.data);
    });
  }, []);

  return (
    <section id="home" className="jumbotron">
      <Container>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={300}
          distance="30px"
        >
          <h1 className="title">
            Hi, my name is{" "}
            <p className="title-name-label-div">
              <span className="title-name-label">{aboutData.name}</span>
            </p>
            .
            <br />I am a {aboutData.role}.
          </h1>
          <h5 style={{ marginBottom: 20 }}>
            Out of fun, I created this website portfolio using <br />
            ReactJS, Bootstrap, NodeJS, Firebase & FontAwesome. <br />
            <br />
            Enjoy!
          </h5>
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={600}
          distance="30px"
        >
          <p className="cta">
            <span className="cta-btn cta-btn--home">
              <Link to="about" smooth duration={500}>
                {"Let's go!"} <FontAwesomeIcon icon={faArrowAltCircleDown} />
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};
