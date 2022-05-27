import React from 'react'
import './Block.css'
import { AiOutlineArrowRight } from "react-icons/ai";
 


const Block = ({img,title,desc,subhead,button}) => {

 

  return (
    <div className='block_wrap'>
      <div className="block_inner">
        <img src={img} alt="block" />
        <h4>{title}</h4>
        <h5>{subhead}</h5>
        <p>{desc}</p>
        </div>
        <div>
          {button?<div className='blockBtn'>Learn More <AiOutlineArrowRight /></div>:""}
        </div>
    </div>
  )
}

export default Block