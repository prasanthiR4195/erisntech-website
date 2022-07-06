import React from 'react'
import './HybridApp.css'
import hand from '../../assets/hybridapp/banner_hand.png'
import phone from '../../assets/hybridapp/banner_mobile.png'
import blockOne from '../../assets/hybridapp/banner_block.png' 
import bannerBG from "../../assets/hybridapp/banner-bg.png";


const HybridAppBanner = () => {
  return (
    <div className="webdev_banner_cover">
    <img src={bannerBG} className="banner_background" alt="" />
    <div className='hybridapp_banner_cover'>
      <img src={hand} className="hybrid_banner_hand" alt=""/>
      <img src={phone} className="hybrid_banner_phone" alt=""/>
      <img src={blockOne} className="hybrid_banner_block_left" alt=""/>
      <img src={blockOne} className="hybrid_banner_block_right" alt=""/>
    </div>
    </div>
  )
}

export default HybridAppBanner