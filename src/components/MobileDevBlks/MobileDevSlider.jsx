import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CommonHeading from "../commonHeading/CommonHeading";
import './MobileDevSlider.css'
import product1 from "../../assets/mobiledev/product1.jpg";
import product2 from "../../assets/mobiledev/product2.jpg";
import product3 from "../../assets/mobiledev/product3.jpg"; 

const MobileDevSlider = () => {
  return (
    <div className="mobileSlider_cover">
       <CommonHeading
        mainB1="We build successful, lasting, " 
        mainR="profitable products"
      />
      <OwlCarousel className="owl-theme" loop margin={10} items="3" center nav="true">
    
        {/* <div className="item">
          <img src={product1} alt="product" />
        </div> */}
        <div className="item">
          <img src={product2} alt="product" />
        </div>
        <div className="item">
          <img src={product2} alt="product" />
        </div>
        <div className="item">
          <img src={product2} alt="product" />
        </div>
        {/* <div className="item">
          <img src={product3} alt="product" />
        </div> 
        <div className="item">
          <img src={product3} alt="product" />
        </div>  */}
      </OwlCarousel>
    </div>
  );
};

export default MobileDevSlider;
