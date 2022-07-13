import React from 'react'
import bannerBG from "../../assets/content_marketing/banner-bg.png";
import screen from "../../assets/content_marketing/content_marketing_banner.png"; 

const ContentMarketingBanner = () => {
  return (
    <div className="webdev_banner_cover ">
    <img src={bannerBG} className="banner_background" alt="" />
    <div className='contentmarketing_banner_cover'>
      <img src={screen} className="content_screen" alt="" /> 
    </div>
  </div> 
  )
}

export default ContentMarketingBanner