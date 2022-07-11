import React from 'react'
import main from "../../assets/ecommerce/ecommerce_banner.png";
import balloon from "../../assets/ecommerce/ecommerce_balloon.png";
import heart from "../../assets/ecommerce/ecommerce_heart.png";
import like from "../../assets/ecommerce/ecommerce_like.png";
import buynow from "../../assets/ecommerce/ecommerce_buynow.png";   

import bannerBG from "../../assets/digitalmarketing/banner-bg.png";

const EcommerceBanner = () => {
  return (
    <div className="webdev_banner_cover">
    <img src={bannerBG} className="banner_background" alt="" />
    <div className='ecommerce_banner_cover'>
      <img src={main} className="ecommerce_main" alt="" /> 
      <img src={balloon} className="ecommerce_balloon" alt="" /> 
      <img src={heart} className="ecommerce_heart" alt="" /> 
      <img src={like} className="ecommerce_like" alt="" /> 
      <img src={buynow} className="ecommerce_buynow" alt="" />  
      </div>
    </div>
  )
}

export default EcommerceBanner