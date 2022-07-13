import React from "react";
import MainBanner from "../../components/Banner/MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai";
import EcommerceBanner from "./EcommerceBanner";
import "./Ecommerce.css";
import DigitalSlider from "../../components/DigitalMarketingBlks/DigitalSlider";

import product1 from "../../assets/digitalmarketing/tab1.png";
import product2 from "../../assets/digitalmarketing/tab2.png";
import product3 from "../../assets/digitalmarketing/tab3.png";
import HomeEnquiry from "../../components/HomeEnquiry/HomeEnquiry";
import Faq from "../../components/Faq/Faq";
import Contact from "../../components/Contact/Contact";
import EcommerceBlk1 from "../../components/EcommerceBlks/EcommerceBlk1";
import CommonHeading from "../../components/commonHeading/CommonHeading";
import EcommerceBlk2 from "../../components/EcommerceBlks/EcommerceBlk2";

const Ecommerce = () => {
  return (
    <div className="Ecommerce">
      <MainBanner
        smallhead="Ecommerce Development"
        mainHeadB1="Ecommerce Web Development Services"
        bannerDesc="Cutting edge e-commerce website solutions for superior, robust and scalable online stores that stand the test of time."
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerImg={<EcommerceBanner />}
      />
      <EcommerceBlk1 />

      <DigitalSlider
        product1={product1}
        product2={product2}
        product3={product3}
        head="We build successful, lasting, profitable products"
      />
      <div className="Ecommerce_enquiry">
        <CommonHeading mainB1="Multi-Vendor Marketplace Development" />
        <p className="Ecommerce_enquiry_para">
          We are specialists in both economics and information technologies and
          we apply our full range of talent to creating the perfect solution for
          each client’s needs.
        </p>
        <HomeEnquiry />
      </div>
      <EcommerceBlk2 />
      <Faq />
      <Contact />
    </div>
  );
};

export default Ecommerce;
