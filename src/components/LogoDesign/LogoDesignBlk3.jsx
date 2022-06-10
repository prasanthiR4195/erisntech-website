import React from 'react'
import CommonHeading from "../commonHeading/CommonHeading";
import path from "../../assets/logodesign/meticulus_design_process.png";

const LogoDesignBlk3 = () => {
  return (
    <div className='LogoDesignBlk3_cover'>
         <CommonHeading 
            mainB1="Meticulous Design Process"
        />
         <p>Whether you are overflowing with ideas or not sure where to start, let our experienced Logo Designing Team help you translate your Business identity into an eye-catching Logo Design.</p>
        <div className='LogoDesignBlk3_inner'>
           
            <div className='LogoDesignBlk3_image'>
                <img src={path} alt="" />
                <div className='dots dot_1'>
                    <p>Discovery</p>
                    <span></span>
                </div>
                <div className='dots dot_2'>
                    <p>Research & Concept</p>
                    <span></span>
                </div>
                <div className='dots dot_3'>
                    <p>Design & Presentation</p>
                    <span></span>
                </div>
                <div className='dots dot_4'>
                    <p>Implementation</p>
                    <span></span>
                </div>
                <div className='dots dot_5'>
                    <p>Launch</p>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogoDesignBlk3