import React from 'react';
import Button from '../CommonButton/Button';
import './TabContent.css'
import { AiOutlineArrowRight } from "react-icons/ai"; 
import AOS from 'aos'


const TabContent = ({img,desc,title,main}) => {
  AOS.init()
  return ( 
    <div className='tab_content_wrap'>
       <div className='tab_content_left' data-aos="fade-right" data-aos-delay="200">
            <h1>{main}</h1>
            <h4>{title}</h4>
            <p>{desc}</p>
            <Button buttonStyle="btn--primary--orange">Learn More  <AiOutlineArrowRight className='arrow'/></Button>
            <span className='btn_dots'>&nbsp;</span>
       </div>
       <div className='tab_content_right' data-aos="fade-left" data-aos-delay="200">
            <img src={img} alt="tab-content" />
       </div>
    </div>
  )
}

export default TabContent