import React from 'react'
import './WebDevBanner.css'
import sw1 from "../../assets/softwaredev/sw.png";
import bannerBG from "../../assets/webdev/banner-bg.png";

const WebDevBanner = () => {
  return (
    <div className='webdev_banner_cover'>
           <img src={bannerBG} className="banner_background" />
      <div className='webdev_banner'>
          <img src={sw1} className="sw1" />
      </div>
    </div>
  ) 
}
 
export default WebDevBanner