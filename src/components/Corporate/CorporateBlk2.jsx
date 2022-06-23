import React from 'react'
import CommonHeading from '../commonHeading/CommonHeading'

import icon1 from '../../assets/corporate/logo_design_icon.png'
import icon2 from '../../assets/corporate/letterheads_icon.png'
import icon3 from '../../assets/corporate/presentation_folder_icon.png'
import icon4 from '../../assets/corporate/brochure_design_icon.png'

import icon5 from '../../assets/corporate/id_card_design_icon.png'
import icon6 from '../../assets/corporate/packaging_design_icon.png'
import icon7 from '../../assets/corporate/business_card_icon.png'
import icon8 from '../../assets/corporate/envelopes_icon.png'
import icon9 from '../../assets/corporate/flyer_icon.png'
import icon10 from '../../assets/corporate/sticker_icon.png'
import icon11 from '../../assets/corporate/book_cover_icon.png'
import icon12 from '../../assets/corporate/catalog_icon.png'

import CorporateIconBlk from './CorporateIconBlk' 
const CorporateBlk2 = () => {
    const block1 = [
        {
            title : "Logo Design",
            icon : icon1,
            bg:"#E3163D"
        },
        {
            title : "Letterheads",
            icon : icon2,
            bg:"#049CE5"
        },
        {
            title : "Presentation folder",
            icon : icon3,
            bg:"#63BC6F"
        },
        {
            title : "Brochure Design",
            icon : icon4,
            bg:"#FFCE2E"
        },
        {
            title : "ID Card",
            icon : icon5,
            bg:"#2CC2D6"
        },
        {
            title : "Packaging design",
            icon : {icon6},
            bg:"#598695"
        },
        {
            title : "Business cards",
            icon : icon7,
            bg:"#48D4C2"
        },
        {
            title : "Envelopes",
            icon : icon8,
            bg:"#FFB74D"
        },
        {
            title : "Leaflet/Flyer design",
            icon : icon9,
            bg:"#CCCCCC"
        },
        {
            title : "Sticker design",
            icon : icon10,
            bg:"#F23801"
        },
        {
            title : "Book cover design",
            icon : icon11,
            bg:"#E3163D"
        },
        {
            title : "Catalog design",
            icon : icon12,
            bg:"#049CE5"
        }
    ]
  return (
    <div className='CorporateBlk2_cover'>
        <CommonHeading subHead="Our Services" mainB1="Explore Our Service Portfolio" />
        <div className='CorporateBlk2_inner'>
            {block1.map((index)=>{ 
            return( <CorporateIconBlk icon={index.icon} title={index.title} bg={index.bg} />   )
            })}

        </div>
    </div>
  )
}

export default CorporateBlk2