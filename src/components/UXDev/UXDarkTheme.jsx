import React from 'react'
import '../../containers/UXDev/UXDev.css'
import app1 from "../../assets/UXDev/school_management_app.png";
import appbg from "../../assets/UXDev/school_management_bg.png";

const UXDarkTheme = () => {
  return (
    <div className='themechange_cover'>
        <div className='themeChange_top'>
            <div className='theme_change_top_left'>
                <div className='theme_change_top_head'>
                    <h5>Our Recent Work</h5>
                    <h2>School Management Application Design</h2>
                </div>
                <p>Designed to go beyond the traditional norms of academics, the Erisn Classroom intuitively helps the learners and the teachers find common ground. The online learning management software has been preset with tools that aid across several verticals from college faculty to enterprise leaders. It is one suite – ready for creating content, delivering training and measuring progress.</p>
            </div>
            <div className='theme_change_top_right'>
                <img src={app1} />
                <img src={appbg} />
            </div>
        </div>
        <div className='change_theme_middle'>
            <h2>User Interface Design Services infusing usability</h2>
            <p>Our UI/UX design and development services are focused on creating interfaces that make every digital interaction a delightful user experience.</p>
            <p>We work as an extended UX team for companies and startups, bringing an in-depth understanding of the business, design and technical aspects so as to build digital products with a great user experience that affirms the business goals</p>
        </div>
    </div>
  )
}

export default UXDarkTheme