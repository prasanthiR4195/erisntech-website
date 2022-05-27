import React from 'react'
import classes from  './CommonHeading.module.css'


const CommonHeading = ({subHeadwithBg,mainB1,mainR,mainB2,subHead,headWithOrngBg,para}) => {
  return (
    <div className={classes.block_section_two_head}>
          {subHeadwithBg? <div className={`${classes.sub_head_bg}  ${classes.red_font}`}>{subHeadwithBg}</div> : ""}
          
          {headWithOrngBg? <div className={classes.headWithOrngBg}>{headWithOrngBg}</div>:""}
          <h5>{subHead}</h5>
          <h2>
          {mainB1}
            <span className={classes.red_font}> {mainR}</span> {mainB2}
          </h2>
          <p>{para}</p>
        </div>
  )
}

export default CommonHeading