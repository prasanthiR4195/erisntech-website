import React from "react";
import hand from "../../assets/androiddev/hand.png";
import mobile from "../../assets/androiddev/main.png";
import left from "../../assets/androiddev/left.png";
import top from "../../assets/androiddev/top.png";
import right from "../../assets/androiddev/right.png";
import block from "../../assets/androiddev/block.png";
import bottom from "../../assets/androiddev/bottom.png";
import bannerBG from "../../assets/androiddev/banner-bg.png";

import "./Android.css";

const AndroidBanner = () => {
  return (
    <div className="webdev_banner_cover  mobiledev_banner_cover">
      <img src={bannerBG} className="banner_background" />
      <div className="androidDev_banner">
        <img src={hand} className="android_hand" />
        <img src={mobile} className="android_mobile" />
        <img src={left} className="android__left" />
        <img src={top} className="android__top" />
        <img src={right} className="android__right" />
        <img src={block} className="android__block" />
        <img src={bottom} className="android__bottom" />
      </div>
    </div>
  );
};

export default AndroidBanner;
