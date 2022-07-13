import React from "react";
import CommonHeading from "../commonHeading/CommonHeading";
import color1 from '../../assets/webdev/color1.png'
import color2 from '../../assets/webdev/color2.png'
import color3 from '../../assets/webdev/color3.png'
import color4 from '../../assets/webdev/color4.png'
import color5 from '../../assets/webdev/color5.png' 

import icon1 from '../../assets/products/everything_at_once.png'
import icon2 from '../../assets/products/support_them.png' 
import Fade from 'react-reveal/Fade';
import PPCBlock from "../PPCBlks/PPCBlock";

const HMSBlock1 = () => {
  const data = [
    {
      img:icon1,
      color:color1,
      head:"Bring your staff together",
      para:"Personalized dashboards for every department, including the doctors, front desk, nursing and admin, where the data can be shared and accessed"
    },
    {
      img:icon1,
      color:color2,
      head:"Everything at once",
      para:"Organize patient medical history, pathology reports, per- ceptions, stock, documentation, and timelines in one single location"
    },
    {
      img:icon2,
      color:color3,
      head:"Support them where they are",
      para:"Fully meet patient requirements with a multi-way appoin- ttment system, bed availability status and automated messaging"
    },
    {
      img:icon2,
      color:color4,
      head:"Active involvement all around",
      para:"An in-patient, hospital charges, ward creation, out-patie- nt, inventory and pharmacy module ensure complete care"
    }  
  ]
  return (
    <div className="HMSBlock1_cover">
      <CommonHeading mainB1="Deliver better outcomes with lesser compliances" />
      <Fade bottom>
        <p className="PPCBlk1_para">
        ErisnTech automates repetitive processes, improves workflows, and securely shares protected health information so you can focus on providing the best care to those who trust you. With end-to-end service integration, it can go seamlessly from booking a virtual appointment to managing the equipment inventory. Our hospital management system supports you to make everyday functions easier, simpler and streamlined.
        </p>
        </Fade>
        <Fade bottom>
        <div className="HMSBlock_top">
          <div className="HMSBlock_top_inner">
          <span>25+</span>Modules
          </div>
          <div className="HMSBlock_top_inner">
          <span>8 Built-in</span> User Panels
          </div>
          <div className="HMSBlock_top_inner">
            <span>Ready for every </span>healthcare facility
          </div>
        </div>
      </Fade>
      <div className="contentBlock1_inner">
        {data.map((index) => {
          return (
            <Fade bottom>
              {" "}
              <PPCBlock
                color={index.color}
                icon={index.img}
                head={index.head}
                para={index.para}
              />
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default HMSBlock1;
