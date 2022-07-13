import React from "react";
import "./WebDev.css";
import CommonHeading from "../../components/commonHeading/CommonHeading";
import { AiOutlineArrowRight } from "react-icons/ai";
import WebDevExplained from "../../components/WebDevExplained/WebDevExplained";
import WebDevServices from "../../components/WebDevServices/WebDevServices";
import WorkIcons from "../../components/WorkIcons/WorkIcons";
import WebDevClients from "../../components/WebDevClients/WebDevClients";
import Faq from "../../components/Faq/Faq";
import Contact from "../../components/Contact/Contact";

import MainBanner from "../../components/Banner/MainBanner";
import WebDevBanner from "./WebDevBanner";
import MovingBlk from "../../components/SoftwareDevBlks/MovingBlk";
import HomeTechnologies from "../../components/Hometechnologies/HomeTechnologies";
import SwBandSection from "../../components/SoftwareDevBlks/SwBandSection";
import Slider from "../../components/Slider/Slider";

import icon1 from "../../assets/webdev/icon1.png";
import icon2 from "../../assets/webdev/icon2.png";
import icon3 from "../../assets/webdev/icon3.png";
import color1 from "../../assets/webdev/color1.png";
import color2 from "../../assets/webdev/color2.png";
import color3 from "../../assets/webdev/color3.png";

import react from "../../assets/webdev/react.png";
import php from "../../assets/webdev/php.png";
import laravel from "../../assets/webdev/laravel.png";
import node from "../../assets/webdev/nodejs.png"; 

import webdevExp from "../../assets/webdev/web_dev_explained.png";

const WebDev = () => {
  return (
    <div className="webdev">
      <MainBanner
        smallhead="Our Sevices"
        mainHeadB1="Web Development"
        bannerDesc=" Want to build your product? Turn to ErisnTech's UI and UX services. Our design team is a small design studio within a large software company that will help you build an engaging product easily and quickly"
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerImg={<WebDevBanner />}
      />
      <div className="web_dev_gradient">
        <CommonHeading mainB1="How ErisnTech works" />
        <div className="swDevBlk3_inner">
          <div className="swInnerRightBlk">
            <MovingBlk icon={icon1} color={color1} />
            <h5>Reach out to our Professionals</h5>
            <p>
              Contact our domain experts and tell us what you need. They clarify
              all your queries about important details like the entire cost,
              resou- rces, and time required early for the project.
            </p>
          </div>
          <div className="swInnerRightBlk">
            <MovingBlk icon={icon2} color={color2} />
            <h5>Initiating the Development Process</h5>
            <p>
              Contact our domain experts and tell us what you need. They clarify
              all your queries about important details like the entire cost,
              resou- rces, and time required early for the project.
            </p>
          </div>
          <div className="swInnerRightBlk">
            <MovingBlk icon={icon3} color={color3} />
            <h5>Final Project Delivery</h5>
            <p>
              Contact our domain experts and tell us what you need. They clarify
              all your queries about important details like the entire cost,
              resou- rces, and time required early for the project.
            </p>
          </div>
        </div>

        {/* <div className="web_dev_block_section">
          <Block
            img="assets/webdev/icon1.png"
            title="Reach out to our Professionals"
            desc="Contact our domain experts and tell us what you need. They clarify all your queries about important details like the entire cost, resou- rces, and time required early for the project."
          />
          <Block
            img="assets/webdev/icon2.png"
            title="Initiating the Development Process "
            desc="Our web designers, developers, and analysts would work together to interpret your technical needs, business goals, and global market insights to frame the main site structure. "
          />
          <Block
            img="assets/webdev/icon3.png"
            title="Final Project Delivery "
            desc="Being a major web development agency, we conduct thorough site testing. We handle bug fixes, fine- tune the integrated features, and enhance the security structure. "
          />
        </div> */}
        <WebDevExplained
          headB1="Custom"
          headR="Web Development"
          headB2="Explained."
          para="Custom Website Development is the alternative to generic boxed
              software. It is the tailor-made creation of your website, built
              from scratch by experienced web developers and designers, who use
              front-end and back-end technology to make your site unique,
              scalable, mobile friendly, and directly suited to your specific
              business requirements."
          img={webdevExp}
          btn="true"
        />
        <WebDevServices />
        <HomeTechnologies heading="Technologies we work with" product1={react} product_name1="React JS" 
        product2={laravel} product_name2="Laravel" product3={php} product_name3="PHP" product4={node} product_name4="Node JS" />
      </div>
      <WorkIcons />
      <SwBandSection para="Want to learn more about our software development expertise?" />
      <Slider />
      {/* <Tabsection /> */}

      {/* <Technologies /> */}
      <WebDevClients />
      <Faq />
      <Contact />
    </div>
  );
};

export default WebDev;
