import React from 'react'
import MainBanner from "../../components/Banner/MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai";
import PPCServicesBanner from './PPCServicesBanner';

const PPCServices = () => {
  return (
    <div className='PPCServices'>
         <MainBanner
        smallhead="Digital Marketing"
        mainHeadB1="Specialist Marketing & SEO Company"
        bannerDesc="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod.Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod"
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerImg={<PPCServicesBanner/>}
      />
    </div>
  )
}

export default PPCServices