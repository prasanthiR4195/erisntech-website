import React from "react";
import "./Android.css";
import MainBanner from "../../components/Banner/MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai";
import AndroidBanner from "./AndroidBanner";
import bannerBG from "../../assets/androiddev/banner-bg.png";
import UXDesignBlk1 from "../../components/UXDesignBlks/UXDesignBlk1";
import CommonHeading from "../../components/commonHeading/CommonHeading";

import leftImg from "../../assets/androiddev/img1.png";
import AndroidSlider from "../../components/AndroidDevBlks/AndroidSlider";
import AndroidDevBlock1 from "../../components/AndroidDevBlks/AndroidDevBlock1";
import MobileDevBlk3 from "../../components/MobileDevBlks/MobileDevBlk3";
import WebdevExplainedRev from "../../components/WebDevExplained/WebdevExplainedRev";
import webdevExp from "../../assets/androiddev/img2.png";
import Faq from "../../components/Faq/Faq";
import Contact from "../../components/Contact/Contact";

const Android = () => {
  const block1 = [
    {
      leftImg: leftImg,
      head1: "Android Mobile app Design",
      para1: "corporate websites, e-commerce stores and more",
      head2: "UX/UI DESIGN",
      para2:
        "Customized business brochure, product catalogues, presentation folders more",
      head3: "QA & Testing",
      para3:
        "We help with our logo design process to explore and find your brand message.",
      head4: "Maintenance & Support",
      para4:
        "professionally designed letterhead, Business cards, Envelopes and more",
    },
  ];
  return (
    <div className="andorid">
      <MainBanner
        smallhead="Our Sevices"
        mainHeadB1="Mobile Development Services"
        bannerDesc="  Want to build your product with a team that establishes a clear design process, meets deadlines, and delivers a spot-on end result? Turn to ErisnTech's UI and UX services."
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerStyle="banner-content-left"
        bannerImg={<AndroidBanner />}
        bannerBG={bannerBG}
      />
      <div className="android_cover_one">
        <CommonHeading
          subHead="OUR SERVICES"
          mainB1="Our Services In Android App Development"
        />
        <p className="digitalWork_para">
          Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam
          nonumy eirmod temporod
        </p>
        <UXDesignBlk1 block1={block1} />
      </div>
      <AndroidSlider />
      <AndroidDevBlock1 />
      <MobileDevBlk3 />
      <div style={{ background: "#FAFAFA" }}>
        <WebdevExplainedRev
          headB1="What application development is ?"
          subhead2="What is application development?"
          para="In simple terms, application development is a process of developing software applications. In today's digital world, it has become essential for businesses to invest in this technology. The entire process involves multiple step like planning, ideating, creating,testing, and launching the application. At Erisn, we follow a structured approach to ensure that the entire development process yields the best results."
          subhead3="Why is application development required?"
          para2="In simple terms, application development is a process of developing software applications."
          subhead4="Why is application development required?"
          para3="In simple terms, application development is a process of developing software applications."
          img={webdevExp}
        />
      </div>
      <Faq />
      <Contact />
    </div>
  );
};

export default Android;
