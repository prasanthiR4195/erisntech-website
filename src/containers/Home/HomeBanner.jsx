import React from 'react' 
import BannerE1 from "../../assets/homepage/bannerE1.png";
import BannerE2 from "../../assets/homepage/bannerE2.png";
import banner1 from "../../assets/homepage/header-banner.png";
import CircleR from "../../assets/homepage/circle-red.png";
import CircleB from "../../assets/homepage/circle-blue.png";
import CircleY from "../../assets/homepage/circle-yellow.png";
import pinkC from "../../assets/homepage/pinkC.png"
import './home.css'


const HomeBanner = () => {
  return (
    <div className='swDevBanner_cover'>
        <img src={banner1} className='bannerImg' />
        <img src={BannerE1} alt="banner" className="bannerFloatingE bannerFloatingE1" />
        <img src={BannerE2} alt="banner" className="bannerFloatingE bannerFloatingE2" />
        <div className='circleBlock  '>
          <img src={CircleR} alt="banner" className=" circleR" />
          <img src={CircleB} alt="banner" className=" CircleB" />
          <img src={CircleY} alt="banner" className=" CircleY" />
        </div>
        <img src={pinkC} alt="banner" className="pinkC  " />
    </div>
  )
}

export default HomeBanner