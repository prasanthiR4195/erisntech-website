import React from 'react'
import CommonHeading from '../commonHeading/CommonHeading'
import WorkBlock from '../WorkIcons/WorkBlock'

import color1 from '../../assets/webdev/color1.png'
import color2 from '../../assets/webdev/color2.png'
import color3 from '../../assets/webdev/color3.png' 
import color4 from '../../assets/webdev/color4.png'
import color5 from '../../assets/webdev/color5.png' 

import client1 from '../../assets/ecommerce/client1.png' 
import client2 from '../../assets/ecommerce/client2.png' 
import client3 from '../../assets/ecommerce/client3.png' 
import client4 from '../../assets/ecommerce/client4.png' 
import client5 from '../../assets/ecommerce/client5.png' 
import client6 from '../../assets/ecommerce/client6.png' 
import Fade from 'react-reveal/Fade';

const EcommerceBlk2 = () => {
  const data = [
    {
      img:client1,
      color:color1,
      head:'High Quality Services',
      para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

    },
    {
      img:client2,
      color:color2,
      head:'Customer Support',
      para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      img:client3,
      color:color3,
      head:'100% Satisfaction',
      para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      img:client4,
      color:color4,
      head:'Customized Services',
      para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      img:client5,
      color:color5,
      head:'Customized Services',
      para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      img:client6,
      color:color1,
      head:'Business savvy',
      para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ]
  return (
    <div className='EcommerceBlk2_cover'>
      <CommonHeading mainB1="Why Clients Choose Us?" />
      <div className='EcommerceBlk2_inner'>
        {data.map((index)=>{
          return   <WorkBlock
          img={index.img}
          head={index.head}
          color={index.color}
          para={index.para}
        />
        })}
      <Fade bottom>
  
        </Fade>
      </div>
    </div>
  )
}

export default EcommerceBlk2