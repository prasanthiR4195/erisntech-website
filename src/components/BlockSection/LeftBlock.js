import React from "react";
import "./LeftBlock.css";
const STYLES = ["bg-0", "bg-1", "bg-2", "bg-3", "bg-4", "bg-5", "bg-6"];

const LeftBlock = ({ img, title, desc, num, color }) => {
  const checkNum = STYLES.includes(num) ? num : STYLES[num];

  return (
    <div className="left_block_wrap">
      <div className="left_block_inner">
        {/* <span className={checkNum}></span> */}
        <div className="left_icon_block">
          <img src={img} alt="" className="left_icon" />
          <img src={color} alt="" className="left_color" />
        </div>

        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default LeftBlock;
