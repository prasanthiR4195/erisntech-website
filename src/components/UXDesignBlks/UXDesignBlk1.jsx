import React from 'react'
import UXDesignBlocks from './UXDesignBlocks'
import './UXDesignBlk1.css'
import UXImg from "../../assets/uiux/UXImg1.png"; 


const UXDesignBlk1 = () => {
  return (
    <div className='UXdesignBlk1_cover'>
        <div className='UXDesignBlk1_left'>
            <img src={UXImg} />
        </div>
        <div className='UXDesignBlk1_right'>
            <h3>Explore Our Design Services</h3>
            <div className='UXDesign_blocks_cover'>
                 <UXDesignBlocks num="1" head="Website/App UI/UX Designing" para="corporate websites, e-commerce stores and more"/>
                 <UXDesignBlocks num="2" head="Brouchers Designing" para="Customized business brochure, product catalogues, presentation folders more"/>
                 <UXDesignBlocks num="3" head="Logo Designing" para="We help with our logo design process to explore and find your brand message."/>
                 <UXDesignBlocks num="4" head="Corporate Designs" para="professionally designed letterhead, Business cards, Envelopes and more"/>
            </div>
        </div>
    </div>
  )
}

export default UXDesignBlk1