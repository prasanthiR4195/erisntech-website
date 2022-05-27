import React from "react";
import "./Testimonial.css";
import LeftHeading from "../Left_heading/Left-Heading";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TestimonialBox from "./TestimonialBox";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../CommonButton/Button"; 
import onefurniture from '../../assets/homepage/onefurniture.png'
import venta from '../../assets/homepage/venta.png'
import krishakbazaar from '../../assets/homepage/krishakbazaar.png' 

const Testimonial = () => {
  return (
    <div className="testimonial_wrap">
      <div className="testimonial_inner">
        <div className="testimonial_left">
          <LeftHeading subHead="Testimonial" main="See what our clients say" />
          <p>
            Travelling assistance indulgence unpleasing. Not thoughts all
            exercise blessing. Indulgence way everything joy alteration
            boisterous the attachment. Party we years to order allow asked of.
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous.
          </p>
          <Button>
            View all <AiOutlineArrowRight className="arrow" />
          </Button>
        </div>
        <div className="testimonial_right">
          <div className="testimonial_main">
            <OwlCarousel
              className="owl-theme"
              margin={10}
              items="1"
              autoplay="true"
              autoplayTimeout="3000"
            >
              <div className="item">
                <TestimonialBox
                  desc="Lorem Ipsum is simply dummy text of the printing and for typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  clientName="Chris Morgan"
                  job="Founder & CEO of One Furniture"
                  img={onefurniture}
                />
              </div>
              <div className="item">
                <TestimonialBox
                  desc="Lorem Ipsum is simply dummy text of the printing and for typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  clientName="Chris Morgan"
                  job="Founder & CEO of One Furniture"
                  img={venta}
                />
              </div>
              <div className="item">
                <TestimonialBox
                  desc="Lorem Ipsum is simply dummy text of the printing and for typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  clientName="Chris Morgan"
                  job="Founder & CEO of One Furniture"
                  img={krishakbazaar}
                />
              </div>
              <div className="item">
                <TestimonialBox
                  desc="Lorem Ipsum is simply dummy text of the printing and for typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  clientName="Chris Morgan"
                  job="Founder & CEO of One Furniture"
                  img={onefurniture}
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
