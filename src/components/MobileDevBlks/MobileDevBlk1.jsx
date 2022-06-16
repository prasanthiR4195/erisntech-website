import React from "react";
import CommonHeading from "../commonHeading/CommonHeading";
import "./MobileDevBlk1.css"; 
import android from  '../../assets/mobiledev/android.png'
import apple from '../../assets/mobiledev/apple.png'
import hybrid from '../../assets/mobiledev/hybrid.png'
import { Link, useLocation } from "react-router-dom";
import NormalBlks from "../BlockSection/NormalBlks";

const MobileDevBlk1 = () => {
  return (
    <div className="mobile_dev_blk1_cover">
      <CommonHeading
        mainB1="Latest Technologies Used by Our Mobile App Developers"
        headWithOrngBg="Our Services"
      />
      <p className="mob_dev_para">
        Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam
        nonumy eirmod temporod
      </p>
      <div className="mobile_dev_blk1_inner">
        <Link to="/androiddev">
        <NormalBlks
          img={android}
          head="Android App Development Services"
          para="We offer end-to-end mobile app development services to your businesses" 
        />
        </Link>
        <NormalBlks
          img={apple}
          head="IOS App Development Services"
          para="We offer end-to-end mobile app development services to your businesses" 
        />
         <Link to="/hybridapp">
        <NormalBlks
          img={hybrid}
          head="Hybrid App Development Services"
          para="We offer end-to-end mobile app development services to your businesses" 
        />
        </Link>
      </div>
    </div>
  );
};

export default MobileDevBlk1;
