import React from 'react'
import center from "../../assets/UXDev/center.png";
import left from "../../assets/UXDev/left.png";
import top from "../../assets/UXDev/top.png";
import ui from "../../assets/UXDev/UI.png";
import ux from "../../assets/UXDev/UX.png";
import right from "../../assets/UXDev/right.png";
import bottom from "../../assets/UXDev/bottom.png";
import './UXDev.css'

const UXDevBanner = () => {
  return (
    <div className='banner_img_cover'>
        <img src={left} className="uxLeft" alt="" />
        <img src={top} className="uxTop" alt="" />
        <img src={ui} className="uxUi" alt="" />
        <img src={center} className="uxCenter" alt="" />
        <img src={ux} className="uxUx"  alt="" />
        <img src={right} className="uxRight" alt="" />
        <img src={bottom} className="uxBottom" alt="" />
    </div>
  )
}

export default UXDevBanner