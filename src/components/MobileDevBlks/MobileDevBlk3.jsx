import React from "react";
import solution1 from "../../assets/webdev/icon1.png";
import CommonHeading from "../commonHeading/CommonHeading";
import WorkBlock from "../WorkIcons/WorkBlock";
import "./MobileDevBlk3.css";
import color1 from '../../assets/webdev/color1.png'
import color2 from '../../assets/webdev/color2.png'
import color3 from '../../assets/webdev/color3.png'
import color4 from '../../assets/webdev/color4.png'
import color5 from '../../assets/webdev/color5.png'


const MobileDevBlk3 = () => {
  return (
    <div className="">
      <CommonHeading mainB1="Why Clients Choose Us?" />
      <p className="softwareSolution_para">
        Boost your existing development team to complete a project or create a
        new software application from the start with ErisnTech.
      </p>
      <div className="MobileDevBlk3_inner">
        <WorkBlock
          img={solution1}
          head="Customer Friendly"
          num="1"
          color={color1}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <WorkBlock
          img={solution1}
          head="Team of Experts"
          num="2"
          color={color2}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <WorkBlock
          img={solution1}
          head="Quality Assurance"
          num="3"
          color={color3}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </div>
    </div>
  );
};

export default MobileDevBlk3;
