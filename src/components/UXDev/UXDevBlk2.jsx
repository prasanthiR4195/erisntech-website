import React from "react";
import CommonHeading from "../commonHeading/CommonHeading";
import '../../containers/UXDev/UXDev.css'
import SwBlocks from "../SoftwareDevBlks/SwBlocks";
import icon1 from '../../assets/UXDev/ux_strategy_and_consulting.png'
import icon2 from '../../assets/UXDev/website_design.png'
import icon3 from '../../assets/UXDev/mobile_app_design.png'
import icon4 from '../../assets/UXDev/user_testing.png'
import icon5 from '../../assets/UXDev/wireframes_and_blueprints.png'
import icon6 from '../../assets/UXDev/crossplatform_compatibility.png'



import color1 from '../../assets/webdev/color1.png'
import color2 from '../../assets/webdev/color2.png'
import color3 from '../../assets/webdev/color3.png'
import color4 from '../../assets/webdev/color4.png'
import color5 from '../../assets/webdev/color5.png'

const UXDevBlk2 = () => {
  return (
    <div className="UXDevBlk2_cover">
      <CommonHeading mainB1="Latest Technologies Used by Our Mobile App Developers" />
      <div className="UXDevBlk2_inner">
        <SwBlocks
          img={icon1}
          num="1"
          head="Education"
          color={color1}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
          <SwBlocks
          img={icon2}
          num="1"
          head="Education" 
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
          <SwBlocks
          img={icon3}
          num="1"
          head="Education" 
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
          <SwBlocks
          img={icon4}
          num="1"
          head="Education" 
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
          <SwBlocks
          img={icon5}
          num="1"
          head="Education" 
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
          <SwBlocks
          img={icon6}
          num="1"
          head="Education" 
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
      </div>
    </div>
  );
};

export default UXDevBlk2;
