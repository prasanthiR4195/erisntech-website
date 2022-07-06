import React from 'react'
import screen from "../../assets/specialist/screen.png";
import top1 from "../../assets/specialist/top1.png";
import top2 from "../../assets/specialist/top2.png";
import left1 from "../../assets/specialist/left1.png";
import left2 from "../../assets/specialist/left2.png";
import left3 from "../../assets/specialist/left3.png";
// import lamp from "../../assets/specialist/lamp.png";
import cloud1 from "../../assets/specialist/cloud1.png";
import cloud2 from "../../assets/specialist/cloud2.png";

import bannerBG from "../../assets/specialist/banner-bg.png";

const SpecialistBanner = () => {
  return (
    <div className="webdev_banner_cover">
    <img src={bannerBG} className="banner_background" alt="" />
    <div className='specialistBanner_cover'>
      <img src={screen} className="specialist_screen" alt="" /> 
      <img src={top1} className="specialist_top1" alt="" /> 
      <img src={top2} className="specialist_top2" alt="" /> 
      <img src={left1} className="specialist_left1" alt="" /> 
      <img src={left2} className="specialist_left2" alt="" /> 
      <img src={left3} className="specialist_left3" alt="" /> 
      {/* <img src={lamp} className="specialist_lamp" alt="" />  */}
      <img src={cloud1} className="specialist_cloud1" alt="" /> 
      <img src={cloud2} className="specialist_cloud2" alt="" /> 
      </div>
    </div>
  )
}

export default SpecialistBanner