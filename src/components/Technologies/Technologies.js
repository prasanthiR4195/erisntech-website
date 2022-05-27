import React from 'react';
import CommonHeading from '../commonHeading/CommonHeading';
import './Technologies.css'

const Technologies = () => {
  return (
    <div className='technologies_wrap'>
            <CommonHeading
           
             mainR="ErisnTech"
             mainB2=" A Technology-Driven Web Development Company"
             />
             <p>With a dedicated focus on the latest technologies, we always strive to deliver world-class customer service</p>
             <div className='technologies_icons_wrap'>
                 <div className='technologies_icons'>
                     <img src='assets/webdev/wordpress.png' alt="" />
                     <h6>Wordpress</h6>
                 </div>
                 <div className='technologies_icons'>
                     <img src='assets/webdev/php.png' alt="" />
                     <h6>PHP</h6>
                 </div>
                 <div className='technologies_icons'>
                     <img src='assets/webdev/laravel.png' alt="" />
                     <h6>Laravel</h6>
                 </div>
                 <div className='technologies_icons'>
                     <img src='assets/webdev/codeigniter.png' alt="" />
                     <h6>Codeigniter</h6>
                 </div>
                 <div className='technologies_icons'>
                     <img src='assets/webdev/react.png' alt="" />
                     <h6>React JS</h6>
                 </div>
                 <div className='technologies_icons'>
                     <img src='assets/webdev/nodejs.png' alt="" />
                     <h6>Node JS</h6>
                 </div>
             </div>
    </div>
  )
} 
export default Technologies