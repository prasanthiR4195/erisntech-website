import React from 'react'
import './SwDeveloperAnimation.css'
import table from '../../assets/softwaredev/table.png'
import keys from '../../assets/softwaredev/keys.png'
import clock from '../../assets/softwaredev/clock.png'
import plant from '../../assets/softwaredev/plant.png'
import redcube from '../../assets/softwaredev/redcube.png'
import gearR from '../../assets/softwaredev/gear-r.png'
import gearY from '../../assets/softwaredev/gear-y.png'
import sphere from '../../assets/softwaredev/sphere.png'
import whitecube from '../../assets/softwaredev/whitecube.png' 


const SwDeveloperAnimation = () => {
  return (
    <div className='swDevAnimation_cover'>
        <img src={table} className="table" alt=""/>
        <img src={keys} className="keys" alt=""/>
        <img src={clock} className="clock" alt="" />
        <img src={plant} className="plant"  alt="" />
        <img src={redcube} className="redcube" alt="" />
        <img src={gearR} className="gearR" alt="" />
        <img src={gearY} className="gearY" alt="" />
        <img src={sphere} className="sphere" alt="" />
        <img src={whitecube} className="whitecube" alt="" />
    </div>
  )
}

export default SwDeveloperAnimation