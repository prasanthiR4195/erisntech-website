import React from "react";
import icon1 from "../../assets/brochure/pro_images.png";
import icon2 from "../../assets/brochure/modern_fonts.png";
import icon3 from "../../assets/brochure/specific_content.png";
import icon4 from "../../assets/brochure/blending.png";
import NormalBlks from "../BlockSection/NormalBlks";
import CommonHeading from "../commonHeading/CommonHeading";
import "../../containers/BrochureDesign/BrochureDesign.css";

const BrochureBlk1 = () => {
  return (
    <div className="BrochureBlk1_cover">
      <CommonHeading
        subHead="OUR SERVICES"
        mainB1="Top Brochure Design Company in India"
      />
      <p className="brochure_para">
        Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam
        nonumy eirmod temporod
      </p>
      <b className="brochure_bold">
        What makes our business brochure designs unique?
      </b>
      <div className="BrochureBlk1_inner">
        <NormalBlks
          img={icon1}
          head="Pro Images"
          para="Lorem Ipsum is simply dummy text of he printing and"
        />
        <NormalBlks
          img={icon2}
          head="Modern Fonts"
          para="Lorem Ipsum is simply dummy text of he printing and"
        />
        <NormalBlks
          img={icon3}
          head="Specific Content"
          para="Lorem Ipsum is simply dummy text of he printing and"
        />
        <NormalBlks
          img={icon4}
          head="Blending"
          para="Lorem Ipsum is simply dummy text of he printing and"
        />
      </div>
    </div>
  );
};

export default BrochureBlk1;
