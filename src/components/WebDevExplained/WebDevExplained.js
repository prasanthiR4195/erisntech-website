import React from "react";
import "./WebDevExplained.css";
import Button from "../CommonButton/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import AOS from 'aos'

const WebDevExplained = ({
  headB1,
  headR,
  headB2,
  para,
  img,
  btn,
  para2,
  subhead,
  subhead2,
  subhead3,
  subhead4,
  para3
}) => { 
  AOS.init()
  return (
    <div className="web_dev_explained">
      <div className="web_dev_left">
        <div className="web_dev_heading" data-aos="fade-right" data-aos-delay="300">
          <h5>{subhead}</h5>
          <h4>
            {headB1} <span>{headR}</span> {headB2}
          </h4>
          <h5>{subhead2}</h5>
          <p>{para}</p> 
          <h5>{subhead3}</h5>
          <p>{para2}</p>
          <h5>{subhead4}</h5>
          <p>{para3}</p>
          {btn ? (
            <Button>
              Contact Us <AiOutlineArrowRight className="arrow" />
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="web_dev_right">
        <img src={img} alt="" data-aos="fade-left" data-aos-delay="300"/>
      </div>
    </div>
  );
};

export default WebDevExplained;
