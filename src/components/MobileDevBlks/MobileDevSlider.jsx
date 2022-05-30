import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CommonHeading from "../commonHeading/CommonHeading";
import "./MobileDevSlider.css";
import product1 from "../../assets/mobiledev/product1.png";
import product2 from "../../assets/mobiledev/product2.png";
import product3 from "../../assets/mobiledev/product3.png";
import sliderleft from "../../assets/mobiledev/leftcorner.png";
import sliderright from "../../assets/mobiledev/rightcorner.png";

const MobileDevSlider = () => {
  return (
    <div className="mobileSlider_cover">
      <CommonHeading
        mainB1="We build successful, lasting, "
        mainR="profitable products"
      />
    <div className="mobiledevSlider_inner">
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

export default MobileDevSlider;
