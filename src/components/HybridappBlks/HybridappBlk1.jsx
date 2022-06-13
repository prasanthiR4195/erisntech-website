import React from 'react'
import BusinessBlk from '../Business/BusinessBlk';
import CommonHeading from '../commonHeading/CommonHeading'
import hybrid1 from "../../assets/hybridapp/hybrid_app_design.png";
import hybrid2 from "../../assets/hybridapp/hybrid_app_development.png";
import hybrid3 from "../../assets/hybridapp/hybrid_app_integration.png";
import hybrid4 from "../../assets/hybridapp/hybrid_app_maintenance.png";
import hybrid5 from "../../assets/hybridapp/hybrid_app_testing.png";
import hybrid6 from "../../assets/hybridapp/reseting_to_hybrid_framework.png";

const HybridappBlk1 = () => {
  return (
    <div className='hybridappBlk1_cover'>
        <CommonHeading 
        subHead="OUR SERVICES"
        mainB1="Logo Designing Services"
      />
      <div className='hybridappBlk1_inner'> 
           <BusinessBlk
             img={hybrid1}
             title="Hybrid App Design"
             desc="Lorem Ipsum is the simply dummy text of the printing" 
             bg="#E3163D"
            /> 
              <BusinessBlk
             img={hybrid2}
             title="Hybrid App Development"
             desc="Lorem Ipsum is the simply dummy text of the printing" 
             bg="#049CE5"
            /> 
              <BusinessBlk
             img={hybrid3}
             title="Hybrid App Integration"
             desc="Lorem Ipsum is the simply dummy text of the printing" 
             bg="#63BC6F"
            /> 
              <BusinessBlk
             img={hybrid4}
             title="Resetting to Hybrid Frameworks"
             desc="Lorem Ipsum is the simply dummy text of the printing" 
             bg="#598695"
            /> 
              <BusinessBlk
             img={hybrid5}
             title="Hybrid App Testing"
             desc="Lorem Ipsum is the simply dummy text of the printing" 
             bg="#FFB74D"
            /> 
              <BusinessBlk
             img={hybrid6}
             title="Hybrid App Maintenance"
             desc="Lorem Ipsum is the simply dummy text of the printing" 
             bg="#2CC2D6"
            /> 
      </div>
    </div>
  )
}

export default HybridappBlk1