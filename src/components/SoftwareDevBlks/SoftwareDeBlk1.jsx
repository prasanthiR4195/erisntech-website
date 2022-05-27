import React from 'react'
import CommonHeading from '../commonHeading/CommonHeading';
import SoftwareBlk1Inner from './SoftwareBlk1Inner';
import './SoftwareDeBlk1.css';


const SoftwareDeBlk1 = ({subHead,mainHead,para,leftHead,img1,rightHead,
  img2,head1,para1,head2,para2,head3,para3,head4,para4,head5,para5,head6,
  para6,head7,para7,head8,para8,icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,}) => {
  return (
    <div className='software_dev_blk_1_wrap'>
       <CommonHeading
       subHead={subHead}  
       mainB1={mainHead}
       />
       <p>{para}</p>
       <SoftwareBlk1Inner leftHead={leftHead} img1={img1} rightHead={rightHead} img2={img2} 
       head1={head1} para1={para1} icon1={icon1}
       head2={head2} para2={para2} icon2={icon2}
       head3={head3} para3={para3} icon3={icon3}
       head4={head4} para4={para4} icon4={icon4}
       head5={head5} para5={para5} icon5={icon5}
       head6={head6} para6={para6} icon6={icon6}
       head7={head7} para7={para7} icon7={icon7}
       head8={head8} para8={para8} icon8={icon8}

       />
        
    </div>
  )
}

export default SoftwareDeBlk1