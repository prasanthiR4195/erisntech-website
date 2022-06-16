import React from "react";
import "./BrochureDesign.css";
import MainBanner from "../../components/Banner/MainBanner";
import BrochureBanner from "./BrochureBanner";
import { AiOutlineArrowRight } from "react-icons/ai";
import bannerBG from "../../assets/brochure/banner-bg.png";
import BrochureBlk1 from "../../components/BrochureBlks/BrochureBlk1";
import WebDevClients from "../../components/WebDevClients/WebDevClients";
import Faq from "../../components/Faq/Faq";
import Contact from "../../components/Contact/Contact";
import BrochureBlk2 from "../../components/BrochureBlks/BrochureBlk2";
import BrochureBlk3 from "../../components/BrochureBlks/BrochureBlk3";
import SwBandSection from "../../components/SoftwareDevBlks/SwBandSection";
import BrochureSlider from "../../components/BrochureBlks/BrochureSlider";

const BrochureDesign = () => {
  return (
    <div className="brochure">
      <MainBanner
        smallhead="UIUX & Branding Design"
        mainHeadB1="Brochure Designing Services"
        bannerDesc=" Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod.Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod"
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerImg={<BrochureBanner />}
        bannerBG={bannerBG}
        uxclass="uxclass"
      />
      <BrochureBlk1/>
      <BrochureBlk2/>
      <BrochureBlk3/>
      <SwBandSection para="Want to learn more about our software development expertise?" />
      <BrochureSlider/>
      <WebDevClients/>
      <Faq/>
      <Contact/>
    </div>
  );
};

export default BrochureDesign;
