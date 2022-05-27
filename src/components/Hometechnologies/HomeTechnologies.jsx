import React from "react";
import CommonHeading from "../commonHeading/CommonHeading";
import Techslider from "../Slider/Techslider";


const HomeTechnologies = () => {
  return (
    <div className="home_technologies_Wrap">
      <CommonHeading 
        mainB1="Technologies we work with"
      />
      <div className="slider">
          <Techslider/>
      </div>
    </div>
  );
};

export default HomeTechnologies;
