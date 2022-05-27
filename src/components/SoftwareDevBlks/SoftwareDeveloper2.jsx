import React from "react";
import SwDeveloperRight from "./SwDeveloperRight";
import "./SoftwareDeveloper2.css";
import developer2 from "../../assets/softwaredev/swImg2.png";

const SoftwareDeveloper2 = () => {
  const pgm = [
    "Hospitality & Travel",
    "Human Capital",
    "Management (HCM)",
    "Meetings & Events",
    "Real Estate",
    "Retail",
    "Supply Chain",
    "Transportation",
  ];
  const fw = ["Agriculture","Aviation","E-Learning","Finance","Casino Games","Gaming","Healthcare"];
  return (
    <div className="swDev2_wrap">
      <SwDeveloperRight
        subhead="Our Developers"
        mainhead="We Have On-Demand Developers"
        para="Our dedicated team of 2,200+ in-house developers has extensive industry-specific experience building custom software solutions and applications."
        pgm={pgm}
        fw={fw}
      />
      <div className="swDev2_right">
          <img src={developer2} />
      </div>
    </div>
  );
};

export default SoftwareDeveloper2;
