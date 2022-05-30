import React from "react";
import CommonHeading from "../commonHeading/CommonHeading";
import LeftBlock from "../BlockSection/LeftBlock";
import color1 from "../../assets/softwaredev/color1.png";
import color2 from "../../assets/softwaredev/color2.png";
import color3 from "../../assets/softwaredev/color3.png";
import color4 from "../../assets/softwaredev/color4.png";

import icon1 from "../../assets/digitalmarketing/icon1.png";
import icon2 from "../../assets/digitalmarketing/icon2.png";
import icon3 from "../../assets/digitalmarketing/icon3.png";
import icon4 from "../../assets/digitalmarketing/icon4.png";
import icon5 from "../../assets/digitalmarketing/icon5.png";
import icon6 from "../../assets/digitalmarketing/icon6.png";
import icon7 from "../../assets/digitalmarketing/icon7.png";
import icon8 from "../../assets/digitalmarketing/icon8.png";
import icon9 from "../../assets/digitalmarketing/icon9.png";

import './DigitalWorks.css'

const DigitalWorks = () => {
  return (
    <div className="digitalWorks_cover">
      <CommonHeading
        mainB1="Latest Technologies Used by Our Mobile App Developers"
        para=""
      />
      <p className="digitalWork_para">
          Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam
          nonumy eirmod temporod
        </p> 
      <div className="digitalWorks_inner">
        <LeftBlock
          img={icon1}
          title="Education"
          color={color1}
          desc="Our team of experts delivers custom website solutions for companies, depending on their needs. We conduct a complete research on the market trends and use top technological elements for scalable website develop- pment with customizable features."
        />
        <LeftBlock
          img={icon2}
          title="Fashion"
          color={color2}
          desc="Our team of experts delivers custom website solutions for companies, depending on their needs. We conduct a complete research on the market trends and use top technological elements for scalable website develop- pment with customizable features."
        />
        <LeftBlock
          img={icon3}
          title="Healthcare"
          color={color3}
          desc="Our team of experts delivers custom website solutions for companies, depending on their needs. We conduct a complete research on the market trends and use top technological elements for scalable website develop- pment with customizable features."
        />
        <LeftBlock
          img={icon4}
          title="Real Estate"
          color={color4}
          desc="Our team of experts delivers custom website solutions for companies, depending on their needs. We conduct a complete research on the market trends and use top technological elements for scalable website develop- pment with customizable features."
        />
        <LeftBlock
          img={icon5}
          title="Ecommerce"
          color={color1}
          desc="Our team of experts delivers custom website solutions for companies, depending on their needs. We conduct a complete research on the market trends and use top technological elements for scalable website develop- pment with customizable features."
        />
        <LeftBlock
          img={icon6}
          title="Restaurant"
          color={color2}
          desc="Our team of experts delivers custom website solutions for companies, depending on their needs. We conduct a complete research on the market trends and use top technological elements for scalable website develop- pment with customizable features."
        />
        <LeftBlock
          img={icon7}
          title="Travel"
          color={color3}
          desc="Our team of experts delivers custom website solutions for companies, depending on their needs. We conduct a complete research on the market trends and use top technological elements for scalable website develop- pment with customizable features."
        />
        <LeftBlock
          img={icon8}
          title="Media"
          color={color4}
          desc="Our team of experts delivers custom website solutions for companies, depending on their needs. We conduct a complete research on the market trends and use top technological elements for scalable website develop- pment with customizable features."
        />
        <LeftBlock
          img={icon9}
          title="Hospitality"
          color={color1}
          desc="Our team of experts delivers custom website solutions for companies, depending on their needs. We conduct a complete research on the market trends and use top technological elements for scalable website develop- pment with customizable features."
        />
      </div>
    </div>
  );
};

export default DigitalWorks;
