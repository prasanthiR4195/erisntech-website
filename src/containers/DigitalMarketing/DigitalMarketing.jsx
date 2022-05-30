import React from 'react'
import MainBanner from '../../components/Banner/MainBanner'
import DigitalMarketingBanner from './DigitalMarketingBanner'
import './DigitalMarketingBanner.css'
import banner1 from "../../assets/homepage/header-banner.png"; 
import bannerBG from "../../assets/digitalmarketing/banner-bg.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import SoftwareDeBlk1 from '../../components/SoftwareDevBlks/SoftwareDeBlk1';
import digital1 from "../../assets/digitalmarketing/digital1.png";
import digital2 from "../../assets/digitalmarketing/digital2.png";
import digital3 from "../../assets/digitalmarketing/digital3.png";
import digital4 from "../../assets/digitalmarketing/digital4.png";
import digital5 from "../../assets/digitalmarketing/digital5.png";
import sw1 from '../../assets/softwaredev/sw1.png'
import MovingBlk from '../../components/SoftwareDevBlks/MovingBlk';
import SoftwareDevMoving from '../../components/SoftwareDevBlks/SoftwareDevMoving';
import SwBandSection from '../../components/SoftwareDevBlks/SwBandSection';
import DigitalWorks from '../../components/DigitalMarketingBlks/DigitalWorks'; 
import blk1 from '../../assets/digitalmarketing/block2.png'
import blk2 from '../../assets/digitalmarketing/block2.png'
import blk3 from '../../assets/digitalmarketing/block3.png'
import blk4 from '../../assets/digitalmarketing/block4.png'
import blk5 from '../../assets/digitalmarketing/block5.png'
import blk6 from '../../assets/digitalmarketing/block6.png'
import blk7 from '../../assets/digitalmarketing/block7.png'
import blk8 from '../../assets/digitalmarketing/block8.png'
import blk9 from '../../assets/digitalmarketing/block9.png'
import blk10 from '../../assets/digitalmarketing/block10.png'
import blk11 from '../../assets/digitalmarketing/block11.png'
import blk12 from '../../assets/digitalmarketing/block12.png'
import blk13 from '../../assets/digitalmarketing/block13.png'
import blk14 from '../../assets/digitalmarketing/block14.png'
import blk15 from '../../assets/digitalmarketing/block15.png'
import blk16 from '../../assets/digitalmarketing/block16.png'
import blk17 from '../../assets/digitalmarketing/block17.png'
import blk18 from '../../assets/digitalmarketing/block18.png'
import blk19 from '../../assets/digitalmarketing/block19.png'
import blk20 from '../../assets/digitalmarketing/block20.png'
import DigitalSlider from '../../components/DigitalMarketingBlks/DigitalSlider';
import WebDevClients from '../../components/WebDevClients/WebDevClients';
import Faq from '../../components/Faq/Faq';
import Contact from '../../components/Contact/Contact';
import WebDevExplained from "../../components/WebDevExplained/WebDevExplained";
import digital_explained from '../../assets/digitalmarketing/digital_explained.png'

const DigitalMarketing = () => {
  const block1 = [
    {
      lefthead  :  "Search Engine Optimization",
      img1 : digital1,
      icon1 : blk1,
      icon2 : blk2,
      icon3 : blk3,
      icon4 : blk4,
      head1 : "Local SEO",
      head2 : "Global SEO",
      head3 : "E-Commerce SEO",
      head4 : "Keyword Ideas & Strategy / Mobile Responsive SEO" ,
      righthead : "Social Media Marketing",
      img2:digital2,
      icon5:blk5,
      icon6:blk6,
      icon7:blk7,
      icon8:blk8,
      head5:"Social Media Management",
      head6:"Bookmarking",
      head7:"Guest Blogging",
      head8:"Online Forums"
    },
    {
      lefthead  :  "Paid Search Marketing",
      img1 : digital3,
      icon1 : blk9,
      icon2 : blk10,
      icon3 : blk11,
      icon4 : blk12,
      head1 : "Social Media Ads",
      head2 : "Display Ads",
      head3 : "SERP Ads ",
      head4 : "Shopping Ads " ,
      righthead : "Email Marketing ",
      img2:digital4,
      icon5:blk13,
      icon6:blk14,
      icon7:blk15,
      icon8:blk16,
      head5:"Informational Email ",
      head6:"Global SEO ",
      head7:"Digital Newsletter ",
      head8:"Transactional Email "
    },
    {
      lefthead  :  "Content Marketing",
      img1 : digital5,
      icon1 : blk17,
      icon2 : blk18,
      icon3 : blk19,
      icon4 : blk20,
      head1 : "Content Optimization",
      head2 : "Content Promotion",
      head3 : "Infographics",
      head4 : "Blogs content creation" ,
    }
  ]  
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
        bannerImg={<DigitalMarketingBanner/>} 
      />
      <SoftwareDeBlk1 
      subHead="OUR SERVICES"
      mainHead="Our Digital Marketing Services"
      para="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod"
      block1={block1}  
     
      /> 
      <SwBandSection para="Want to learn more about our software development expertise?" />
      <DigitalSlider/>
      <DigitalWorks/>
      <WebDevClients/>
      <WebDevExplained 
          headB1="What Should You Know About " 
          headR="Digital Marketing?"
          subhead2="Why does a business need digital marketing?"
          para="There is a digital revolution under effect from the last decade. All small scale and large scale businesses have established an online presence. So it becomes important to have a digital marketing plan to get noticed in this fierce competition. There is a wide range of services that digital marketing agencies offer such as SEO, PPC, content marketing, email marketing, etc."
          subhead3="Which services come under digital marketing?"
          para2="There is a digital revolution under effect from the last decade. All small scale and large scale businesses have established an online presence. So it becomes important to have a digital marketing plan to get noticed in this fierce competition. There is a wide range of services that digital marketing agencies offer such as SEO, PPC, content marketing, email marketing, etc."
          img={digital_explained}
        />
      <Faq/>
      <Contact/>




    </div>
  )
}

export default DigitalMarketing