import React from 'react'
import './CorporateDesign.css'
import screen from "../../assets/corporate/center.png";
import top from "../../assets/corporate/top.png";
import left from "../../assets/corporate/left.png";
import like from "../../assets/corporate/like.png"; 
import dialoguebox from "../../assets/corporate/dialoguebox.png"; 
import circle from "../../assets/corporate/circle.png"; 

const CorporateBanner = () => {
  return (
    <div className='CorporateBanner_cover'>
      <img src={screen} className="corporate_screen" alt="" />
      <img src={top} className="corporate_top" alt="" />
      <img src={circle} className="corporate_circle" alt="" />
      <img src={left} className="corporate_left" alt="" />
      <img src={like} className="corporate_like" alt="" />
      <img src={dialoguebox} className="corporate_dialog" alt="" />

    </div>
  )
}

export default CorporateBanner