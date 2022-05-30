import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import product1 from "../../assets/digitalmarketing/tab1.png";
import product2 from "../../assets/digitalmarketing/tab2.png";
import product3 from "../../assets/digitalmarketing/tab3.png";
import CommonHeading from "../commonHeading/CommonHeading";
import "./DigitalSlider.css";
import sliderleft from "../../assets/digitalmarketing/leftcorner.png";
import sliderright from "../../assets/digitalmarketing/rightcorner.png";

const DigitalSlider = () => {
  return (
    <div className="mobileSlider_cover">
        <CommonHeading
       subHead="OUR WORKS"
       mainB1="Our Digital Marketing Portfolios"
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
