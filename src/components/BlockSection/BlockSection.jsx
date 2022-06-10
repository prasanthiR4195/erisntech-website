import React from "react"; 
import "./BlockSection.css";
import blockImg1 from '../../assets/about/what_we_can_do.png'
import blockImg2 from '../../assets/about/become_our_partners.png'
import blockImg3 from '../../assets/about/need_a_hand.png' 
import NormalBlks from "./NormalBlks";
 

const BlockSection = () => {
  return (
    <div className="block_section_wrap">
      <div className="block_section_one_wrap">
        <NormalBlks
        img={blockImg1}
        head="What We Can Do?"
        para="Lorem Ipsum is simply dummy text of he printing and"
        />
        <NormalBlks
        img={blockImg2}
        head="Become Our Partners?"
        para="Lorem Ipsum is simply dummy text of he printing and"
        />
         <NormalBlks
        img={blockImg3}
        head="Need A Hand?"
        para="Lorem Ipsum is simply dummy text of he printing and"
        /> 
      </div>
      
    </div>
  );
};

export default BlockSection;
