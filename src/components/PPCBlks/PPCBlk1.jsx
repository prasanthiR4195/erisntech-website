import React from 'react'
import color1 from '../../assets/webdev/color1.png'
import color2 from '../../assets/webdev/color2.png'
import color3 from '../../assets/webdev/color3.png'
import color4 from '../../assets/webdev/color4.png'
import color5 from '../../assets/webdev/color5.png' 

import icon1 from '../../assets/ppc/brand_visibility.png'
import icon2 from '../../assets/ppc/easy_tostart.png'
import icon3 from '../../assets/ppc/experimentation.png'
import icon4 from '../../assets/ppc/immediate_result.png'
import PPCBlock from './PPCBlock'
import CommonHeading from '../commonHeading/CommonHeading'
import Fade from 'react-reveal/Fade';

const PPCBlk1 = () => {
    const data = [
        {
            color:color1,
            icon:icon1,
            head:"Enhancing Brand Visibility",
            para:"Ensuring that your advertisements and content are reaching the right place is the most relevant benefit of PPC service. PPC advertising enhances your brand’s visibility across channels and platforms to increase the awareness of your products and services. This helps your business in attaining prospects with a high conversion rate."
        },
        {
            color:color2,
            icon:icon2,
            head:"Easy to Start",
            para:"PPC marketing is quite easy to get a grasp on. A simple step-by-step guide to paid search marketing can help beginners in getting started with their marketing efforts. Even if your business is way behind the competitors in PPC marketing, you can still create and run your camp- aign in no time with the help of our PPC services."
        },
        {
            color:color3,
            icon:icon3,
            head:"Experimentation Opportunities",
            para:"Any PPC advertising campaign has to be tested out to see which ads perform better. A/B split testing for PPC ads is a critical part of this process. Creating different and unique versions of PPC ads can help businesses in experimenting with their ads to get valuable insights ab- out what their customers like. This enables businesses to boost their conversion rates."
        },
        {
            color:color4,
            icon:icon4,
            head:"Consistent and Immediate Results",
            para:"PPC campaigns can generate immediate results for your business. Driving targeted and organic traffic to your website works almost instantly with paid search campaigns. Delivering ads directly to the ideal custome- rs, PPC ads with good SEO can keep bringing consistent results for your business for the long term from the get- go."
        }
    ]
  return (
    <div className='PPCBlk1_cover'>
         <CommonHeading mainB1="How is PPC Beneficial to Your Business?" />
         <Fade bottom>
         <p className='PPCBlk1_para'>Pay Per Click is a streamlined and powerful advertising method that can empower your digital marketing strategies and boost their success. Increased lead generation, better conversions, and maximized ROI are the major benefits of refined PPC services from Infidigit. At Infidigit, we prioritize PPC services with a data - driven approach to create unique and valuable opportunities to optimize your brand’s connection with the existing and potential customer base. Here is how our PPC services can be beneficial to your business:</p>
         </Fade>
         <div className='PPCBlk1_inner'>
            {data.map((index)=>{
                return    <Fade bottom> <PPCBlock 
                color={index.color}
                icon={index.icon}
                head={index.head}
                para={index.para}
                />
                </Fade>
            })}
            
         </div>
    </div>
  )
}

export default PPCBlk1