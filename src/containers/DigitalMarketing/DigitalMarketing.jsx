import React from 'react'
import MainBanner from '../../components/Banner/MainBanner'
import DigitalMarketingBanner from './DigitalMarketingBanner'
import './DigitalMarketingBanner.css'
import banner1 from "../../assets/homepage/header-banner.png"; 
import bannerBG from "../../assets/webdev/banner-bg.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import SoftwareDeBlk1 from '../../components/SoftwareDevBlks/SoftwareDeBlk1';
import webDev1 from "../../assets/softwaredev/swDev1.png";
import webDev2 from "../../assets/softwaredev/swDev2.png";
import webDev3 from "../../assets/softwaredev/swDev2.png";
import sw1 from '../../assets/softwaredev/sw1.png'
import MovingBlk from '../../components/SoftwareDevBlks/MovingBlk';
import SoftwareDevMoving from '../../components/SoftwareDevBlks/SoftwareDevMoving';
import SwBandSection from '../../components/SoftwareDevBlks/SwBandSection';
import DigitalWorks from '../../components/DigitalMarketingBlks/DigitalWorks';
import UXBanner from '../Branding/UXBanner';
import color1 from "../../assets/softwaredev/color1.png";
import color2 from "../../assets/softwaredev/color2.png";
import color3 from "../../assets/softwaredev/color3.png";
import color4 from "../../assets/softwaredev/color4.png";
import color5 from "../../assets/softwaredev/color5.png";
import UX1 from '../../assets/DigitalMarketing/UX1.png'
const DigitalMarketing = () => {
  return (
    <div className='digital'>
         <MainBanner
        smallhead="Our Sevices"
        mainHeadB1="Digital Marketing" 
        bannerDesc="Elevate your business with Erisntech, a theme design for all types of modern degital agencies, whatever their expertise might be!"
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        img={banner1}
       
        bannerStyle="banner-content-left"
        bannerBG={bannerBG}
        // bannerImg={<DigitalMarketingBanner/>
        bannerImg={<UXBanner/>} 
      />
      <SoftwareDeBlk1 
      subHead="OUR SERVICES"
      mainHead="Our Digital Marketing Services"
      para="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod"
      leftHead="Search Engine Optimization"
      img1={webDev1}
      rightHead="Social Media Marketing"
      img2={webDev2}
      head1="Local SEO" 
      icon1={UX1}
      icon2={UX1}
      icon3={UX1}
      icon4={UX1}
      icon5={UX1}
      icon6={UX1}
      icon7={UX1}
      icon8={UX1}
      head2="Global SEO" 
      head3="E-Commerce SEO" 
      head4="Keyword Ideas & Strategy / Mobile Responsive SEO" 
      head5="Social Media Management" 
      head6="Bookmarking" 
      head7="Guest Blogging" 
      head8="Online Forums"  
      color1={color1}
      color2={color2}
      color3={color3}
      color4={color4}
      color5={color5}
      />
      <div className="software_innr_wrap">
        <SoftwareDevMoving head="Content Marketing" img={webDev3} />
        <div className="swInnerRight">
          <div className="swInnerRightBlk">
            <MovingBlk icon={sw1}/>
            <h5>Content Optimization</h5> 
          </div>
          <div className="swInnerRightBlk">
            <MovingBlk icon={sw1}/>
            <h5>Content Promotion</h5> 
          </div>
          <div className="swInnerRightBlk">
            <MovingBlk icon={sw1}/>
            <h5>Infographics</h5> 
          </div>
          <div className="swInnerRightBlk">
            <MovingBlk icon={sw1} />
            <h5>Blogs content creation</h5> 
          </div>
        </div>
      </div>
      <SwBandSection para="Want to learn more about our software development expertise?" />
      <DigitalWorks/>




    </div>
  )
}

export default DigitalMarketing