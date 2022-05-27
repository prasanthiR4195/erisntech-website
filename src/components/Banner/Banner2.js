import React from "react";
import Button from "../CommonButton/Button";
import "./Banner2.css";

const Banner2 = () => {
  return (
    <div className="banner_bg">
      <div className="banner_inner">
        <div className="banner_inner_left">
          <h3>
            OUR <span>DIVERSE</span>
          </h3>
          <h1>
            Boost Brand Awareness Among Customers And empower 
            <span> Your Business</span>
          </h1>
          <p>
            Erisn specializes in the whole gamut of IT services such as software
            development solutions, digital marketing, SEO services, web design,
            development and services etc.
          </p>
          <p> 
            Our smart and effective solutions can help clients achieve
            profitable goals. We use a structured result-driven approach that
            can help our partners get ahead of the competition.
          </p>
          <Button>Discuss With Us</Button>
        </div>
        <div className="banner_inner_right">
          <img src="assets/partnerwithus/banner.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner2;
