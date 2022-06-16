import React from 'react'
import CommonHeading from '../commonHeading/CommonHeading'
import "../../containers/BrochureDesign/BrochureDesign.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import brochure1 from "../../assets/brochure/brochure1.png";
import brochure2 from "../../assets/brochure/brochure2.png";
import brochure3 from "../../assets/brochure/brochure3.png";
import sliderleft from "../../assets/brochure/slider_left.png";
import sliderright from "../../assets/brochure/slider_right.png";

const BrochureSlider = () => {
  return (
    <div className='BrochureSlider_cover'>
         <CommonHeading
            subHead="OUR WORK"
            mainB1="Samples of Our Brochure & Flyer Design"
        />
        <div className='BrochureSlider_inner'>
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
                
                <div className="item">
                    <img src={brochure1} alt="product" />
                </div>
                <div className="item">
                    <img src={brochure2} alt="product" />
                </div>
                <div className="item">
                    <img src={brochure3} alt="product" />
                </div>
                <div className="item">
                    <img src={brochure3} alt="product" />
                </div>
       
            </OwlCarousel>
        </div>

    </div>
  )
}

export default BrochureSlider