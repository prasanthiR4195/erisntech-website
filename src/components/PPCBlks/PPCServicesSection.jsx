import React from "react";
import CommonHeading from "../commonHeading/CommonHeading";
import LeftBlock from "../BlockSection/LeftBlock";

import icon1 from "../../assets/ppc/page_setup.png";

import icon2 from "../../assets/ppc/page_setup.png";
import icon3 from "../../assets/ppc/paid_search_ads.png";
import icon4 from "../../assets/ppc/display_adss.png";
import icon5 from "../../assets/ppc/remarketing.png";
import icon6 from "../../assets/ppc/social_media.png";
import icon7 from "../../assets/ppc/google_shopping.png";
import icon8 from "../../assets/ppc/local_services.png";
import icon9 from "../../assets/ppc/targeted_campaigns.png";
import icon10 from "../../assets/ppc/existing_ppc.png";
import icon11 from "../../assets/ppc/ppc_performance.png";

import color1 from "../../assets/webdev/color1.png";
import color2 from "../../assets/webdev/color2.png";
import color3 from "../../assets/webdev/color3.png";
import color4 from "../../assets/webdev/color4.png";
import color5 from "../../assets/webdev/color5.png";
import Fade from 'react-reveal/Fade';

const PPCServicesSection = () => {
  const data = [
    {
      img: icon1,
      title: "Account Setup",
      color: color1,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: icon2,
      title: "Page Setup",
      color: color2,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: icon3,
      title: "Paid Search Ads",
      color: color3,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: icon4,
      title: "Display Ads",
      color: color4,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: icon5,
      title: "Remarketing",
      color: color5,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: icon6,
      title: "Social Media Paid Advertising",
      color: color1,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: icon7,
      title: "Google Shopping Ads",
      color: color2,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: icon8,
      title: "Local Service Ads",
      color: color3,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: icon9,
      title: "Creating Targeted Campaigns",
      color: color4,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: icon10,
      title: "Optimizing Existing PPC Campaigns",
      color: color5,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: icon11,
      title: "Reporting PPC Performance",
      color: color1,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ];
  return (
    <div className="PPCServicesSection">
      <CommonHeading subHead="WE FOCUSED ON" mainB1="PPC Services Includes" />
      <Fade bottom>
      <p className="SpecialistBlk2_para">
        Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam
        nonumy eirmod temporod
      </p>
      </Fade>
      <div className="SpecialistBlk2_inner">
        {data.map((index) => {
          return (
            <Fade bottom>
            <LeftBlock
              img={index.img}
              title={index.title}
              color={index.color}
              desc={index.desc}
            />
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default PPCServicesSection;
