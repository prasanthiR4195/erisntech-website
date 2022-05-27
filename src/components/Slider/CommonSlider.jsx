import React from "react";
import "./Slider.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CommonHeading from "../commonHeading/CommonHeading";
import "./CommonSlider.css";
import onefurniture from '../../assets/homepage/onefurniture.png'
import venta from '../../assets/homepage/venta.png'
import blackboard from '../../assets/homepage/blackboard.png'
import krishakbazaar from '../../assets/homepage/krishakbazaar.png'
import tajbakery from '../../assets/homepage/tajbakery.png' 

const CommonSlider = ({ subHead, mainB1 }) => {
  return (
    <div className="common_slider_wrap">
      <CommonHeading subHead={subHead} mainB1={mainB1} />
      <div className="common_slider_inner">
        <OwlCarousel className="owl-theme" loop margin={10} items="5">
          <div className="item">
            <img src={onefurniture} alt="product" />
          </div>
          <div className="item">
            <img src={venta} alt="product" />
          </div>
          <div className="item">
            <img src={blackboard} alt="product" />
          </div>
          <div className="item">
            <img src={krishakbazaar} alt="product" />
          </div>
          <div className="item">
            <img src={tajbakery} alt="product" />
          </div>
          <div className="item">
            <img src={onefurniture} alt="product" />
          </div>
          <div className="item">
            <img src={venta} alt="product" />
          </div>
          <div className="item">
            <img src={blackboard} alt="product" />
          </div>
          <div className="item">
            <img src={krishakbazaar} alt="product" />
          </div>
          <div className="item">
            <img src={tajbakery} alt="product" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default CommonSlider;
