import React from 'react'
import './WebDevBanner.css'
import sw1 from "../../assets/softwaredev/sw.png";

const WebDevBanner = () => {
  return (
    <div style={{width:"500px",height:"500px"}}>
        <img src={sw1} className="sw1" />
    </div>
  )
}
 
export default WebDevBanner