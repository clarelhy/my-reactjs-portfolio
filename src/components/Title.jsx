/**
 * Title.jsx
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file Title component
 */

import React from "react";
import Fade from "react-reveal/Fade";
import "../styles/Title.css";

export const Title = ({ title }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <h2 className="section-title">{title}</h2>
  </Fade>
);
