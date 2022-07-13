import React from "react";
import MainBanner from "../../components/Banner/MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai";
import PPCServicesBanner from "./PPCServicesBanner";
import SpecialistBlk1 from "../../components/SpecialistBlks/SpecialistBlk1";
import "./PPCServices.css";

import PPCBlk1 from "../../components/PPCBlks/PPCBlk1";
import WebDevClients from "../../components/WebDevClients/WebDevClients";
import Faq from "../../components/Faq/Faq";
import Contact from "../../components/Contact/Contact";
import PPCAds from "../../components/PPCBlks/PPCAds";
import PPCServicesSection from "../../components/PPCBlks/PPCServicesSection";
import search_ads from "../../assets/ppc/search_ads.png";
import display_ads from "../../assets/ppc/display_ads.png";
import sponsored_ads from "../../assets/ppc/sponsored_ads.png";
import remarketing_ads from "../../assets/ppc/remarketing_ads.png";

const PPCServices = () => {
  return (
    <div className="PPCServices"> 
      <MainBanner
        smallhead="Digital Marketing"
        mainHeadB1="PPC Services to Boost Your Sales"
        bannerDesc="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod.Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod"
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerImg={<PPCServicesBanner />}
      />
      <SpecialistBlk1
        head="PPC Services - How to Drive Greater Brand Growth"
        para="If you own a brand or company, PPC services are the need of the hour for growing it. Wondering what pay per click advertising (PPC) actually entails It can help you target customers based on the advertisements that they view. And this is why you need the right PPC services in India, courtesy Infidigit, for optimizing your brand campaigns and growing revenues through data-based decisions."
      />
      <PPCBlk1 />
      <PPCAds
        head="Different Types of PPC Ads"
        subhead1="Search Ads"
        img1={search_ads}
        para1="In this type of PPC ads, advertisers explore and choose keywords they want to target their ads on. After this, ad copies are created to tell Google Ads to display when these keywords are searched for by the users. These can be video ads, image ads, text ads, and more. An auction system decides which ads will be given priority over the others, as the advertisers also input how much they are willing to pay Google Ads for each click on the ad."
        subhead2="Display Ads"
        img2={display_ads}
        para2="In this type of PPC ads, advertisers explore and choose keywords they want to target their ads on. After this, ad copies are created to tell Google Ads to display when these keywords are searched for by the users. These can be video ads, image ads, text ads, and more. An auction system decides which ads will be given priority over the others, as the advertisers also input how much they are willing to pay Google Ads for each click on the ad."
        subhead3="Sponsored Ads"
        img3={sponsored_ads}
        para3="In this type of PPC ads, advertisers explore and choose keywords they want to target their ads on. After this, ad copies are created to tell Google Ads to display when these keywords are searched for by the users. These can be video ads, image ads, text ads, and more. An auction system decides which ads will be given priority over the others, as the advertisers also input how much they are willing to pay Google Ads for each click on the ad."
        subhead4="Remarketing Ads"
        img4={remarketing_ads}
        para4="In this type of PPC ads, advertisers explore and choose keywords they want to target their ads on. After this, ad copies are created to tell Google Ads to display when these keywords are searched for by the users. These can be video ads, image ads, text ads, and more. An auction system decides which ads will be given priority over the others, as the advertisers also input how much they are willing to pay Google Ads for each click on the ad."
      />
      <PPCServicesSection />

      <WebDevClients />
      <Faq />
      <Contact />
    </div>
  );
};

export default PPCServices;
