import React from 'react'
import './TwoBlock.css'

const TwoBlock = ({img,title,desc}) => {
  return (
    <div className='two_block_wrap'>
      <div className='two_block_left'>
        <img src={img} alt="" />
      </div>
      <div className='two_block_right'>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default TwoBlock