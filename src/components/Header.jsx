/**
 * Header.jsx
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file Header nav-bar component
 */

import React from "react";
import "../styles/Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link href="#home">
                  <b>CLARE</b>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projectlist">
                <Nav.Link href="#projectlist">Project</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link href="#contact">Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
