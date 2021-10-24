/**
 * Header.jsx
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file Header nav-bar component
 */

import React from "react";
import "../styles/Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export const Header = () => {
  return (
    <header className="sticky-header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Link
                  className="nav-link pointer-cursor"
                  to="home"
                  smooth
                  duration={500}
                >
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  className="nav-link pointer-cursor"
                  to="about"
                  smooth
                  duration={500}
                >
                  About
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  className="nav-link pointer-cursor"
                  to="experience-stack"
                  smooth
                  duration={500}
                >
                  Experience
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  className="nav-link pointer-cursor"
                  to="project-list"
                  smooth
                  duration={500}
                >
                  Project
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  className="nav-link pointer-cursor"
                  to="contact"
                  smooth
                  duration={500}
                >
                  Contact
                </Link>
              </Nav.Item>
            </Nav>
            <span className="copyright-text">
              Clare Lim <FontAwesomeIcon icon={faCopyright} /> 2021
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
