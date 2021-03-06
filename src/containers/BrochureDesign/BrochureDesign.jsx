import React from "react";
import "./BrochureDesign.css";
import MainBanner from "../../components/Banner/MainBanner";
import BrochureBanner from "./BrochureBanner";
import { AiOutlineArrowRight } from "react-icons/ai";

import BrochureBlk1 from "../../components/BrochureBlks/BrochureBlk1";
import WebDevClients from "../../components/WebDevClients/WebDevClients";
import Faq from "../../components/Faq/Faq";
import Contact from "../../components/Contact/Contact";
import BrochureBlk2 from "../../components/BrochureBlks/BrochureBlk2";
import BrochureBlk3 from "../../components/BrochureBlks/BrochureBlk3";
import SwBandSection from "../../components/SoftwareDevBlks/SwBandSection";
import BrochureSlider from "../../components/BrochureBlks/BrochureSlider";
import brochure1 from "../../assets/brochure/brochure1.png";
import brochure2 from "../../assets/brochure/brochure2.png";
import brochure3 from "../../assets/brochure/brochure3.png";

const BrochureDesign = () => {
  return ( 
    <div className="brochure">
      <MainBanner
        smallhead="UIUX & Branding Design"
        mainHeadB1="Brochure Designing Services"
        bannerDesc=" Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod.Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod"
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerImg={<BrochureBanner />}
      
      />
      <BrochureBlk1/>
      <BrochureBlk2/>
      <BrochureBlk3/>
      <SwBandSection para="Want to learn more about our software development expertise?" />
      <BrochureSlider item1={brochure1} item2={brochure2} item3={brochure3}/>
      <WebDevClients/>
      <Faq/>
      <Contact/>
    </div>
  );
};

export default BrochureDesign;
