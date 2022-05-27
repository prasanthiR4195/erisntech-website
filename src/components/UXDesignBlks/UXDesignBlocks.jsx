import React from 'react'
import './UXDesignBlocks.css'

const UXDesignBlocks = ({num,head,para}) => {
    const STYLES = ["cl-0","cl-1", "cl-2","cl-3","cl-4","cl-5","cl-6" ];

    const checkNum = STYLES.includes(num)
    ? num
    : STYLES[num];  
  return ( 
    <div className='UXDesign_block_cover'> 
        <h1 className={checkNum}>0{num}</h1>
        <h3>{head}</h3>
        <p>{para}</p>
    </div>
  )
}

export default UXDesignBlocks