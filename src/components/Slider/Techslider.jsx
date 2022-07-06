import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "./Slider.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Techslider = ({product1,product2,product3,product4,product5,product6,product_name1,product_name2,product_name3,product_name4,product_name5,product_name6}) => {
  const responsive ={
    0:{
      items:1
  },
  600:{
      items:3
  },
  1000:{
      items:5
  }
  }
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
        responsive ={responsive}
      >
        <div className="item">
          <img src={product1} alt="product" />
          <h5>{product_name1}</h5>
        </div>
        <div className="item">
          <img src={product2} alt="product" />
          <h5>{product_name2}</h5>
        </div>
        <div className="item">
          <img src={product3} alt="product" />
          <h5>{product_name3}</h5>
        </div>
        <div className="item">
          <img src={product4} alt="product" />
          <h5>{product_name4}</h5>
        </div>
        <div className="item">
          <img src={product5} alt="product" />
          <h5>{product_name5}</h5>
        </div>
        {product6 ?  <div className="item">
          <img src={product6} alt="product" />
          <h5>{product_name6}</h5>
        </div>  : ""}
       
      
      </OwlCarousel>
     
    </div>
  )
}

export default Techslider