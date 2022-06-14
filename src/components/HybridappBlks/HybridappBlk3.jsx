import React from 'react'
import icon1 from '../../assets/hybridapp/education.png'
import icon2 from '../../assets/hybridapp/fashion.png'
import icon3 from '../../assets/hybridapp/healthcare.png'
import icon4 from '../../assets/hybridapp/realestate.png'
import icon5 from '../../assets/hybridapp/ecommerce.png'
import icon6 from '../../assets/hybridapp/restaurant.png'
import icon7 from '../../assets/hybridapp/travel.png'
import icon8 from '../../assets/hybridapp/media.png'
import icon9 from '../../assets/hybridapp/hospitality.png'

import color1 from '../../assets/webdev/color1.png'
import color2 from '../../assets/webdev/color2.png'
import color3 from '../../assets/webdev/color3.png'
import color4 from '../../assets/webdev/color4.png'
import color5 from '../../assets/webdev/color5.png'
import SwBlocks from '../SoftwareDevBlks/SwBlocks'
import CommonHeading from '../commonHeading/CommonHeading'

const HybridappBlk3 = () => {
  return (
    <div className='HybridappBlk3_cover'>
        <CommonHeading mainB1="Latest Technologies Used by Our Mobile App Developers" />
        <p className="mobileDev_para">
            Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam
            nonumy eirmod temporod
        </p>
    <div className='HybridappBlk3_inner'>
        <SwBlocks
          img={icon1} 
          head="Education"
          color={color1}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
         <SwBlocks
          img={icon2} 
          head="Fashion "
          color={color2}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
         <SwBlocks
          img={icon3} 
          head="Healthcare"
          color={color3}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
         <SwBlocks
          img={icon4} 
          head="Real Estate"
          color={color4}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
         <SwBlocks
          img={icon5} 
          head="Ecommerce"
          color={color5}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
         <SwBlocks
          img={icon6} 
          head="Restaurant"
          color={color1}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
         <SwBlocks
          img={icon7} 
          head="Travel"
          color={color2}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
         <SwBlocks
          img={icon8} 
          head="Media"
          color={color3}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
         <SwBlocks
          img={icon9} 
          head="Hospitality"
          color={color4}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        </div>
    </div>
  )
}

export default HybridappBlk3