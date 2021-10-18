/**
 * Footer.jsx
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file Footer component for networking
 */

import React from "react";
import { Container } from "react-bootstrap";
// import { PortfolioConsumer } from "../context/context";
import { GithubButtons } from "../components";

export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

export const Footer = () => {
  // const { footer } = useContext(PortfolioConsumer);
  // const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        Footer
        {/* <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || "https://github.com/cobidev/gatsby-simplefolio"}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || "refresh"} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          � {new Date().getFullYear()} - Template developed by{" "}
          <a
            href="https://github.com/cobidev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jacobo Mart�nez
          </a>
        </p>

         */}
        {isEnabled && <GithubButtons />}
      </Container>
    </footer>
  );
};
