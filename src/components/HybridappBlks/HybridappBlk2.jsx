import React from 'react'
import '../../containers/UXDev/UXDev.css'
import app1 from "../../assets/hybridapp/w-shop.png";
import appbg from "../../assets/UXDev/school_management_bg.png";
import SwBandSection from '../SoftwareDevBlks/SwBandSection';

const HybridappBlk2 = () => {
  return (
    <div className='HybridappBlk2_cover'>
         <div className='themeChange_top'>
            <div className='theme_change_top_left'>
                <div className='theme_change_top_head'> 
                    <h2>Comprehensive Hybrid App Solutions That Give Your Business A Greater Spectrum Amongst The Masses</h2>
                </div>
                <p>Hybrid Mobile apps are a great way to empower your business and bring together the best of both world that is the web and native apps. Ranked as the best hybridapp development company in India, ErisnTech offers the best -in- class hybrid application devel- opment services that have the potential to take your business to a whole new level. By going hybrid you are lowering the cost of development thereby offering easy access to device data. From small firms to big agencies, our hybrid app development services will empower your business with an approach that works offline too! to add to this, our hybrid app development company will also scale to a variety of iOS apps and platforms which can lend a winning advantage for any business setup.</p>
            </div>
            <div className='theme_change_top_right'>
                <img src={app1} className="themeChange_mob_screen" alt=""/>
                <img src={appbg} className="themeChange_bg" alt=""/>
            </div>
        </div>
        <SwBandSection para="Want to learn more about our software development expertise?" />
    </div>
  )
}

export default HybridappBlk2