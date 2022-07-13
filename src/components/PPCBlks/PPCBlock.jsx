import React from 'react'

const PPCBlock = ({color,icon,head,para}) => {
  return (
    <div className='PPCBlock_cover'>
        <div className='ppcBlock_head'>
            <div className='ppcBlock_head_icon'>
            <img src={icon} className="ppcIcon"/>
            <img src={color} className="ppcColor"/>
            </div>
            <h4>{head}</h4>
        </div> 
        <p>{para}</p>
    </div>
  )
}

export default PPCBlock