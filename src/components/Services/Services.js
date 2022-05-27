import React from "react";
import "./Services.css";
import CommonHeading from "../commonHeading/CommonHeading";

import service1 from "../../assets/homepage/service1.png";
import service2 from "../../assets/homepage/service2.png";
import service3 from "../../assets/homepage/service3.png";
import service4 from "../../assets/homepage/service4.png";

const Services = () => {
  return (
    <div className="services_wrap">
      <CommonHeading 
        mainB1="We provide truly prominent IT solutions for your success" 
      />
      <div className="service_inner">
          <div className="serviceBlk">
              <img src={service1} />
              <h4>Expert Team</h4>
              <p>Accelerate innovation with world-class tech teams</p>
          </div>
          <div className="serviceBlk">
              <img src={service2} />
              <h4>Quality Control</h4>
              <p>Accelerate innovation with world-class tech teams</p>
          </div>
          <div className="serviceBlk">
              <img src={service3} />
              <h4>Integration</h4>
              <p>Accelerate innovation with world-class tech teams</p>
          </div>
          <div className="serviceBlk">
              <img src={service4} />
              <h4>100% Support</h4>
              <p>Accelerate innovation with world-class tech teams</p>
          </div>
      </div>
    </div>
  );
};

export default Services;
