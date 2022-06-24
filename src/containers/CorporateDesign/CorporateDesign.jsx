import React from "react";
import MainBanner from "../../components/Banner/MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai";

import CorporateBanner from "./CorporateBanner";
import Faq from "../../components/Faq/Faq";
import Contact from "../../components/Contact/Contact";
import WebDevClients from "../../components/WebDevClients/WebDevClients";
import WebdevExplainedRev from "../../components/WebDevExplained/WebdevExplainedRev";
import webdevExp from "../../assets/corporate/corporate_img.png";
import CorporateBlk1 from "../../components/Corporate/CorporateBlk1";
import SwBandSection from "../../components/SoftwareDevBlks/SwBandSection";
import BrochureSlider from "../../components/BrochureBlks/BrochureSlider";
import corporate1 from "../../assets/corporate/corporate1.png";
import corporate2 from "../../assets/corporate/corporate2.png";
import corporate3 from "../../assets/corporate/corporate3.png";
import CorporateBlk2 from "../../components/Corporate/CorporateBlk2";


const CorporateDesign = () => {
  return (
    <div className="CorporateDesign">
      <MainBanner
        smallhead="UIUX & Branding Design"
        mainHeadB1="Corporate Identity Design"
        bannerDesc="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod.Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod"
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerImg={<CorporateBanner />}
      
      />
      <WebdevExplainedRev
        headB1="Corporate Stationery Design "
        subhead2="The first impression is the best one"
        para="Your business card builds your first impression. A professionally designed letterhead containing your business proposal increases your chances of acquiring the project. We start the process of crafting a corporate stationary design by knowing the ins and outs of your business so as to offer you with the best solution. Being a leading graphic design company in India, our aim is to uphold the corporate culture of your business and enhance its public image through our corporate identity design services."
        img={webdevExp}
      />
      <CorporateBlk1 />
      <SwBandSection para="Want to learn more about our software development expertise?" />
      <CorporateBlk2/>

      <BrochureSlider item1={corporate1} item2={corporate2} item3={corporate3}/>
      <WebDevClients />
      <Faq />
      <Contact />
    </div>
  );
};

export default CorporateDesign;
