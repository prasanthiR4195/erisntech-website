import React from 'react'
import './Block.css'

const NormalBlks = ({img,head,para }) => {
  return (
    <div className='normal_block_cover'>
        <img src={img} alt=""/>
        <h4>{head}</h4>
        <p>{para}</p>
    </div> 
  )
}

export default NormalBlks