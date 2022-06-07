import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import product1 from "../../assets/androiddev/mob1.png";
import product2 from "../../assets/androiddev/mob2.png";
import product3 from "../../assets/androiddev/mob3.png";
import './AndroidSlider.css'

const AndroidSlider = () => {
  return (
    <div className="slider_wrap androidSlider_wrap">
      <div className="slider_head">
        <h5>OUR WORK</h5>
        <h2>We have done lot of Business latest case studies</h2>
      </div>
      <div className="androidSlider">
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          items="3"
          center="true"
          nav
        >
          <div className="item">
            <img src={product1} alt="product" />
          </div>
          <div className="item">
            <img src={product2} alt="product" />
          </div>
          <div className="item">
            <img src={product3} alt="product" />
          </div>
          <div className="item">
            <img src={product3} alt="product" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default AndroidSlider;
