import React from 'react'
import './HybridApp.css'
import MainBanner from "../../components/Banner/MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai";
import bannerBG from "../../assets/hybridapp/banner-bg.png";
import HybridAppBanner from './HybridAppBanner';
import HybridappBlk1 from '../../components/HybridappBlks/HybridappBlk1';
import HybridappBlk2 from '../../components/HybridappBlks/HybridappBlk2';
import HybridappSlider from '../../components/HybridappBlks/HybridappSlider';
import Faq from '../../components/Faq/Faq';
import Contact from '../../components/Contact/Contact';
import WebDevClients from '../../components/WebDevClients/WebDevClients';
import HybridappBlk3 from '../../components/HybridappBlks/HybridappBlk3';


const HybridApp = () => {
  return (
    <div className='hybrid_dev'>
         <MainBanner
            smallhead="Mobile App Development"
            mainHeadB1="Hybrid App Development Service"
            bannerDesc="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod.Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod"
            btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
            bannerStyle="banner-content-left"
            bannerImg={<HybridAppBanner/>}
            bannerBG={bannerBG}
            uxclass="uxclass"
        />
        <HybridappBlk1/>
        <HybridappBlk2/>
        <HybridappSlider/>
        <HybridappBlk3/>
        <WebDevClients/>
        <Faq/>
        <Contact/>
       

    </div>
  )
}

export default HybridApp