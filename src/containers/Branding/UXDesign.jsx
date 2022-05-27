import React from "react"; 
import MainBanner from "../../components/Banner/MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai";
import bannerBG from "../../assets/webdev/banner-bg.png";
import UXDesignBlk1 from "../../components/UXDesignBlks/UXDesignBlk1";
import UXDesignBlk2 from "../../components/UXDesignBlks/UXDesignBlk2";
import UXDesignBlk3 from "../../components/UXDesignBlks/UXDesignBlk3";
import UXDesignBlk4 from "../../components/UXDesignBlks/UXDesignBlk4";
import UXBanner from "./UXBanner";
import UXDesignBlk5 from "../../components/UXDesignBlks/UXDesignBlk5";
import CommonSlider from "../../components/Slider/CommonSlider";
import UXdesignBlk6 from "../../components/UXDesignBlks/UXdesignBlk6";
import Faq from "../../components/Faq/Faq";
import Contact from "../../components/Contact/Contact";

const UXDesign = () => {
  return (
    <div>
      <MainBanner
        smallhead="Our Sevices"
        mainHeadB1="Web Development"
        bannerDesc=" Want to build your product? Turn to ErisnTech's UI and UX services. Our design team is a small design studio within a large software company that will help you build an engaging product easily and quickly"
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerStyle="banner-content-left"
        bannerImg={<UXBanner/>}
        bannerBG={bannerBG}
      />
      <UXDesignBlk1 />
      <UXDesignBlk2 />
      <UXDesignBlk3 />
      <UXDesignBlk4 />
      <UXDesignBlk5/>
      <CommonSlider subHead="OUR CLIENTS" mainB1="We deal with the aspects of professional IT Services" />
      <UXdesignBlk6/>
      <Faq/>
      <Contact/>
    </div>
  );
};

export default UXDesign;
