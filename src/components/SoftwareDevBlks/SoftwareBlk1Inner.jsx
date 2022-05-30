import React from "react";
import "./SoftwareDeBlk1.css";
import SoftwareDevMoving from "./SoftwareDevMoving";
import MovingBlk from "./MovingBlk";
import color1 from "../../assets/softwaredev/color1.png";
import color2 from "../../assets/softwaredev/color2.png";
import color3 from "../../assets/softwaredev/color3.png";
import color4 from "../../assets/softwaredev/color4.png";

const SoftwareBlk1Inner = ({ block1 }) => {
  console.log(block1.lefthead)
  return (
    <>
      {block1.map((index) => {
        return (
          <div className="sw_inner_cover">
            <div className="software_innr_wrap">
              <SoftwareDevMoving head={index.lefthead} img={index.img1} />
              <div className="swInnerRight">
                <div className="swInnerRightBlk">
                  <MovingBlk icon={index.icon1} color={color1} />
                  <h5>{index.head1}</h5>
                  <p>{index.para1}</p>
                </div>
                <div className="swInnerRightBlk">
                  <MovingBlk icon={index.icon2} color={color2} />
                  <h5>{index.head2}</h5>
                  <p>{index.para2}</p>
                </div>
                <div className="swInnerRightBlk">
                  <MovingBlk icon={index.icon3} color={color3} />
                  <h5>{index.head3}</h5>
                  <p>{index.para3}</p>
                </div>
                <div className="swInnerRightBlk">
                  <MovingBlk icon={index.icon4} color={color4} />
                  <h5>{index.head4}</h5>
                  <p>{index.para4}</p>
                </div>
              </div>
            </div>

            <div className="software_innr_wrap">
              <div className="swInnerRight">
                <div className="swInnerRightBlk">
                  <MovingBlk icon={index.icon5} color={color4} />
                  <h5>{index.head5}</h5>
                  <p>{index.para5}</p>
                </div>
                <div className="swInnerRightBlk">
                  <MovingBlk icon={index.icon6} color={color1} />
                  <h5>{index.head6}</h5>
                  <p>{index.para6}</p>
                </div>
                <div className="swInnerRightBlk">
                  <MovingBlk icon={index.icon7} color={color2} />
                  <h5>{index.head7}</h5>
                  <p>{index.para7}</p>
                </div>
                <div className="swInnerRightBlk">
                  <MovingBlk icon={index.icon8} color={color3} />
                  <h5>{index.head8}</h5>
                  <p>{index.para8}</p>
                </div>
              </div>
              <SoftwareDevMoving head={index.righthead} img={index.img2} />
            </div>
          </div>
        );
      })}
      
      
    </>
  );
};

export default SoftwareBlk1Inner;
