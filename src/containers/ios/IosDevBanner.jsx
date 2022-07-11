import React from "react";
import ios_banner from "../../assets/iosdev/ios_banner.png";
import ios_banner_bird from "../../assets/iosdev/ios_banner_bird.png";
import ios_banner_cloud from "../../assets/iosdev/ios_banner_cloud.png"; 

import bannerBG from "../../assets/iosdev/banner-bg.png";
import './IosDev.css'
const IosDevBanner = () => {
  return (
    <div className="webdev_banner_cover">
    <img src={bannerBG} className="banner_background" alt="" />
    <div className="ios_dev_banner_cover">
      <img src={ios_banner} className="iosdev_center" alt="" />
      <img src={ios_banner_bird} className="iosdev_bird" alt="" />
      <img src={ios_banner_cloud} className="iosdev_cloud" alt="" /> 
      <img src={ios_banner_cloud} className="iosdev_cloud_left" alt="" /> 
    </div>
  </div>
  )
}

export default IosDevBanner