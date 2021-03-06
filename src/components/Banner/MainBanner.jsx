import React from "react";
import Button from "../CommonButton/Button";
import "./MainBanner.css";
import Fade from 'react-reveal/Fade';

const MainBanner = ({
  mainHeadB1,
  mainHeadR,
  mainHeadB2,
  bannerDesc,
  btnOrang,
  btnGrey,
  img,
  subHeadB1, 
  subHeadB2,
  subHeadR,
  bannerStyle,
  common_headB,
  common_headR,
  smallhead,
  subHeadwithBg,
  subhead,
  bannerImg,
  bannerBG,
  uxclass,
}) => {
  return (
    <div className="banner_main_cover">
      {/* <img src={bannerBG} className={`bannerBG ${uxclass}`} /> */}
      <Fade bottom>
      <div className={`banner_content` }>
        <div className="banner_content_inner">
        <h5>{smallhead}</h5>
        {/* <div className="sub_head_bg red_font">{subHeadwithBg}</div> */}
        {/* <h3 className="common_head">
          {common_headB}
          <span className="red_font">{common_headR}</span>
        </h3> */}
        <h1>
          {mainHeadB1} <span className="red_font">{mainHeadR} </span>
          {mainHeadB2}
        </h1>
        {/* <h2>
          {subHeadB1} <span className="red_font">{subHeadR}</span>
          {subHeadB2}
        </h2> */}
        {/* <h3>{subhead}</h3> */}
        <p>{bannerDesc}</p>
        <Button buttonStyle="btn--primary--solid">{btnOrang}</Button>

        {!btnGrey ? (
          ""
        ) : (
          <Button buttonStyle="btn--primary--cancel">{btnGrey}</Button>
        )}
        </div>
      </div>
      </Fade>
      <div className="banner_img">
        {bannerImg}
        {/* <img src={BannerE1} alt="banner" className="bannerFloatingE bannerFloatingE1" />
    <img src={BannerE2} alt="banner" className="bannerFloatingE bannerFloatingE2" /> */}
      </div>
    </div>
  );
};

export default MainBanner;
