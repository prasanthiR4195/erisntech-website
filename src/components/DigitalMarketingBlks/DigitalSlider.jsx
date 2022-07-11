import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import CommonHeading from "../commonHeading/CommonHeading";
import "./DigitalSlider.css";
import sliderleft from "../../assets/digitalmarketing/leftcorner.png";
import sliderright from "../../assets/digitalmarketing/rightcorner.png";

const DigitalSlider = ({product1,product2,product3,subhead,head}) => {
  const responsive ={
    0:{ 
      items:1
  },
  600:{
      items:3
  },
  1000:{
      items:3
  }
  }
  return (
    <div className="mobileSlider_cover">
        <CommonHeading
       subHead={subhead}
       mainB1={head}
       />

      <div className="digitalSlider_inner">
      <img src={sliderleft} className="sliderleft" />
      <img src={sliderright} className="sliderright" />
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          items="3"
          center
          nav="true"
          responsive={responsive}
        >
          {/* <div className="item">
       <img src={product1} alt="product" />
     </div> */}
          <div className="item">
            <img src={product1} alt="product" />
          </div>
          <div className="item">
            <img src={product2} alt="product" />
          </div>
          <div className="item">
            <img src={product3} alt="product" />
          </div>
          {/* <div className="item">
       <img src={product3} alt="product" />
     </div> 
     <div className="item">
       <img src={product3} alt="product" />
     </div>  */}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default DigitalSlider;
