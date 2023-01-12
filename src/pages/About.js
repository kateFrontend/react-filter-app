import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";

function About() {
  return (
    <div className="about-cont">
      <div>
        <h2 >About Us</h2>
      </div>
      <div className="text-wrapper">
      <LoremIpsum p={2} />
      </div>
    </div>
  );
}

export default About;
