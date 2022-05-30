import React from 'react'
 
import classes from './DigitalMarketingBanner.css'
import digital from "../../assets/digitalmarketing/digital.png";
import man from "../../assets/digitalmarketing/man.png";
import love from "../../assets/digitalmarketing/love.png";
import like from "../../assets/digitalmarketing/like.png";
import likeR from "../../assets/digitalmarketing/likeR.png";


const DigitalMarketingBanner = () => {
  return (
    <div className="digitalmarketingCover">
       <img src={digital} className="digital1" alt=""/>
       <img src={man} className="digital2" alt=""/>
       <img src={love} className="digital3" alt=""/>
       <img src={like} className="digital4" alt=""/>
       <img src={likeR} className="digital5" alt=""/> 
</div>
  )
}

export default DigitalMarketingBanner