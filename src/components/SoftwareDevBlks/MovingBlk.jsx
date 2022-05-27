import React from 'react'
import './SoftwareDeBlk1.css'
import AOS from 'aos'


 

const MovingBlk = ({icon,color}) => {
  AOS.init()
  return (
    <div className='movingBlk_wrap'>
        <div className="moving_inner">
            <span></span>
            <img src={icon} className="movng_icon" data-aos="flip-up" data-aos-delay="300"/>
            <img src={color} className="colorr" data-aos="flip-down" data-aos-delay="300"/>
        </div>
    </div>
  )
}

export default MovingBlk