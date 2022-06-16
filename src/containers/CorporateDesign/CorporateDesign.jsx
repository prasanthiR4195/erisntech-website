import React from 'react'
import MainBanner from "../../components/Banner/MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai";
import bannerBG from "../../assets/corporate/banner-bg.png"; 
import CorporateBanner from './CorporateBanner';
import Faq from '../../components/Faq/Faq';
import Contact from '../../components/Contact/Contact';
import WebDevClients from '../../components/WebDevClients/WebDevClients';

const CorporateDesign = () => {
  return (
    <div className='CorporateDesign'>
        <MainBanner
            smallhead="UIUX & Branding Design"
            mainHeadB1="Corporate Identity Design"
            bannerDesc="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod.Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod"
            btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
            bannerStyle="banner-content-left"
            bannerImg={<CorporateBanner/>}
            bannerBG={bannerBG} 
        />


        <WebDevClients/>
        <Faq/>
        <Contact/>
    </div>
  )
}

export default CorporateDesign