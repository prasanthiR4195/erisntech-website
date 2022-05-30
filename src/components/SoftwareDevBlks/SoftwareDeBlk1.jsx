import React from 'react'
import CommonHeading from '../commonHeading/CommonHeading';
import SoftwareBlk1Inner from './SoftwareBlk1Inner';
import './SoftwareDeBlk1.css';


const SoftwareDeBlk1 = ({subHead,mainHead,para,block1 }) => {
  return (
    <div className='software_dev_blk_1_wrap'>
       <CommonHeading
       subHead={subHead}  
       mainB1={mainHead}
       />
       <p>{para}</p>
       <SoftwareBlk1Inner 
       block1={block1}   
       />
        
    </div>
  )
}

export default SoftwareDeBlk1