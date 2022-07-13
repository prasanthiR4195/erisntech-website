import React from 'react'
import bannerBG from "../../assets/ppc/banner-bg.png";
import screen from "../../assets/ppc/ppc_banner.png"; 

const PPCServicesBanner = () => {
  return ( 
    <div className="webdev_banner_cover ">
    <img src={bannerBG} className="banner_background" alt="" />
    <div className='ppc_banner_cover'>
      <img src={screen} className="ppc_screen" alt="" /> 
    </div>
  </div> 
  )
}

export default PPCServicesBanner