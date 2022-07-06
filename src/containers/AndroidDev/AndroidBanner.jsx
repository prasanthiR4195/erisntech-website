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
      <img src={bannerBG} className="banner_background" alt="" />
      <div className="androidDev_banner">
        <img src={hand} className="android_hand" alt=""/>
        <img src={mobile} className="android_mobile" alt=""/>
        <img src={left} className="android__left" alt=""/>
        <img src={top} className="android__top" alt=""/>
        <img src={right} className="android__right" alt=""/>
        <img src={block} className="android__block" alt=""/>
        <img src={bottom} className="android__bottom" alt=""/>
      </div>
    </div>
  );
};

export default AndroidBanner;
