import React from "react"; 
import MainBanner from "../../components/Banner/MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai";

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
import leftImg from '../../assets/uiux/UXImg1.png'
 

const UXDesign = () => {
  const block1 = [
    {
      leftImg:leftImg,
      heading:"Explore Our Design Services",
      head1:"Website/App UI/UX Designing",
      para1:"corporate websites, e-commerce stores and more ",
      head2:"Brochures Designing ",
      para2:"Customized business brochure, product catalogues, presentation folders more ",
      head3:"Logo Designing ",
      para3:"We help with our logo design process to explore and find your brand message. ",
      head4:"Corporate Designs ",
      para4:"professionally designed letterhead, Business cards, Envelopes and more "
    }
]
  return (
    <div className="uiux_cover  content-center">
      <MainBanner
        smallhead="UIUX & Branding Design"
        mainHeadB1="Branding & Design Services"
        bannerDesc="Elevate your brand identity design and attract new customers. Meet with our branding experts to discuss your brand identity & design requirements."
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerImg={<UXBanner/>}
      />
      <div style={{background:"#FAFAFA"}}>
        <UXDesignBlk1 block1={block1}/>
      </div>
      
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
