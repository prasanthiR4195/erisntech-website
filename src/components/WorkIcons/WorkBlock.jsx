import React from 'react'
import './WorkIcons.css'

const WorkBlock = ({num,head,img,para,color}) => {
    const STYLES = ["bg-0","bg-1", "bg-2","bg-3","bg-4","bg-5","bg-6","bg-7","bg-8"];

    const checkNum = STYLES.includes(num)
    ? num 
    : STYLES[num]; 
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