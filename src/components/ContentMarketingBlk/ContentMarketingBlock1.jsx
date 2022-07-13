import React from 'react'
import CommonHeading from '../commonHeading/CommonHeading'
import Fade from 'react-reveal/Fade';
import color1 from '../../assets/webdev/color1.png'
import color2 from '../../assets/webdev/color2.png'
import color3 from '../../assets/webdev/color3.png'
import color4 from '../../assets/webdev/color4.png'
import color5 from '../../assets/webdev/color5.png' 

import icon1 from '../../assets/content_marketing/featured_snippets.png'
import icon2 from '../../assets/content_marketing/writers.png'
import icon3 from '../../assets/content_marketing/copy_editors.png'
import icon4 from '../../assets/content_marketing/regular_reporting.png'
import PPCBlock from '../PPCBlks/PPCBlock';

const ContentMarketingBlock1 = () => {
    const data = [
        {
            color:color1,
            icon:icon1,
            head:"We provide content that ranks on featured snippets",
            para:"Often referred to as the best SEO company when it comes to focus on content, we not only have on-page SEO skills, but also have a network of professional cont- ent writers. They help us draft high content which can rank on featured snippet i.e. rank#0"
        },
        {
            color:color2,
            icon:icon2,
            head:"We have writers per your niche",
            para:"We understand the difficulty of a content writer that ac- curately understands and delivers as per the needs of an ecommerce brand. That's where we have specific co- ntent writers for every niche, be it finance, ecommerce, B2B services, gaming, education among others."
        },
        {
            color:color3,
            icon:icon3,
            head:"We have a professional team of copy-editors",
            para:"Often referred to as the best SEO company when it com- es to focus on content, we not only have on-page SEO skills, but also have a network of professional content wr- iters. They help us draft high content which can rank on featured snippet i.e. rank#0"
        },
        {
            color:color4,
            icon:icon4,
            head:"Regular Reporting",
            para:"Often referred to as the best SEO company when it com- es to focus on content, we not only have on - page SEO skills, but also have a network of professional content writers. They help us draft high content which can rank on featured snippet i.e. rank#0"
        }
    ]
  return (
    <div className='contentBlock1_cover'>
          <CommonHeading mainB1="Why Erisntech as Content Marketing Service Provider" />
         <Fade bottom>
         <p className='PPCBlk1_para'>As one of the premium content marketing service providers in India, we always aim to provide unique and SEO friendly content marketing services Here are some of our biggest strengths that help us to lead the content marketing industry:</p>
         </Fade>
         <div className='contentBlock1_inner'>
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

export default ContentMarketingBlock1