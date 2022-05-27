import React from "react";
import CommonHeading from "../commonHeading/CommonHeading";
import "./SoftwareDeBlk1.css";
import MovingBlk from "./MovingBlk"; 
import color1 from '../../assets/softwaredev/color1.png'
import color2 from '../../assets/softwaredev/color2.png'
import color3 from '../../assets/softwaredev/color3.png' 
import icon1 from '../../assets/softwaredev/icon1.png'
import icon2 from '../../assets/softwaredev/icon2.png'
import icon3 from '../../assets/softwaredev/icon3.png'

const SoftwareDevBlk3 = () => {
  return (
    <div className="swDevBlk3_cover">
      <CommonHeading
        headWithOrngBg="Our Services"
        mainB1="We Have On-Demand Developers"
      />
      <p className="inner_paragraph">
        We are delighted to have employed many developers with many years of
        experience in custom software development and they have access to the
        open-source Cloud-based which provides an enhanced web service
        infrastructure.
      </p>
      <div className="swDevBlk3_inner">
        <div className="swInnerRightBlk">
          <MovingBlk color={color3} icon={icon1}/>
          <h5>Real-Time Communication</h5>
          <p>Lorem Ipsum is simply dummy text of he printing and all of it</p>
        </div>
        <div className="swInnerRightBlk">
          <MovingBlk color={color2} icon={icon2}/>
          <h5>You Own the Source Code</h5>
          <p>Lorem Ipsum is simply dummy text of he printing and all of it</p>
        </div>
        <div className="swInnerRightBlk">
          <MovingBlk color={color1} icon={icon3}/>
          <h5>Business Model Scale</h5>
          <p>Lorem Ipsum is simply dummy text of he printing and all of it</p>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevBlk3;
