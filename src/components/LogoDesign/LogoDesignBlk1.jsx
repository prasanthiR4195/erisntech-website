import React from "react";
import CommonHeading from "../commonHeading/CommonHeading";
import business0 from "../../assets/logodesign/logo_design_style.png";
import business1 from "../../assets/logodesign/brand_guide.png";
import business2 from "../../assets/logodesign/intro_outro_design.png";
import business3 from "../../assets/logodesign/stationery_design.png";

import NormalBlks from "../BlockSection/NormalBlks";

const LogoDesignBlk1 = () => {
  return (
    <div className="logoDesignBlk1_cover">
      <CommonHeading 
        mainB1="Logo Designing Services"
      />
      <div className="logoDesignBlk1_inner">
        <NormalBlks
          img={business0} 
          head="Logo Design Style"
          para="Lorem Ipsum is simply dummy text of he printing and all of it" 
        />
        <NormalBlks
          img={business1}
          head="Brand Guide"
          para="Lorem Ipsum is simply dummy text of he printing and all of it" 
        />
        <NormalBlks
          img={business2}
          head="Intro/Outro Design"
          para="Lorem Ipsum is simply dummy text of he printing and all of it" 
        />
        <NormalBlks
          img={business3}
          head="Stationery Design"
          para="Lorem Ipsum is simply dummy text of he printing and all of it" 
        />
      </div>
    </div>
  );
};

export default LogoDesignBlk1;
