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


import iphone from "../../assets/iosdev/iphone.png";
import ipad from "../../assets/iosdev/ipad.png";
import mac from "../../assets/iosdev/mac.png";
import apple_watch from "../../assets/iosdev/apple_watch.png";
import apple_tv from "../../assets/iosdev/apple_tv.png"; 

const IosDev = () => {
  return (
    <div className="iosDev">
      <MainBanner
        smallhead="Digital Marketing"
        mainHeadB1="Specialist Marketing & SEO Company"
        bannerDesc="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod.Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod"
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerImg={<SpecialistBanner />}
      />

       <LogoDesignBlk2/>
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

      <SwBandSection para="Want to learn more about our iOS App development expertise?"/>
      <WebDevClients/>
      <Faq/>
      <Contact/>
    </div>
  );
};

export default IosDev;
