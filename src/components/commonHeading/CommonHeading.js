import React from "react";
import "./CommonHeading.css";
import Fade from "react-reveal/Fade";

const CommonHeading = ({
  subHeadwithBg,
  mainB1,
  mainR,
  mainB2,
  subHead,
  headWithOrngBg,
  para,
}) => {
  return (
    <Fade bottom>
      <div className="block_section_two_head">
        {/* {subHeadwithBg? <div className={`${'sub_head_bg'}  ${'red_font'}`}>{subHeadwithBg}</div> : ""}
          {headWithOrngBg? <div className='headWithOrngBg'>{headWithOrngBg}</div>:""} */}
        <h5>{subHead}</h5>
        <h2>
          {mainB1}
          <span className="red_font"> {mainR}</span> {mainB2}
        </h2>
        {/* <p>{para}</p> */}
        <span className="heading_underline"></span>
      </div>
    </Fade>
  );
};

export default CommonHeading;
