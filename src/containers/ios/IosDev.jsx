import React from "react";
import MainBanner from "../../components/Banner/MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai";
import SpecialistBanner from "../Specialist/SpecialistBanner";
import LogoDesignBlk2 from "../../components/LogoDesign/LogoDesignBlk2";
import WebDevClients from "../../components/WebDevClients/WebDevClients";
import Faq from "../../components/Faq/Faq";
import Contact from "../../components/Contact/Contact";
import SwBandSection from "../../components/SoftwareDevBlks/SwBandSection";
import HomeTechnologies from "../../components/Hometechnologies/HomeTechnologies";
import './IosDev.css'


import iphone from "../../assets/iosdev/iphone.png";
import ipad from "../../assets/iosdev/ipad.png";
import mac from "../../assets/iosdev/mac.png";
import apple_watch from "../../assets/iosdev/apple_watch.png";
import apple_tv from "../../assets/iosdev/apple_tv.png"; 
import IosDevBlk1 from "../../components/IosDevBlks/IosDevBlk1";
import IosDevBlk2 from "../../components/IosDevBlks/IosDevBlk2";
import AndroidSlider from "../../components/AndroidDevBlks/AndroidSlider";
import IosDevBlk3 from "../../components/IosDevBlks/IosDevBlk3";
import IosDevBanner from "./IosDevBanner";

const IosDev = () => {
  return (
    <div className="iosDev">
      <MainBanner
        smallhead="Mobile App Development"
        mainHeadB1="iOS application Development Service"
        bannerDesc="Develop next-gen iOS apps that are quality tested for perfection with future-forward iOS application development services."
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerImg={<IosDevBanner/>}
      /> 
      <IosDevBlk1/>

       <LogoDesignBlk2/>
       <IosDevBlk2/>
       <HomeTechnologies 
      heading="iOS devices we develop apps For"
       product1={iphone}
       product_name1="iPhone"
       product2={ipad}
       product_name2="iPad"
       product3={mac}
       product_name3="Mac"
       product4={apple_watch}
       product_name4="Apple Watch"
       product5={apple_tv}
       product_name5="Apple TV" 
/>
<IosDevBlk3/>
<AndroidSlider/>
      <SwBandSection para="Want to learn more about our iOS App development expertise?"/>
      <WebDevClients/>
      <Faq/>
      <Contact/>
    </div>
  );
};

export default IosDev;
