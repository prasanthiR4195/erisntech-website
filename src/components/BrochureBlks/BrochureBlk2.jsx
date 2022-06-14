import React from 'react'
import CommonHeading from '../commonHeading/CommonHeading'
import WebdevExplainedRev from '../WebDevExplained/WebdevExplainedRev'
import webdevExp from "../../assets/brochure/brochure_img.png";
import "../../containers/BrochureDesign/BrochureDesign.css";
import NormalBlks from '../BlockSection/NormalBlks';
import icon1 from '../../assets/brochure/company_brochure_design.png'
import icon2 from '../../assets/brochure/product_catalog_design.png'
import icon3 from '../../assets/brochure/sales_brochure_design.png'

const BrochureBlk2 = () => {
  return (
    <div className='BrochureBlk2_cover'>
      <CommonHeading
        subHead="SERVICES FOR"
        mainB1="Best Brochure Design Services for Various Business Needs"
      />
      <div className='BrochureBlk2_inner'>
      <WebdevExplainedRev
          para="With our years of experience and expertise in crafting company brochure designs, we have mastered the art of creating impres- sive brochures of various styles like bi - fold brochure, tri-fold brochure, business presentation brochure, flyers and leaflets. Depending on your business needs, the experts offering broch- ure design services at Erisntech can provide you with appealing designs to project the best image of your company, be it for a promotional brochure of a sales brochure. Starting from conce- ptualization to actual design of the brochures and flyers, our professionals work closely with you every step of the way, helping you to penetrate the reader’s mind with influential andpersuasive corporate brochures and business flyers design. Some primary categories of brochures are:"
          img={webdevExp}
        />
        <div className='BrochureBlk2_second'>
          <NormalBlks
          img={icon1}
          head="Company Brochure Design"
          para="Lorem Ipsum is the simply dummy text of the printing Lorem Ipsum is the simply dummy text of the printing"
          />
            <NormalBlks
          img={icon2}
          head="Product Catalog Design"
          para="Lorem Ipsum is the simply dummy text of the printing Lorem Ipsum is the simply dummy text of the printing"
          />
            <NormalBlks
          img={icon3}
          head="Sales Brochure Design"
          para="Lorem Ipsum is the simply dummy text of the printing Lorem Ipsum is the simply dummy text of the printing"
          />
        </div>
      </div>
      
    </div>
  )
}

export default BrochureBlk2