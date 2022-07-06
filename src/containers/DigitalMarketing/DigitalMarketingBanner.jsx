import React from "react"; 
import digital from "../../assets/digitalmarketing/digital.png";
import man from "../../assets/digitalmarketing/man.png";
import love from "../../assets/digitalmarketing/love.png";
import like from "../../assets/digitalmarketing/like.png";
import likeR from "../../assets/digitalmarketing/likeR.png";
import "./DigitalMarketingBanner.css";
import bannerBG from "../../assets/digitalmarketing/banner-bg.png";

const DigitalMarketingBanner = () => {
  return (
    <div className="webdev_banner_cover mobiledev_banner_cover" style={{justifyContent:"center"}}>
      <img src={bannerBG} className="banner_background" alt=""  />
      <div className="digitalmarketingCover">
        <img src={digital} className="digital1" alt="" />
        <img src={man} className="digital2" alt="" />
        <img src={love} className="digital3" alt="" />
        <img src={like} className="digital4" alt="" />
        <img src={likeR} className="digital5" alt="" />
      </div>
    </div>
  );
};

export default DigitalMarketingBanner;
