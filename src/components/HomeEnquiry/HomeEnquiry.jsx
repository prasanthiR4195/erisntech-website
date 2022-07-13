import React from "react";
import "./HomeEnquiry.css";
import Button from "../CommonButton/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import cube from "../../assets/homepage/work-inquiry-decor.png";
import Fade from 'react-reveal/Fade';

const HomeEnquiry = () => {
  return (
    <Fade bottom>
    <div className="homeEnquiry_wrap">
      <div className="homeEnquiry_inner">
        <img src={cube} className="home_cube" />
        <h4>Work Inquiry</h4>
        <p>Let's work together and build something awesome!</p>
        <Button buttonStyle="btn--primary--orange">
          Get a Quote <AiOutlineArrowRight className="arrow" />
        </Button>
      </div>
    </div>
    </Fade>
  );
};

export default HomeEnquiry;
