import React from "react";
import sw1 from "../../assets/mobiledev/mobiledev.png";
import "./MobileDev.css";
import bannerBG from "../../assets/mobiledev/banner-bg.png";

const MobileDevBanner = () => {
  return (
    <div className="webdev_banner_cover mobiledev_banner_cover">
      <img src={bannerBG} className="banner_background" />
      <div className="mobiledev_banner">
        <img src={sw1} className="mobiledev" />
      </div>
    </div>
  );
};

export default MobileDevBanner;
