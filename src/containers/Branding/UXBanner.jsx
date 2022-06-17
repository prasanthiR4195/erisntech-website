import React from "react";
import './UXBanner.css'
import UX1 from "../../assets/uiux/UXBanner1.png";
import UX2 from "../../assets/uiux/UXBanner2.png";
import UX3 from "../../assets/uiux/UXBanner3.png";

const UXBanner = () => {
  return (
    <div className="UxBanner_cover">
      <img src={UX1} className="UX1" alt=""/>
      <img src={UX2} className="UX2" alt=""/>
      <img src={UX3} className="UX3" alt=""/>
    </div>
  );
};

export default UXBanner;
