import React from 'react'
import './LogoDesigning.css'
import MainBanner from "../../components/Banner/MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai";
import bannerBG from "../../assets/logodesign/banner-bg.png";
import LogoDesignBlk1 from '../../components/LogoDesign/LogoDesignBlk1';
import LogoBanner from './LogoBanner';
import LogoDesignBlk2 from '../../components/LogoDesign/LogoDesignBlk2';
import LogoDesignBlk3 from '../../components/LogoDesign/LogoDesignBlk3';
import LogoBlackSection from './LogoBlackSection';
import Faq from '../../components/Faq/Faq';
import Contact from '../../components/Contact/Contact';
import WebDevClients from '../../components/WebDevClients/WebDevClients';
import LogoOurWork from './LogoOurWork';

const LogoDesigning = () => {
  return (
    <div className='logo_design'>
          <MainBanner
            smallhead="UIUX Design Services"
            mainHeadB1="Logo Design"
            bannerDesc="We're among the Top UI UX Design Companies in India"
            btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
            bannerStyle="banner-content-left"
            bannerImg={<LogoBanner/>}
            bannerBG={bannerBG}
            uxclass="uxclass"
        />
        <LogoDesignBlk1/>
        <LogoDesignBlk2/>
        <LogoDesignBlk3/>
        <LogoBlackSection/>
        <LogoOurWork/>
        <div style={{background:"#F6F6F6"}}><WebDevClients /></div>
        <Faq/>
        <Contact/>

    </div>
  )
}

export default LogoDesigning