import React from "react";
import "./SoftwareDev.css";
import MainBanner from "../../components/Banner/MainBanner";
import banner1 from "../../assets/homepage/header-banner.png";  

import { AiOutlineArrowRight } from "react-icons/ai";
import SoftwareDeBlk1 from "../../components/SoftwareDevBlks/SoftwareDeBlk1";
import SwBandSection from "../../components/SoftwareDevBlks/SwBandSection";
import SoftwareDevBlk2 from "../../components/SoftwareDevBlks/SoftwareDevBlk2";
import SoftwareDevBlk3 from "../../components/SoftwareDevBlks/SoftwareDevBlk3";
import SoftwareDeveloper from "../../components/SoftwareDevBlks/SoftwareDeveloper";
import Contact from "../../components/Contact/Contact";
import SoftwareSolution from "../../components/SoftwareDevBlks/SoftwareSolution";
import CommonSlider from "../../components/Slider/CommonSlider";
import SoftwareDeveloper2 from "../../components/SoftwareDevBlks/SoftwareDeveloper2";
import Faq from "../../components/Faq/Faq";
import SoftwareDevBanner from "./SoftwareDevBanner";

import webDev1 from "../../assets/softwaredev/swDev1.png";
import webDev2 from "../../assets/softwaredev/swDev2.png";
import sw1 from '../../assets/softwaredev/sw1.png'
import sw2 from '../../assets/softwaredev/sw2.png'
import sw3 from '../../assets/softwaredev/sw3.png'
import sw4 from '../../assets/softwaredev/sw4.png'
import sw5 from '../../assets/softwaredev/sw5.png'
import sw6 from '../../assets/softwaredev/sw6.png'
import sw7 from '../../assets/softwaredev/sw7.png' 
import sw8 from '../../assets/softwaredev/sw8.png'

const SoftwareDev = () => {
  const block1 = [
    {
      lefthead  :  "Web Development",
      img1 : webDev1,
      icon1 :  sw1,
      icon2 : sw2,
      icon3 : sw3,
      icon4 : sw3,
      head1 : "Custom Web Development",
      head2 : "Global SEO",
      head3 : "E-Commerce SEO",
      head4 : "Keyword Ideas & Strategy / Mobile Responsive SEO" ,
      para1:"Lorem Ipsum is simply dummy text of he printing and all of it",
      para2:"Lorem Ipsum is simply dummy text of he printing and all of it",
      para3:"Lorem Ipsum is simply dummy text of he printing and all of it",
      para4:"Lorem Ipsum is simply dummy text of he printing and all of it",
      righthead : "Web Development",
      img2:webDev2,
      icon5:sw5,
      icon6:sw6,
      icon7:sw7,
      icon8:sw8,
      head5:"Social Media Management",
      head6:"Bookmarking",
      head7:"Guest Blogging",
      head8:"Online Forums",
      para5:"Lorem Ipsum is simply dummy text of he printing and all of it",
      para6:"Lorem Ipsum is simply dummy text of he printing and all of it",
      para7:"Lorem Ipsum is simply dummy text of he printing and all of it",
      para8:"Lorem Ipsum is simply dummy text of he printing and all of it",
    }
  ] 
  return (
    <div className="software_dev_wrap">
      <MainBanner
        smallhead="Your Search ends here"
        mainHeadB1="Innovative Solutions"
        mainHeadB2="  for your Business"
        bannerDesc="Elevate your business with Erisntech, a theme design for all types of modern degital agencies, whatever their expertise might be!"
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerImg={<SoftwareDevBanner/>}
      /> 
      <SoftwareDeBlk1 
      subHead="OUR SERVICES"
      mainHead="Custom Software Development Services Dedicated Developer with Vast Industry Specific Experience"
      para="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod"
      block1={block1}
      />
      <SwBandSection para="Want to learn more about our software development expertise?" />
      <SoftwareDevBlk2 />
      <SoftwareDevBlk3 />
      <SoftwareDeveloper />
      <SoftwareSolution/>
      <CommonSlider subHead="OUR CLIENTS" mainB1="We deal with the aspects of professional IT Services" />
      <SoftwareDeveloper2/>
      <SwBandSection para="Want to learn more about our software development expertise?" />
      <Faq/>
      <Contact />
    </div>
  );
};

export default SoftwareDev;
