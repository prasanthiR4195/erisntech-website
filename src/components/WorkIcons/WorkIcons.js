import React from 'react';
import './WorkIcons.css'
import CommonHeading from '../commonHeading/CommonHeading';
import WorkBlock from './WorkBlock';
import color1 from '../../assets/webdev/color1.png'
import color2 from '../../assets/webdev/color2.png'
import color3 from '../../assets/webdev/color3.png'
import color4 from '../../assets/webdev/color4.png'
import color5 from '../../assets/webdev/color5.png'

import icon1 from '../../assets/webdev/workicon1.png'
import icon2 from '../../assets/webdev/workicon2.png'
import icon3 from '../../assets/webdev/workicon3.png'
import icon4 from '../../assets/webdev/workicon4.png'
import icon5 from '../../assets/webdev/workicon5.png'
import icon6 from '../../assets/webdev/workicon6.png'
import icon7 from '../../assets/webdev/workicon7.png'
import icon8 from '../../assets/webdev/workicon8.png'


const WorkIcons = () => { 
  return (
    <div className="our_work_wrap">
    <CommonHeading  headWithOrngBg="Our Services"
    mainB1="Industries we work with Latest and Greatest Services" />

    <div className="work_icons_wrap">
      <WorkBlock img={icon1} head="Education" num="1" color={color1} />
      <WorkBlock img={icon2} head="Healthcare" num="2" color={color2} />
      <WorkBlock img={icon3} head="Fitness" num="3"  color={color3} />
      <WorkBlock img={icon4} head="Food Service" num="4" color={color4} />
      <WorkBlock img={icon5} head="Beauty" num="5" color={color5}  />
      <WorkBlock img={icon6} head="Travel" num="6" color={color2} />
      <WorkBlock img={icon7} head="Event Planning" num="7" color={color1} />
      <WorkBlock img={icon8} head="Automotive" num="8" color={color3} />
    </div>
  </div>
  )
}  

export default WorkIcons