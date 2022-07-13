import React from "react";
import CommonHeading from "../commonHeading/CommonHeading";
import LeftBlock from "../BlockSection/LeftBlock";

import icon1 from "../../assets/specialist/fashion.png";
import icon2 from "../../assets/specialist/retail.png";
import icon3 from "../../assets/specialist/healthcare.png";
import icon4 from "../../assets/specialist/travel.png";
import icon5 from "../../assets/specialist/food.png";
import icon6 from "../../assets/specialist/education.png";
import icon7 from "../../assets/specialist/fitness.png";
import icon8 from "../../assets/specialist/insurance.png";
import color1 from "../../assets/webdev/color1.png";
import color2 from "../../assets/webdev/color2.png";
import color3 from "../../assets/webdev/color3.png"; 
import color4 from "../../assets/webdev/color4.png";
import color5 from "../../assets/webdev/color5.png";

const SpecialistBlk2 = () => { 
  return (
    <div className="SpecialistBlk2_cover">
      <CommonHeading
        subHead="WE FOCUSED ON"
        mainB1="SEO Service we focused on"
      />
      <p className="SpecialistBlk2_para">
        Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam
        nonumy eirmod temporod
      </p>

      <div className="SpecialistBlk2_inner">
        <LeftBlock
          img={icon1}
          title="Fashion"
          color={color1}
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <LeftBlock
          img={icon2}
          title="Retail & Ecommerce"
          color={color2}
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <LeftBlock
          img={icon3}
          title="Healthcare"
          color={color3}
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <LeftBlock
          img={icon4}
          title="Travel"
          color={color4}
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <LeftBlock
          img={icon5}
          title="Food Service"
          color={color5}
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <LeftBlock
          img={icon6}
          title="Education"
          color={color1}
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <LeftBlock
          img={icon7}
          title="Fitness"
          color={color2}
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <LeftBlock
          img={icon8}
          title="Insurance"
          color={color3}
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
      </div>
    </div>
  );
};

export default SpecialistBlk2;
