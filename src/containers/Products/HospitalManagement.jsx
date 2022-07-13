import React from 'react'
import MainBanner from "../../components/Banner/MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai";
import HospitalManagementBanner from './HospitalManagementBanner';
import HMSBlock1 from '../../components/ProductBlocks/HMSBlock1';
import './HospitalManagement.css'
import Faq from '../../components/Faq/Faq';
import Contact from '../../components/Contact/Contact';
import HMSBlock2 from '../../components/ProductBlocks/HMSBlock2';

const HospitalManagement = () => {
  return (
    <div className='product_cover hms_cover'>
         <MainBanner
        smallhead="Digital Marketing"
        mainHeadB1="ErisnTech Hospital Management System"
        bannerDesc="Connect your patients to your services. And to a better life. An automated hospital management software that brings it all together."
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerImg={<HospitalManagementBanner/>}
      />
      <HMSBlock1/>
      
      <HMSBlock2/>





      <Faq/>
      <Contact/>
    </div>
  )
}

export default HospitalManagement