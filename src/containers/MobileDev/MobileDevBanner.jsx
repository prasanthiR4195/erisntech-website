import React from 'react'
import sw1 from "../../assets/mobiledev/mobiledev.png";
import './MobileDev.css'

const MobileDevBanner = () => {
  return (
    <div className='mobiledev_banner_cover'>
      <img src={sw1} className="mobiledev" />
  </div> 
  )
}

export default MobileDevBanner