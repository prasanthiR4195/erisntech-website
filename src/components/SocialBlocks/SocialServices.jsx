import React from 'react'

import volume from "../../assets/social/volume.png";
import reach from "../../assets/social/reach.png";
import engagement from "../../assets/social/engagement.png";
import influence from "../../assets/social/influence.png";
import share_of_voice from "../../assets/social/share_of_voice.png"; 
import color1 from "../../assets/webdev/color1.png";
import color2 from "../../assets/webdev/color2.png";
import color3 from "../../assets/webdev/color3.png";
import color4 from "../../assets/webdev/color4.png";
import color5 from "../../assets/webdev/color5.png";
import Fade from 'react-reveal/Fade';
import LeftBlock from '../BlockSection/LeftBlock';
import CommonHeading from '../commonHeading/CommonHeading';

const SocialServices = () => {
    const data = [
        {
            img:volume,
            color:color1,
            title:"Volume",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"

        },
        {
            img:reach,
            color:color2,
            title:"Reach",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            img:engagement,
            color:color3,
            title:"Engagement",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            img:influence,
            color:color4,
            title:"Influence",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            img:share_of_voice,
            color:color5,
            title:"Share of voice",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        }
    ]
  return (
    <div className="social_services_cover">
      <CommonHeading subHead="WE FOCUSED ON" mainB1="What Should You Be Tracking?" />
      <Fade bottom>
      <p className="SpecialistBlk2_para">
      Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod
      </p>
      </Fade>
      <div className="SpecialistBlk2_inner">
        {data.map((index) => {
          return (
            <Fade bottom>
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
  )
}

export default SocialServices