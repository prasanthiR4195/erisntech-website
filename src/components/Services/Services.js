import React from "react";
import "./Services.css";
import CommonHeading from "../commonHeading/CommonHeading";

import service1 from "../../assets/homepage/Expert_Team.png";
import service2 from "../../assets/homepage/Quality_Control.png";
import service3 from "../../assets/homepage/Integration.png";
import service4 from "../../assets/homepage/100_Support.png";
import Fade from 'react-reveal/Fade';

const Services = () => {
  return (
    <div className="services_wrap">
      <CommonHeading 
        mainB1="We provide truly prominent IT solutions for your success" 
      />
      <div className="service_inner">
      <Fade bottom>
          <div className="serviceBlk">
              <img src={service1} alt="expert team" width="55px" />
              <h4>Expert Team</h4>
              <p>Accelerate innovation with world-class tech teams</p>
          </div>
          </Fade>
          <Fade bottom>
          <div className="serviceBlk">
              <img src={service2} alt="quality control" width="55px"/>
              <h4>Quality Control</h4>
              <p>Accelerate innovation with world-class tech teams</p>
          </div>
          </Fade>
          <Fade bottom>
          <div className="serviceBlk">
              <img src={service3} alt="integration" width="55px"/>
              <h4>Integration</h4>
              <p>Accelerate innovation with world-class tech teams</p>
          </div>
          </Fade>
          <Fade bottom>
          <div className="serviceBlk">
              <img src={service4} alt="100% support" width="55px"/>
              <h4>100% Support</h4>
              <p>Accelerate innovation with world-class tech teams</p>
          </div>
          </Fade>
      </div>
    </div>
  );
};

export default Services;
