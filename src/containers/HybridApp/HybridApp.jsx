import React from 'react'
import './HybridApp.css'
import MainBanner from "../../components/Banner/MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai";
import bannerBG from "../../assets/hybridapp/banner-bg.png";
import HybridAppBanner from './HybridAppBanner';
import HybridappBlk1 from '../../components/HybridappBlks/HybridappBlk1';
import HybridappBlk2 from '../../components/HybridappBlks/HybridappBlk2';
import HybridappSlider from '../../components/HybridappBlks/HybridappSlider';


const HybridApp = () => {
  return (
    <div>
         <MainBanner
            smallhead="UIUX Design Services"
            mainHeadB1="Logo Design"
            bannerDesc="We're among the Top UI UX Design Companies in India"
            btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
            bannerStyle="banner-content-left"
            bannerImg={<HybridAppBanner/>}
            bannerBG={bannerBG}
            uxclass="uxclass"
        />
        <HybridappBlk1/>
        <HybridappBlk2/>
        <HybridappSlider/>
       

    </div>
  )
}

export default HybridApp