import React from 'react'
import sw1 from "../../assets/mobiledev/mobiledev.png";
import './MobileDev.css'

const MobileDevBanner = () => {
  return (
    <div style={{width:"500px",height:"500px"}}>
      <img src={sw1} className="mobiledev" />
  </div>
  )
}

export default MobileDevBanner