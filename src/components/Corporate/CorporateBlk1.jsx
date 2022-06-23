import React from 'react'
import CommonHeading from "../commonHeading/CommonHeading";
import BusinessBlk from '../Business/BusinessBlk';
import icon1 from "../../assets/corporate/innovation.png";
import icon2 from "../../assets/corporate/logo_designing.png";
import icon3 from "../../assets/corporate/quality.png";
import icon4 from "../../assets/corporate/communication.png";
import icon5 from "../../assets/corporate/creative.png";
import icon6 from "../../assets/corporate/pricing.png";

const CorporateBlk1 = () => {
  return (
    <div className='CorporateBlk1_cover'>
         <CommonHeading subHead="Our Services" mainB1="Explore Our Service Portfolio" />
         <div className='CorporateBlk1_inner'>
            <BusinessBlk
            img={icon1}
            title="Innovation"
            desc="Lorem Ipsum is the simply dummy text of the printingLorem Ipsum is the simply dummy"
            bg="#E3163D"
            />
             <BusinessBlk
            img={icon2}
            title="Logo Designing"
            desc="Lorem Ipsum is the simply dummy text of the printingLorem Ipsum is the simply dummy"
            bg="#049CE5"
            />
             <BusinessBlk
            img={icon3}
            title="Quality"
            desc="Lorem Ipsum is the simply dummy text of the printingLorem Ipsum is the simply dummy"
            bg="#63BC6F"
            />
             <BusinessBlk
            img={icon4}
            title="Communication"
            desc="Lorem Ipsum is the simply dummy text of the printingLorem Ipsum is the simply dummy"
            bg="#598695"
            />
             <BusinessBlk
            img={icon5}
            title="Creative"
            desc="Lorem Ipsum is the simply dummy text of the printingLorem Ipsum is the simply dummy"
            bg="#FFB74D"
            />
             <BusinessBlk
            img={icon6}
            title="Pricing"
            desc="Lorem Ipsum is the simply dummy text of the printingLorem Ipsum is the simply dummy"
            bg="#2CC2D6"
            />
         </div>
    </div>
  )
}

export default CorporateBlk1