import React from 'react'
import CommonHeading from '../commonHeading/CommonHeading'
import './UXDesignBlk3.css'

const UXDesignBlk3 = () => {
  return (
    <div className='UXDesignBlk3_cover'>
  <CommonHeading 
        mainB1="How we work"
        para="ErisnTech is the easiest way to buy affordable branding & design services online."
      />
        <div className='UXDesignBlk3_inner'>
            <div className='UXDesign_inner_blocks'>
                <h1>1</h1>
                <p>Pick your favorite creative service</p>
            </div>
            <div className='UXDesign_inner_blocks'>
                <h1>2</h1>
                <p>Pay using our secure gateway</p>
            </div>
            <div className='UXDesign_inner_blocks'>
                <h1>3</h1>
                <p>Give us a brief about what you need done</p>
            </div>
            <div className='UXDesign_inner_blocks'>
                <h1>4</h1>
                <p>Sit back while we deliver your creatives</p>
            </div>
        </div>
    </div>
  )
}

export default UXDesignBlk3