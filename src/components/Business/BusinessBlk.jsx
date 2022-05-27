import React from 'react'
import './BusinessBlk.css'

const BusinessBlk = ({img, title, desc,bg}) => {
  return (
    <div className='business_blk_wrap'>
        <div className="inner_icon_bg" style={{background:`${bg}`}} >
        <img src={img} alt="businessimg" style={{width:"36px",margin:0}}/>
        </div>
        <h5>{title}</h5>
        <p>{desc}</p>
    </div>
  )
}

export default BusinessBlk
 