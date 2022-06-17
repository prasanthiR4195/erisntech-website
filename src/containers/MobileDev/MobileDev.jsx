import React from "react";
import "./MobileDev.css";
import MainBanner from "../../components/Banner/MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai"; 
import bannerBG from "../../assets/mobiledev/banner-bg.png";
import MobileDevBlk1 from "../../components/MobileDevBlks/MobileDevBlk1"; 
import MobileDevSlider from "../../components/MobileDevBlks/MobileDevSlider";
import MobileDevBanner from "./MobileDevBanner";
import MobileDevBlk2 from "../../components/MobileDevBlks/MobileDevBlk2";
import MobileDevBlk3 from "../../components/MobileDevBlks/MobileDevBlk3";
import WebDevExplained from "../../components/WebDevExplained/WebDevExplained";
import Faq from "../../components/Faq/Faq";
import Contact from "../../components/Contact/Contact";
import mobile_explained from '../../assets/mobiledev/mobile_explained.png'
import './MobileDev.css'

const MobileDev = () => {
  return (
    <div className="mobiledev_cover">
      <MainBanner
        smallhead="Our Sevices"
        mainHeadB1="Mobile Development Services"
        bannerDesc="  Want to build your product with a team that establishes a clear design process, meets deadlines, and delivers a spot-on end result? Turn to ErisnTech's UI and UX services."
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerStyle="banner-content-left"
        bannerImg={<MobileDevBanner/>}
        bannerBG={bannerBG}
      /> 
      <MobileDevBlk1 /> 
      <MobileDevSlider/>
      <MobileDevBlk2/>
      <MobileDevBlk3/> 
      <WebDevExplained
      subhead="Information"
          headB1="What application development is ?" 
          subhead2="What is application development?"
          para="In simple terms, application development is a process of developing software applications. In today’s digital world, it has become essential for businesses to invest in this technology. The entire process involves multiple step like planning, ideating, creating,testing, and launching the application. At Erisn, we follow a structured approach to ensure that the entire development process yields the best results."
          subhead3="Why is application development required?"
          para2="In simple terms, application development is a process of developing software applications."
          img={mobile_explained}
        />
        <Faq/>
        <Contact/>
    </div>
  );
};

export default MobileDev;
