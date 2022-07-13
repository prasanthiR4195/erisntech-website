import React from "react";
import Block from "../BlockSection/Block";
import './HomeBlock.css'
import CommonHeading from "../commonHeading/CommonHeading";
import business0 from "../../assets/homepage/web-development.png";
import business1 from "../../assets/homepage/app-development.png";
import business2 from "../../assets/homepage/app-development.png";
import business3 from "../../assets/homepage/design.png";
import business4 from "../../assets/homepage/ecommerce.png"; 
import business5 from "../../assets/homepage/digital.png"; 
import BusinessBlk from "../Business/BusinessBlk";


const HomeBlock = () => { 
  return (
    <div className="home_block_outer"> 
      <CommonHeading
        subHead="OUR SERVICES"
        mainB1="What Services We Offering"   
      />
      <div className="home_block_wrap" >
       
        <BusinessBlk
            img={business0}
            title="Web Development"
            desc="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed"
            bg="#4E81EE"
        />
        <BusinessBlk
            img={business1}
            title="App Development "
            desc="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed"
            bg="#E3163D"
        />
        <BusinessBlk
            img={business2}
            title="Software Development "
            desc="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed"
            bg="#049CE5"
        />
        <BusinessBlk
            img={business3}
            title="Design & Branding Services"
            desc="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed"
            bg="#598695"
        />
        <BusinessBlk
            img={business4}
            title="Ecommerce web Develoment "
            desc="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed"
            bg="#F5C228"
        />
        <BusinessBlk
            img={business5}
            title="Digital Marketing Services "
            desc="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed"
            bg="#63BC6F"
        /> 
      </div>
     
    </div>
  );
};

export default HomeBlock;
