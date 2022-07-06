import React from "react";
import "./LogoDesigning.css";
import center from "../../assets/logodesign/center.png";
import left from "../../assets/logodesign/logo_design_style.png";
import right from "../../assets/logodesign/right.png";
import bannerBG from "../../assets/logodesign/banner-bg.png";

const LogoBanner = () => {
  return (
    <div className="webdev_banner_cover ">
      <img src={bannerBG} className="banner_background" alt="" />
      <div className="logo_banner_cover" style={{ marginTop: "50px" }}>
        <img src={center} className="logo_center" alt="" />
        <img src={left} className="logo_left" alt="" />
        <img src={right} className="logo_right" alt="" />
      </div>
    </div>
  );
};

export default LogoBanner;
