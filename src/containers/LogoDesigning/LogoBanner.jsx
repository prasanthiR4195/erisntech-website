import React from 'react'
import './LogoDesigning.css'
import center from "../../assets/logodesign/center.png";
import left from "../../assets/logodesign/logo_design_style.png";
import right from "../../assets/logodesign/right.png";

const LogoBanner = () => {
  return (
    <div className='logo_banner_cover'>
      <img src={center} className="logo_center" alt=""/>
      <img src={left} className="logo_left" alt=""/>
      <img src={right} className="logo_right" alt=""/>
    </div>
  )
}

export default LogoBanner