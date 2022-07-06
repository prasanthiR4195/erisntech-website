import React from "react";
import "./UXDesignBlk5.css";
import CommonHeading from "../commonHeading/CommonHeading";
import WorkBlock from "../WorkIcons/WorkBlock";
import UX1 from "../../assets/uiux/UX1.png";
import UX2 from "../../assets/uiux/UX2.png";
import UX3 from "../../assets/uiux/UX3.png";
import UX4 from "../../assets/uiux/UX4.png";
import color1 from "../../assets/softwaredev/color1.png";
import color2 from "../../assets/softwaredev/color2.png";
import color3 from "../../assets/softwaredev/color3.png";
import color4 from "../../assets/softwaredev/color4.png"; 
const UXDesignBlk5 = () => {
  return (
    <div className="UXDesignBlk5_cover">
      <CommonHeading mainB1="Partner with Us for Optimal Corporate Branding Services" para=" Check out why ErisnTech is your best bet to receive excellent and
        comprehensive corporate branding services:"/>
       
      <div className="UXDesignBlk5_inner">
        <WorkBlock
          img={UX1}
          head="Extensive Research"
          num="1"
          color={color1}
          para="We start working with a complete understanding of your target audience and value propositions."
        />
        <WorkBlock
          img={UX2}
          head="Original and Customized"
          num="2"
          color={color2}
          para="We don’t believe in generic templates and deliver 100% original and custo- mized solutions."
        />
        <WorkBlock
          img={UX3}
          head="Team Work"
          num="3"
          color={color3}
          para="Our team will support each other to complete the given deadline to submit the project."
        />
        <WorkBlock
          img={UX4}
          head="Brand Consistency"
          num="4"
          color={color4}
          para="We ensure to maintain your brand niche across all the promotional materials to maximize its potential."
        />
      </div>
    </div>
  );
};

export default UXDesignBlk5;
