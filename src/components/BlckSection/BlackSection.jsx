import React from 'react'
import Button from '../CommonButton/Button'
import './Blacksection.css'
import { AiOutlineArrowRight } from "react-icons/ai"; 
import icon1 from '../../assets/homepage/apple.png'
import icon2 from '../../assets/homepage/android.png'

const BlackSection = () => {
  return (
    <div className='black_section'>
      <div className='blac_section_icons'>
        <img src={icon2} alt="" />
        <img src={icon1} alt="" />
      </div>
        <p>Want to learn more about our iOS app development expertise?</p>
        <Button buttonStyle="btn--primary--black"> Contact Us <AiOutlineArrowRight className='arrow'/></Button>
    </div>
  )
}

export default BlackSection