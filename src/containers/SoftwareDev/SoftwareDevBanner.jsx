import React from 'react'
import classes from  './SoftwareDevBanner.module.css'
import BannerE1 from "../../assets/softwaredev/Block1.png";
import BannerE2 from "../../assets/softwaredev/Block2.png";
import banner1 from "../../assets/softwaredev/screen.png";
import Cloud1 from "../../assets/softwaredev/Cloud1.png";
import Cloud2 from "../../assets/softwaredev/Cloud1.png";
import Cloud3 from "../../assets/softwaredev/Cloud1.png";

const SoftwareDevBanner = () => {
  return (
    <div className={classes.swDevBanner_cover}>
        <img src={banner1} className={classes.banner_img} alt=""/>
        <img src={BannerE1} alt="banner" className={`${classes.bannerFloatingE} ${classes.bannerFloatingE1}`}  />
        
    <img src={BannerE2} alt="banner" className={`${classes.bannerFloatingE} ${classes.bannerFloatingE2}`} />
    <img src={Cloud1} className={classes.cloud1} alt=""/>
    <img src={Cloud2} className={classes.cloud2} alt=""/>
    <img src={Cloud3} className={classes.cloud3} alt=""/>
    </div>
  )
}

export default SoftwareDevBanner