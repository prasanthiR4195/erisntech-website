import React from 'react'
import CommonHeading from '../commonHeading/CommonHeading'
import WorkBlock from '../WorkIcons/WorkBlock'
import UX1 from "../../assets/uiux/UX1.png";
import UX2 from "../../assets/uiux/UX2.png";
import UX3 from "../../assets/uiux/UX3.png"; 
import './UXdesignBlk6.css'
import color1 from "../../assets/softwaredev/color1.png";
import color2 from "../../assets/softwaredev/color2.png";
import color3 from "../../assets/softwaredev/color3.png"; 

const UXdesignBlk6 = () => {
  return (
    <div className="UXDesignBlk6_cover">
      <CommonHeading mainB1="Why Clients Choose Us?"  />
       
      <div className="UXDesignBlk6_inner">
        <WorkBlock
          img={UX1}
          head="Customer Friendly"
          num="1"
          color={color2}
          para="We start working with a complete understanding of your target audience and value propositions."
        />
        <WorkBlock
          img={UX2}
          head="Team of Experts"
          num="2"
          color={color1}
          para="We don’t believe in generic templates and deliver 100% original and custo- mized solutions."
        />
        <WorkBlock
          img={UX3}
          head="Quality Assurance"
          num="3"
          color={color3}
          para="Our team will support each other to complete the given deadline to submit the project."
        />
    
      </div>
    </div>
  )
}

export default UXdesignBlk6