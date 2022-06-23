import React from 'react'
import CommonHeading from '../commonHeading/CommonHeading'
import "../../containers/BrochureDesign/BrochureDesign.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import sliderleft from "../../assets/brochure/slider_left.png";
import sliderright from "../../assets/brochure/slider_right.png";

const BrochureSlider = ({item1,item2,item3,}) => {
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
    <div className='BrochureSlider_cover'>
         <CommonHeading
            subHead="OUR WORK"
            mainB1="Samples of Our Brochure & Flyer Design"
        />
        <div className='BrochureSlider_inner'>
        <img src={sliderleft} className="sliderleft" alt="brochure design slider" />
            <img src={sliderright} className="sliderright" alt="brochure design slider" />
            <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                items="3"
                center
                nav="true"
                responsive={responsive}
            >
                
                <div className="item">
                    <img src={item1} alt="product" />
                </div>
                <div className="item">
                    <img src={item2} alt="product" />
                </div>
                <div className="item">
                    <img src={item3} alt="product" />
                </div>
                <div className="item">
                    <img src={item3} alt="product" />
                </div>
       
            </OwlCarousel>
        </div>

    </div>
  )
}

export default BrochureSlider