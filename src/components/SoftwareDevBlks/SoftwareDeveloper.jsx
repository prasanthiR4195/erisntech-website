import React from 'react'

import SwDeveloperAnimation from './SwDeveloperAnimation';
import './SoftwareDeBlk1.css'
import SwDeveloperRight from './SwDeveloperRight';

const SoftwareDeveloper = () => {
    const pgm = ([
         "Java",
          "JavaScript",
          "Python",
          "C#","Perl"
    ])
    const fw = ([
        "Angular",
        "Ruby on Rails",
         "ASP.NET",
       " React ", 
    ])
  return (
    <div className='swDeveloper_wrap'>
        <div className='swDeveloper_img'>
            <SwDeveloperAnimation/>
        </div>
        <SwDeveloperRight subhead="Our Developers" 
        mainhead="We Have On-Demand Developers"
        para="Our dedicated team of 2,200+ in-house developers has extensive industry-specific experience building custom software solutions and applications."
        pgm={pgm}  
        fw={fw}
        />
    </div>
  )
}

export default SoftwareDeveloper