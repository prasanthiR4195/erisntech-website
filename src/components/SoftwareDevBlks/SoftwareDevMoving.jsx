import React from 'react'
import AOS from 'aos'

const SoftwareDevMoving = ({head, img}) => {
  AOS.init()
  return (
    <div className='SwMoving'>
        <h1 data-aos="fade-right" data-aos-delay="300">{head}</h1>
        <img src={img} data-aos="fade-left" data-aos-delay="300"/>
    </div>
  )
}

export default SoftwareDevMoving