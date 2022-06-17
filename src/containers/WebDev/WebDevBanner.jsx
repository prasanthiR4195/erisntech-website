import React from 'react'
import './WebDevBanner.css'
import sw1 from "../../assets/softwaredev/sw.png";

const WebDevBanner = () => {
  return (
    <div className='webdev_banner'>
        <img src={sw1} className="sw1" />
    </div>
  )
}
 
export default WebDevBanner