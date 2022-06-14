import React from "react";
import screen from "../../assets/brochure/screen.png";
import screenRight from "../../assets/brochure/screen-right.png";
import cloudLeft from "../../assets/brochure/cloud_left.png";
import cloudTop from "../../assets/brochure/cloud_top.png";

const BrochureBanner = () => {
  return (
    <div className="brochure_banner_cover">
      <img src={screen} className="bannerScreen" alt="" />
      <img src={screenRight} className="screenRight" alt="" />
      <img src={cloudLeft} className="cloudLeft" alt="" />
      <img src={cloudTop} className="cloudTop" alt="" />
    </div>
  );
};

export default BrochureBanner;
