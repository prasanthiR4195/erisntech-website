import React from 'react'
import CommonHeading from '../commonHeading/CommonHeading'
import icon1 from "../../assets/brochure/pro_images.png";
import icon2 from "../../assets/brochure/modern_fonts.png";
import icon3 from "../../assets/brochure/specific_content.png";
import icon4 from "../../assets/brochure/blending.png";
import icon5 from "../../assets/brochure/specific_content.png";
import icon6 from "../../assets/brochure/blending.png";
import NormalBlks from '../BlockSection/NormalBlks';
import '../../containers/ios/IosDev.css'
const IosDevBlk1 = () => {
    const block1 = [{
        img : icon1,
        head: "iPhone App Testing",
        para:"Our analysts know the latest industry standards for the development, testing, and release of modern iOS apps. As an experienced mobile app development agency, we’ll guide you through all the latest quality assurance (QA) requirements and even shorten your development lifecycle by avoiding common pitfalls."
    },
{
    img: icon2,
    head:"iPhone App Support And Maintenance",
    para:"Once we’ve built your iOS app, we can also provide all the support and maintenance you need to ensure it continues to run smoothly. Agency Partner will work with your team to update your app as new features or components become available."
},
{
    img:icon3,
    head:"iPhone App Consulting Services",
    para:"Our analysts know the latest industry standards for the development, testing, and release of modern iOS apps. As an experienced mobile app development agency, we’ll guide you through all the latest quality assurance (QA) requirements and even shorten your development lifecycle by avoiding common pitfalls."
},
{
    img:icon4,
    head:"Attractive iPhone UI/UX Designs",
    para:"Once we’ve built your iOS app, we can also provide all the support and maintenance you need to ensure it continues to run smoothly. Agency Partner will work with your team to update your app as new features or components become available."
},
{
    img:icon5,
    head:"Customized iPhone App Development",
    para:"We can help with end-to-end, fully customized iOS mobile app development solutions. Our engineers use the latest technologies to build a future-proof iOS app fully tailored to your needs!"
},
{
    img:icon6,
    head:"iPhone Integration Services",
    para:"We also provide iPhone and iOS app development services for businesses that need cross-app integration. You’ll have access to all the features and capabilities available on the latest iOS devices without compromising the UX of your app."
}
]
  return (
    <div className='IosDevBlk1_cover'>
         <CommonHeading mainB1="iOS Application Development Services" />
        <div className='IosDevBlk1_inner'>
            {block1.map((index)=>{
                    return <NormalBlks
                    img={index.img}
                    head={index.head}
                    para={index.para}
                  />
            })}
        
       
        </div>
    </div>
  )
}

export default IosDevBlk1