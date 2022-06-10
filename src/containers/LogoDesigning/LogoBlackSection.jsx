import React from 'react'
import image1 from "../../assets/logodesign/back_section_top_img.png";
import image2 from "../../assets/logodesign/black_section_bottom_img.png";

const LogoBlackSection = () => {
  return (
    <div className='logo_blackSection_cover'>
        <div className='logo_black_head'>
            <h3>Elements of Branding</h3>
            <p>The logo encapsulates the idea behind the brand. We know how to make it work for you. Colors add a touch of soul that will resonate better with your customers.</p>
        </div>
        <div className='logo_blackSection_inner'>
            <div className='logo_black_inner-head'>
                <h4>
                How we will make
                </h4>
                <span>
                Example
                </span>
            </div>
            <img src={image1} alt="" className='logo_black_section_img1'/>
            <img src={image2} alt="" className='logo_black_section_img2'/>
        </div>
    </div>
  )
}

export default LogoBlackSection