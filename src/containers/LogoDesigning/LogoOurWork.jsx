import React from "react";
import CommonHeading from "../../components/commonHeading/CommonHeading";
import logo1 from "../../assets/logodesign/onefurniture_logo.png";
import logo2 from "../../assets/logodesign/venta_logo.png";
import logo3 from "../../assets/logodesign/blackboard_logo.png";
import logo4 from "../../assets/logodesign/krishakbazaar-logo.png";
import logo5 from "../../assets/logodesign/onefurniture_logo.png";
import logo6 from "../../assets/logodesign/kpl_logo.png";
import logo7 from "../../assets/logodesign/aphane_logo.png";
import logo8 from "../../assets/logodesign/wshop_logo.png";
import logo9 from "../../assets/logodesign/erisnclassroom_logo.png";
import logo10 from "../../assets/logodesign/mnb_logo.png";

const LogoOurWork = () => {
  return (
    <div className="LogoOurWork_cover">
      <CommonHeading mainB1="Our works" />
      <p className="logo_ourwork_para">
        You don't have to take our word for anything. Here, take a look at some
        of the stuff we've done. It perfectly showcases our approach, our
        values, and our work ethic.
      </p>
      <div className="LogoOurWork_inner">
          <div className="ourwork_blk"><img src={logo1} alt="" /></div>
          <div className="ourwork_blk"><img src={logo2} alt="" /></div>
          <div className="ourwork_blk"><img src={logo3} alt="" /></div>
          <div className="ourwork_blk"> <img src={logo4} alt="" /></div>
          <div className="ourwork_blk"><img src={logo5} alt="" /></div>
          <div className="ourwork_blk"><img src={logo6} alt="" /></div>
          <div className="ourwork_blk"><img src={logo7} alt="" /></div>
          <div className="ourwork_blk"><img src={logo8} alt="" /></div>
          <div className="ourwork_blk"> <img src={logo9} alt="" /></div>
          <div className="ourwork_blk"> <img src={logo10} alt="" /> </div>
      </div>

    </div>
  );
};

export default LogoOurWork;
