import React from 'react'
import color1 from '../../assets/webdev/color1.png'
import color2 from '../../assets/webdev/color2.png'
import color3 from '../../assets/webdev/color3.png'
import color4 from '../../assets/webdev/color4.png'
import color5 from '../../assets/webdev/color5.png' 

import icon1 from '../../assets/content_marketing/fashion.png'
import icon2 from '../../assets/content_marketing/retail.png'
import icon3 from '../../assets/content_marketing/healthcare.png'
import icon4 from '../../assets/content_marketing/travel.png'
import icon5 from '../../assets/content_marketing/insurance.png'
import icon6 from '../../assets/content_marketing/food_services.png'
import icon7 from '../../assets/content_marketing/education.png'
import icon8 from '../../assets/content_marketing/fitness.png'
import LeftBlock from '../BlockSection/LeftBlock'
import Fade from 'react-reveal/Fade';
import CommonHeading from '../commonHeading/CommonHeading'

const ContentMarketingBlock2 = () => {
    const data=[
        {
            img:icon1,
            title:"Fashion",
            color:color1,
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            img:icon2,
            title:"Retail & Ecommerce",
            color:color2,
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            img:icon3,
            title:"Healthcare",
            color:color3,
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            img:icon4,
            title:"Travel",
            color:color4,
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            img:icon5,
            title:"Insurance",
            color:color5,
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            img:icon6,
            title:"Food Service",
            color:color1,
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            img:icon7,
            title:"Education",
            color:color2,
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            img:icon8,
            title:"Fitness",
            color:color3,
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        }
    ]
  return (
    <div className="content_marketing_services">
      <CommonHeading subHead="WE FOCUSED ON" mainB1="SEO Service we focused on" />
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

export default ContentMarketingBlock2