import React from 'react'
import './UXDesignBlk4.css'
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from '../CommonButton/Button';
import UX1 from "../../assets/uiux/UXIcon1.png";
import UX2 from "../../assets/uiux/UXIcon2.png";
import UX3 from "../../assets/uiux/UXIcon3.png";
import UX4 from "../../assets/uiux/UXIcon4.png";
import UX5 from "../../assets/uiux/UXIcon5.png";


const UXDesignBlk4 = () => {
  return (
    <div className='UXDesignBlk4_cover'>
        <h3><span>Tools Used to build your Brand</span></h3>
        <div className='UXDesignBlk4_inner'>
            <div className='UXD4_Blk'>
                <img src={UX1} alt=""/>
                <h4>Adobe Photoshop</h4>
            </div>
            <div className='UXD4_Blk'>
                <img src={UX2} alt="" />
                <h4>Adobe Illustrator</h4>
            </div>
            <div className='UXD4_Blk'>
                <img src={UX3} alt=""/>
                <h4>Adobe XD</h4>
            </div>
            <div className='UXD4_Blk'>
                <img src={UX4} alt=""/>
                <h4>Figma</h4>
            </div>
            <div className='UXD4_Blk'>
                <img src={UX5} alt=""/>
                <h4>Sketch</h4>
            </div> 
        </div>
        <Button>Get a Quote <AiOutlineArrowRight className="arrow" /></Button>
    </div>
  )
}

export default UXDesignBlk4