import React from "react";
import "./WorkIcons.css";
import CommonHeading from "../commonHeading/CommonHeading";
import WorkBlock from "./WorkBlock";
import color1 from "../../assets/webdev/color1.png";
import color2 from "../../assets/webdev/color2.png";
import color3 from "../../assets/webdev/color3.png";
import color4 from "../../assets/webdev/color4.png";
import color5 from "../../assets/webdev/color5.png";

import icon1 from "../../assets/webdev/workicon1.png";
import icon2 from "../../assets/webdev/workicon2.png";
import icon3 from "../../assets/webdev/workicon3.png";
import icon4 from "../../assets/webdev/workicon4.png";
import icon5 from "../../assets/webdev/workicon5.png";
import icon6 from "../../assets/webdev/workicon6.png";
import icon7 from "../../assets/webdev/workicon7.png";
import icon8 from "../../assets/webdev/workicon8.png";
import Fade from "react-reveal/Fade";

const WorkIcons = () => {
  const data = [
    {
      img: icon1,
      head: "Education",
      color: color1,
    },
    {
      img: icon2,
      head: "Healthcare",
      color: color2,
    },
    {
      img: icon3,
      head: "Fitness",
      color: color3,
    },
    {
      img: icon4,
      head: "Food Service",
      color: color4,
    },
    {
      img: icon5,
      head: "Beauty",
      color: color5,
    },
    {
      img: icon6,
      head: "Travel",
      color: color1,
    },
    {
      img: icon7,
      head: "Event Planning",
      color: color2,
    },
    {
      img: icon8,
      head: "Automotive",
      color: color3,
    },
  ];
  return (
    <div className="our_work_wrap">
      <CommonHeading
        headWithOrngBg="Our Services"
        mainB1="Industries we work with Latest and Greatest Services"
      />

      <div className="work_icons_wrap">
        {data.map((index) => {
          return (
            <Fade bottom>
              <WorkBlock
                img={index.img}
                head={index.head}
                color={index.color}
              />
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default WorkIcons;
