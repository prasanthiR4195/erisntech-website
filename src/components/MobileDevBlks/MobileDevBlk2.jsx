import React from "react";
import CommonHeading from "../commonHeading/CommonHeading";
import SwBlocks from "../SoftwareDevBlks/SwBlocks";
import solution1 from "../../assets/webdev/education.png";
import "./MobileDevBlk2.css";
import icon1 from '../../assets/mobiledev/icon1.png'
import icon2 from '../../assets/mobiledev/icon2.png'
import icon3 from '../../assets/mobiledev/icon3.png'
import icon4 from '../../assets/mobiledev/icon4.png'
import icon5 from '../../assets/mobiledev/icon5.png'
import icon6 from '../../assets/mobiledev/icon6.png'
import icon7 from '../../assets/mobiledev/icon7.png'
import icon8 from '../../assets/mobiledev/icon8.png'
import icon9 from '../../assets/mobiledev/icon9.png'
import icon10 from '../../assets/mobiledev/icon10.png'
import icon11 from '../../assets/mobiledev/icon11.png'
import color1 from '../../assets/webdev/color1.png'
import color2 from '../../assets/webdev/color2.png'
import color3 from '../../assets/webdev/color3.png'
import color4 from '../../assets/webdev/color4.png'
import color5 from '../../assets/webdev/color5.png'


const MobileDevBlk2 = () => {
  return (
    <div className="mobileDevBlk2_cover">
      <CommonHeading mainB1="Latest Technologies Used by Our Mobile App Developers" />
      <p className="mobileDev_para">
        Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam
        nonumy eirmod temporod
      </p>
      <div className="mobileDevBlk2_inner">
        <SwBlocks
          img={icon1}
          num="1"
          head="Education"
          color={color1}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <SwBlocks
          img={icon2}
          num="2"
          head="Booking"
          color={color2}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <SwBlocks
          img={icon3}
          num="3"
          head="Healthcare"
          color={color3}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <SwBlocks
          img={icon4}
          num="4"
          head="Delivery"
          color={color4}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <SwBlocks
          img={icon5}
          num="5"
          head="Ecommerce"
          color={color5}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <SwBlocks
          img={icon6}
          num="6"
          head="Social Networking"
          color={color2}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <SwBlocks
          img={icon7}
          num="1"
          head="Food Service"
          color={color1}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <SwBlocks
          img={icon8}
          num="2"
          head="Fitness"
          color={color3}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <SwBlocks
          img={icon9}
          num="3"
          head="Travel"
          color={color4}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
     <SwBlocks
          img={icon10}
          num="3"
          head="Media"
          color={color1}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <SwBlocks
          img={icon11}
          num="3"
          head="Hospitality"
          color={color2}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
      </div>
    </div>
  );
};

export default MobileDevBlk2;
