import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "./Slider.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import react from '../../assets/homepage/react.png'
import swift from '../../assets/homepage/swift.png'
import flutter from '../../assets/homepage/flutter.png'
import kotlin from '../../assets/homepage/kotlin.png'
import codeigniter from '../../assets/homepage/codeigniter.png'
import php from '../../assets/homepage/php.png' 

const Techslider = () => {
  return (
    <div className="tech_slider_wrap">
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
        items="6" 
        autoplay="true"
        autoplayTimeout="5000"
      >
        <div className="item">
          <img src={react} alt="product" />
          <h5>React JS</h5>
        </div>
        <div className="item">
          <img src={swift} alt="product" />
          <h5>Swift</h5>
        </div>
        <div className="item">
          <img src={flutter} alt="product" />
          <h5>Flutter</h5>
        </div>
        <div className="item">
          <img src={kotlin} alt="product" />
          <h5>Kotlin</h5>
        </div>
        <div className="item">
          <img src={codeigniter} alt="product" />
          <h5>Codeigniter</h5>
        </div>
        <div className="item">
          <img src={php} alt="product" />
          <h5>PHP</h5>
        </div> 
      
      </OwlCarousel>
     
    </div>
  )
}

export default Techslider