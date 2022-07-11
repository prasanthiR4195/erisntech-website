import React from 'react'
import './SwBlocks.css' 
import Fade from 'react-reveal/Fade';

const STYLES = ["bg-0","bg-1", "bg-2","bg-3","bg-4","bg-5","bg-6","bg-7","bg-8","bg-9","bg-10","bg-11"];

const SwBlocks = ({num,head,para,img,color}) => {
 
    const checkNum = STYLES.includes(num)
    ? num
    : STYLES[num];   

  return (
    <Fade bottom>
    <div className='sawBlkWrap'>
        <div className='swNumber'>

            {/* <span className={checkNum}></span> */}
            
           <img src={img} class="sw_icon"/>

           <img src={color} className=" colorrr" />

           {img?"":<h3  >{num}</h3>}
            
        </div>
        <h4>{head}</h4>
        <p>{para}</p>
    </div>
    </Fade>
  )
}

export default SwBlocks