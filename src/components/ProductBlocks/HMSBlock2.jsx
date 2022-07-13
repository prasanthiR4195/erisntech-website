import React from "react";
import Fade from "react-reveal/Fade";
import LeftBlock from "../BlockSection/LeftBlock";
import CommonHeading from "../commonHeading/CommonHeading";

import icon1 from "../../assets/products/opd.png";
import icon2 from "../../assets/products/omnipresent.png";
import icon3 from "../../assets/products/insurance.png";
import icon4 from "../../assets/products/be_ready.png";
import icon5 from "../../assets/products/reception.png";
import color1 from "../../assets/webdev/color1.png";
import color2 from "../../assets/webdev/color2.png";
import color3 from "../../assets/webdev/color3.png";
import color4 from "../../assets/webdev/color4.png";
import color5 from "../../assets/webdev/color5.png";

const HMSBlock2 = () => {
  const data = [
    {
      img: icon1,
      color: color2,
      title: "All that your OPD needs",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: icon2,
      color: color1,
      title: "Become omnipresent",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: icon3,
      color: color3,
      title: "Take care of insurance",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: icon4,
      color: color4,
      title: "Be ready for the run",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: icon5,
      color: color5,
      title: "See it all at the reception",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ];
  return (
    <div className="HMSBlock2_cover">
      <Fade bottom>
        <CommonHeading mainB1="Meet the Most Comprehensive Healthcare Management Software Ever Built" />
      </Fade>
      <Fade bottom>
        <p className="HMSBlock2_para">
          Whether looking at software for doctor’s clinic or a multi-location
          hospital – ErisnTech delivers faster decision making, smoother
          operations and no programming overheads.
        </p>
      </Fade>
      <div className="HMSBlock2_inner">
        {data.map((index) => {
          return (
            <Fade bottom>
              {" "}
              <LeftBlock
                img={index.img}
                title={index.title}
                color={index.color}
                desc={index.desc}
              />
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default HMSBlock2;
