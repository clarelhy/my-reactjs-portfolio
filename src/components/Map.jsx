/**
 * GoogleMap.jsx
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file Map component for contact me component
 */

import React from "react";
import Fade from "react-reveal/Fade";

// const defaultProps = {
//   center: {
//     lat: 1.3457383476708187,
//     lng: 103.93820173943719,
//   },
//   zoom: 11,
// };

export const Map = () => {
  return (
    <Fade bottom duration={1000} delay={400} distance="30px">
      <div style={{ height: "50vh", width: "50%" }}></div>
    </Fade>
  );
};
