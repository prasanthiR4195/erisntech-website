import React from 'react';
import Button from '../CommonButton/Button';
import './TabContent.css'
import { AiOutlineArrowRight } from "react-icons/ai";  
import AOS from 'aos'

const TabContent2 = ({img,desc,title,main}) => {
  AOS.init()
  return (
    <div className='tab_content_wrap' style={{background:"#F8F8F8"}}>
          <div className='tab_content_right' data-aos="fade-right" data-aos-delay="200">
            <img src={img} alt="tab-content" />
       </div>
       <div className='tab_content_left'  data-aos="fade-left" data-aos-delay="200">
           <span className='bigLetters' style={{color:"#16b0b626"}}>{main}</span>
            <h4>{title}</h4>
            <p>{desc}</p>
            <Button buttonStyle="btn--primary--orange">Learn More  <AiOutlineArrowRight className='arrow'/></Button>
            <span className='btn_dots'>&nbsp;</span>
       </div>
     
    </div>
  )
}

export default TabContent2