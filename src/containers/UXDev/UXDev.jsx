import React from "react";
import MainBanner from "../../components/Banner/MainBanner";
import AndroidBanner from "../AndroidDev/AndroidBanner";
import { AiOutlineArrowRight } from "react-icons/ai";
import bannerBG from "../../assets/androiddev/banner-bg.png";
import WebdevExplainedRev from "../../components/WebDevExplained/WebdevExplainedRev";
import UXDevBlk1 from "../../components/UXDev/UXDevBlk1";
import webdevExp from "../../assets/UXDev/ux_left_img.png";
import CommonHeading from "../../components/commonHeading/CommonHeading";
import UXDesignBlk2 from "../../components/UXDesignBlks/UXDesignBlk2";
import UXDevBlk2 from "../../components/UXDev/UXDevBlk2";
import UXDarkTheme from "../../components/UXDev/UXDarkTheme";

const UXDev = () => {
  return (
    <div>
      <MainBanner
        smallhead="UIUX Design Services"
        mainHeadB1="UI UX Design"
        bannerDesc="We're among the Top UI UX Design Companies in India"
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerStyle="banner-content-left"
        bannerImg={<AndroidBanner />}
        bannerBG={bannerBG}
      />
      <UXDevBlk1 />
      <div style={{ background: "#FAFAFA" }}>
      <CommonHeading 
        mainB1="World Class UI/UX Design Studio to Transform Businesses into Brands"
      />
        <WebdevExplainedRev  
          para="Save money, efforts, and time to achieve perfect product development leveraging our conceptual UI/UX Design Services and Solutions. We have a long tail of happy clients because we have a habit to take our clients on a virtual tour by providing them a working prototype of their product. It helps them in understanding seen and unforeseen obstacles during project development."
          para2="The best part of our UI & UX Design and Development is without writing a single line of code, our clients are able to refine UI/UX issues, suggest changes, corrections and get them rectified to meet their needs prior to starting actual design and development work."
          img={webdevExp}
        />
      </div>
      <UXDevBlk2/>
      <UXDarkTheme/>

    </div>
  );
};

export default UXDev;
