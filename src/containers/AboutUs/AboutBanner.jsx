import React from 'react'
import aboutOne from '../../assets/about/about1.png'
import aboutTwo from '../../assets/about/about2.png'
import aboutThree from '../../assets/about/about3.png'
import aboutFour from '../../assets/about/about4.png'
import './About.css'

const AboutBanner = () => {
  return (
    <div className='about_banner_cover'>
        <img src={aboutOne} alt="" className='aboutOne'/>
        <img src={aboutTwo} alt="" className='aboutTwo'/>
        <img src={aboutThree} alt="" className='aboutThree'/>
        <img src={aboutFour} alt="" className='aboutFour'/> 
    </div>
  )
}

export default AboutBanner