/**
 * Subtitle.jsx
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file Subtitle component
 */

import React from "react";
import Fade from "react-reveal/Fade";
import "../styles/Subtitle.css";

export const Subtitle = ({ subtitle }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <h2 className="section-subtitle">{subtitle}</h2>
  </Fade>
);
