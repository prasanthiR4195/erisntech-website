import React from "react";
import "./SoftwareDeBlk1.css";
import SoftwareDevMoving from "./SoftwareDevMoving"; 
import MovingBlk from "./MovingBlk";
import color1 from '../../assets/softwaredev/color1.png'
import color2 from '../../assets/softwaredev/color2.png'
import color3 from '../../assets/softwaredev/color3.png'
import color4 from '../../assets/softwaredev/color4.png'


const SoftwareBlk1Inner = ({leftHead,img1,rightHead,
  img2,head1,para1,head2,para2,head3,para3,head4,para4,head5,para5,head6,
  para6,head7,para7,head8,para8,icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8}) => {
  return (
    <div className="sw_inner_cover">
      <div className="software_innr_wrap">
        <SoftwareDevMoving head={leftHead} img={img1} />
        <div className="swInnerRight">
          <div className="swInnerRightBlk">
            <MovingBlk icon={icon1} color={color1}/>
            <h5>{head1}</h5>
            <p>{para1}</p>
          </div>
          <div className="swInnerRightBlk">
            <MovingBlk icon={icon2} color={color2}/>
            <h5>{head2}</h5>
            <p>{para2}</p>
          </div>
          <div className="swInnerRightBlk">
            <MovingBlk icon={icon3} color={color3}/>
            <h5>{head3}</h5>
            <p>{para3}</p>
          </div>
          <div className="swInnerRightBlk">
            <MovingBlk icon={icon4} color={color4}/>
            <h5>{head4}</h5>
            <p>{para4}</p>
          </div>
        </div>
      </div>

      <div className="software_innr_wrap"> 
        <div className="swInnerRight">
          <div className="swInnerRightBlk">
            <MovingBlk icon={icon5} color={color4}/>
            <h5>{head5}</h5>
            <p>{para5}</p>
          </div>
          <div className="swInnerRightBlk">
            <MovingBlk icon={icon6} color={color1}/>
            <h5>{head6}</h5>
            <p>{para6}</p>
          </div>
          <div className="swInnerRightBlk">
            <MovingBlk icon={icon7} color={color2}/>
            <h5>{head7}</h5>
            <p>{para7}t</p>
          </div>
          <div className="swInnerRightBlk">
            <MovingBlk icon={icon8} color={color3}/>
            <h5>{head8}</h5>
            <p>{para8}</p>
          </div>
        </div>
        <SoftwareDevMoving head={rightHead} img={img2} />
      </div>


    </div>
  );
};

export default SoftwareBlk1Inner;
