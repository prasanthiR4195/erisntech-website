import React from 'react'
import AOS from 'aos'

const SoftwareDevMoving = ({head, img}) => {
  AOS.init()
  return (
    <div className='SwMoving'>
        <span data-aos="fade-right" data-aos-delay="100">{head}</span>
        <img src={img} data-aos="fade-left" data-aos-delay="100"/>
    </div>
  )
}

export default SoftwareDevMoving