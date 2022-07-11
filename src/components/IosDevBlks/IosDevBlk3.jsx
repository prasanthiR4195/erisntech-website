import React from "react";
import SwBlocks from "../SoftwareDevBlks/SwBlocks";
import CommonHeading from "../commonHeading/CommonHeading";
import icon1 from "../../assets/mobiledev/icon1.png";

import color1 from "../../assets/webdev/color1.png";
import color2 from "../../assets/webdev/color2.png";
import color3 from "../../assets/webdev/color3.png";
import color4 from "../../assets/webdev/color4.png";
import color5 from "../../assets/webdev/color5.png";
import Fade from 'react-reveal/Fade';

const IosDevBlk3 = () => {
    const data = [
        {
            img:icon1,
            head:'Education',
            color:color1,
            para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            img:icon1,
            head:'Booking ',
            color:color2,
            para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            img:icon1,
            head:'Healthcare ',
            color:color3,
            para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            img:icon1,
            head:'Delivery ',
            color:color4,
            para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            img:icon1,
            head:'Ecommerce ',
            color:color5,
            para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            img:icon1,
            head:'Food Service ',
            color:color1,
            para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            img:icon1,
            head:'Travel ',
            color:color2,
            para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            img:icon1,
            head:' Fitness',
            color:color3,
            para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        }
    ]
  return (
    <div className="IosDevBlk3_cover">
      <CommonHeading mainB1="Industries We Serve" />
      <Fade bottom>
      <p className="IosDevBlk3_para">
        Our iOS mobile development services are focused on providing an
        immersive and highly enriching experience to the user across different
        sectors. Presently we are catering to the following verticals
      </p>
      </Fade>
      <div className="IosDevBlk3_inner">
        {data.map((index)=>{
            return  <SwBlocks
            img={index.img} 
            head={index.head}
            color={index.color}
            para={index.para}
          />
        })}
 
      </div>
    </div>
  );
};

export default IosDevBlk3;
