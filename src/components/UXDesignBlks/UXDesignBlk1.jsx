import React from "react";
import UXDesignBlocks from "./UXDesignBlocks";
import "./UXDesignBlk1.css";
import { Link } from "react-router-dom";

const UXDesignBlk1 = ({ block1 }) => {
  return (
    <div> 
      {block1.map((index) => {
      return(  <div className="UXdesignBlk1_cover">
          <div className="UXDesignBlk1_left">
            <img src={index.leftImg} alt="" />
          </div>
          <div className="UXDesignBlk1_right">
            <h3>{index.heading}</h3>
            <div className="UXDesign_blocks_cover">
            <Link to='/uxdev'> <UXDesignBlocks num="1" head={index.head1} para={index.para1} /></Link> 
            <Link to='/brochure'>   <UXDesignBlocks num="2" head={index.head2} para={index.para2} /></Link> 
            <Link to='/logodesign'>   <UXDesignBlocks num="3" head={index.head3} para={index.para3} /></Link>
            <Link to='/corporate' ><UXDesignBlocks num="4" head={index.head4} para={index.para4} /></Link>
            </div>
          </div>
        </div>
      )
      })}
    </div>
  );
};

export default UXDesignBlk1;
