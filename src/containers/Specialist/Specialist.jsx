import React from "react";
import SpecialistBanner from "./SpecialistBanner";
import MainBanner from "../../components/Banner/MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai";
import SpecialistBlk1 from "../../components/SpecialistBlks/SpecialistBlk1";
import "./Specialist.css";
import SoftwareDeBlk1 from "../../components/SoftwareDevBlks/SoftwareDeBlk1";
import blk1 from "../../assets/digitalmarketing/block2.png";
import blk2 from "../../assets/digitalmarketing/block2.png";
import blk3 from "../../assets/digitalmarketing/block3.png";
import blk4 from "../../assets/digitalmarketing/block4.png";
import blk5 from "../../assets/digitalmarketing/block5.png";
import blk6 from "../../assets/digitalmarketing/block6.png";
import blk7 from "../../assets/digitalmarketing/block7.png";
import blk8 from "../../assets/digitalmarketing/block8.png";
import blk9 from "../../assets/digitalmarketing/block9.png";
import blk10 from "../../assets/digitalmarketing/block10.png";
import blk11 from "../../assets/digitalmarketing/block11.png";
import blk12 from "../../assets/digitalmarketing/block12.png";
import blk13 from "../../assets/digitalmarketing/block13.png";
import blk14 from "../../assets/digitalmarketing/block14.png";
import blk15 from "../../assets/digitalmarketing/block15.png";
import blk16 from "../../assets/digitalmarketing/block16.png";

import SEO1 from "../../assets/specialist/global_seo_services.png";
import SEO2 from "../../assets/specialist/local_seo_services.png";
import SEO3 from "../../assets/specialist/ecommerce_seo_services.png";
import SEO4 from "../../assets/specialist/link_building_services.png";

import SwBandSection from "../../components/SoftwareDevBlks/SwBandSection";
import DigitalSlider from "../../components/DigitalMarketingBlks/DigitalSlider";

import product1 from "../../assets/specialist/tajbakery.png";
import product2 from "../../assets/specialist/carpartsellers.png";
import product3 from "../../assets/specialist/Siriautopart.png";
import WebDevClients from "../../components/WebDevClients/WebDevClients";
import Faq from "../../components/Faq/Faq";
import Contact from "../../components/Contact/Contact";
import SpecialistBlk2 from "../../components/SpecialistBlks/SpecialistBlk2";
import WebDevExplained from "../../components/WebDevExplained/WebDevExplained";

import ecommerceImg from "../../assets/specialist/SEO-Banner.png";

const Specialist = () => {
  const block1 = [
    {
      lefthead: "GLOBAL SEO Services",
      img1: SEO1,
      icon1: blk1,
      icon2: blk2,
      icon3: blk3,
      icon4: blk4,
      head1: "Multi-language SEO",
      para1: "Lorem Ipsum is simply dummy text of he printing and all of it",
      para2: "Lorem Ipsum is simply dummy text of he printing and all of it",
      para3: "Lorem Ipsum is simply dummy text of he printing and all of it",
      para4: "Lorem Ipsum is simply dummy text of he printing and all of it",
      head2: "Mobile or Voice Search SEO",
      head3: "International SEO Audit",
      head4: "Build a global brand",

      righthead: "Local SEO Services",
      img2: SEO2,
      icon5: blk5,
      icon6: blk6,
      icon7: blk7,
      icon8: blk8,
      head5: "Local SEO Audit",
      head6: "Build Local Brand Awareness",
      head7: "Google My Business SEO",
      head8: "Local Business Advertising",
      para5: "Lorem Ipsum is simply dummy text of he printing and all of it",
      para6: "Lorem Ipsum is simply dummy text of he printing and all of it",
      para7: "Lorem Ipsum is simply dummy text of he printing and all of it",
      para8: "Lorem Ipsum is simply dummy text of he printing and all of it",
    },
    {
      lefthead: "Paid Search Marketing",
      img1: SEO3,
      icon1: blk9,
      icon2: blk10,
      icon3: blk11,
      icon4: blk12,
      head1: "eCommerce SEO Audit",
      head2: "Product SEO Copywriting",
      head3: "Schema Implementation ",
      head4: "Conversion Optimization",
      righthead: "Email Marketing ",
      para1: "Lorem Ipsum is simply dummy text of he printing and all of it",
      para2: "Lorem Ipsum is simply dummy text of he printing and all of it",
      para3: "Lorem Ipsum is simply dummy text of he printing and all of it",
      para4: "Lorem Ipsum is simply dummy text of he printing and all of it",
      img2: SEO4,
      icon5: blk13,
      icon6: blk14,
      icon7: blk15,
      icon8: blk16,
      head5: "Backlink Audits",
      head6: "Guest Posts",
      head7: "Niche Edits ",
      head8: "Broken Link Recovery",
      para5: "Lorem Ipsum is simply dummy text of he printing and all of it",
      para6: "Lorem Ipsum is simply dummy text of he printing and all of it",
      para7: "Lorem Ipsum is simply dummy text of he printing and all of it",
      para8: "Lorem Ipsum is simply dummy text of he printing and all of it",
    },
  ];
  return (
    <div className="specialist_cover">
      <MainBanner
        smallhead="Digital Marketing"
        mainHeadB1="Specialist Marketing & SEO Company"
        bannerDesc="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod.Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod"
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerImg={<SpecialistBanner />}
      />
      <SpecialistBlk1 />
      <SoftwareDeBlk1
        subHead="OUR SERVICES"
        mainHead="Search Engine Optimization Solutions"
        para="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod"
        block1={block1}
      />
      <SwBandSection para="Want to learn more about our software development expertise?" />
      <DigitalSlider
        product1={product1}
        product2={product2}
        product3={product3}
      />
      <SpecialistBlk2 />
      <WebDevClients />
      <WebDevExplained
        headB1="What eCommerce development is?"
        subhead2="What is Search engine optimization?"
        para="SEO is integral to a successful digital marketing campaign.It is the process that involves optimizing a website with various 
           techniques so the customers searching for related keywords on search engines can find it easily. It is an excellent tool for driving organic traffic, 
           reaching the target audience, etc. A majority of the companies online use Search Engine Optimization for achieving higher search engine rankings,"
        img={ecommerceImg}
        subhead3="Why is search engine optimization required?"
        para2="Time and again, experts have emphasized the importance of SEO to increase a website’s traffic. Search engine giants
            like Google are known to mostly show optimized sites on their search results page. If you want your website
              to be visible online, then you should consider availing of professional SEO services. Erisn’s website SEO service
                is designed to increase the search engine visibility of the site."
        subhead4="How are SEO services better for your business?"
        para3="Leveraging SEO services is a great way to get ahead of the competition. With SEO you can attain quality traffic for the website. Your
                  website can get more clicks if it is well optimized as per the latest SEO trends. Use the services of Erisn, a SEO agency to propel your business in the right direction."
      />

      <Faq />
      <Contact />
    </div>
  );
};

export default Specialist;
