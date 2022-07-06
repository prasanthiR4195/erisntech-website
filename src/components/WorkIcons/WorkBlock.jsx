import React from 'react'
import './WorkIcons.css'

const WorkBlock = ({num,head,img,para,color}) => {

    
  return (
    <div className="work_icon">
        {/* <span className={checkNum}></span> */}
        <div className='work_icon_block'>
        <img src={img}  alt="" className='wrk_icon'/>
        <img src={color}  alt="" className='wrk_color'/>
        </div>
       
        <h5>{head}</h5>
        <p>{para}</p>
      </div>
  )
}

export default WorkBlock