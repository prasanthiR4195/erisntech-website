import React from "react";
import "./SoftwareDevBanner.css";
import BannerE1 from "../../assets/softwaredev/Block1.png";
import BannerE2 from "../../assets/softwaredev/Block2.png";
import banner1 from "../../assets/softwaredev/screen.png";
import Cloud1 from "../../assets/softwaredev/Cloud1.png";
import Cloud2 from "../../assets/softwaredev/Cloud1.png";
import Cloud3 from "../../assets/softwaredev/Cloud1.png";
import bannerBG from "../../assets/softwaredev/banner-bg.png";

const SoftwareDevBanner = () => {
  return (
    <div className="webdev_banner_cover">
      <img src={bannerBG} className="banner_background" />
      <div className="swDevBanner_cover">
        <img src={banner1} className="bannerimg" alt="" />
        <img
          src={BannerE1}
          alt="banner"
          className={`${"bannerFloatingE"} ${"bannerFloatingE1"}`}
        />
        <img
          src={BannerE2}
          alt="banner"
          className={`${"bannerFloatingE"} ${"bannerFloatingE2"}`}
        />
        <img src={Cloud1} className={"cloud1"} alt="" />
        <img src={Cloud2} className={"cloud2"} alt="" />
        <img src={Cloud3} className={"cloud3"} alt="" />
      </div>
    </div>
  );
};

export default SoftwareDevBanner;
