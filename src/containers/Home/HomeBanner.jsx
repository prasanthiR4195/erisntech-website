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
    <div className='home_banner_cover'>
        <img src={banner1} className='bannerImg'  alt="banner main" />
        <img src={BannerE1}  className="bannerFloatingE bannerFloatingE1" alt="banner-floating blocks" />
        <img src={BannerE2}  className="bannerFloatingE bannerFloatingE2"  alt="banner-floating blocks"   />
        <div className='circleBlock  '>
          <img src={CircleR} alt="banner circles" className=" circleR" />
          <img src={CircleB} alt="banner circles" className=" CircleB" />
          <img src={CircleY} alt="banner circles" className=" CircleY" />
        </div>
        <img src={pinkC} alt="banner pink circle" className="pinkC  " />
    </div>
  )
}

export default HomeBanner