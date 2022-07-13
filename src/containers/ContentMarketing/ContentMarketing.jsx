import React from "react";
import MainBanner from "../../components/Banner/MainBanner";
import ContentMarketingBanner from "./ContentMarketingBanner";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./ContentMarketing.css";
import SpecialistBlk1 from "../../components/SpecialistBlks/SpecialistBlk1";
import ContentMarketingBlock1 from "../../components/ContentMarketingBlk/ContentMarketingBlock1";
import PPCAds from "../../components/PPCBlks/PPCAds";
import WebDevClients from "../../components/WebDevClients/WebDevClients";
import Faq from "../../components/Faq/Faq";
import Contact from "../../components/Contact/Contact";

import search_ads from "../../assets/content_marketing/search_ads.png";
import creation_and_sharing from "../../assets/content_marketing/creation_and_sharing.png";
import measuring from "../../assets/content_marketing/measuring.png"; 
import ContentMarketingBlock2 from "../../components/ContentMarketingBlk/ContentMarketingBlock2";

const ContentMarketing = () => {
  return (
    <div className="contentmarketing">
      <MainBanner
        smallhead="Digital Marketing"
        mainHeadB1="Content Marketing Services"
        bannerDesc="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod.Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod"
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerImg={<ContentMarketingBanner />}
      />
      <SpecialistBlk1
        head="Content Marketing Services To Attract Your Potential Target Audience"
        para="Finding the right content marketing services is often a challenge for growing businesses. Enhancing online traffic to a business website requires looking at content marketing companies for obtaining suitable results. If you want higher revenues and better word of mouth about your brand, choosing a good content marketing firm is a must. Here is where Infidigit comes into the picture as an experienced and professional content marketing agency."
      />
      <ContentMarketingBlock1/>
      <PPCAds head="Different Types of PPC Ads"
      subhead1="Research & Ideate"
      img1={search_ads}
      para1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim- en book."
      subhead2="Creation & Sharing"
      img2={creation_and_sharing}
      para2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim- en book."
      subhead3="Measuring"
      img3={measuring}
      para3="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim- en book."
      />
      <ContentMarketingBlock2/>


      <WebDevClients/>
      <Faq/>
      <Contact/>
    </div>
  );
};

export default ContentMarketing;
