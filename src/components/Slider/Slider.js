import React from "react";
import "./Slider.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import { AiOutlineArrowRight } from "react-icons/ai"; 

import product1 from '../../assets/homepage/product-1.png'
import product2 from '../../assets/homepage/product-2.png'
import product3 from '../../assets/homepage/product-3.png' 

 

const Slider = () => {
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
    <div className="slider_wrap">
      <div className="slider_head">
        <h5>OUR WORK</h5>
        <h2>We have done lot of Business latest case studies</h2>
      </div>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10} 
        items="3"
        center="true" 
        nav 
        responsive={responsive}
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
  );
};

export default Slider;
