import React from "react";
import CommonHeading from "../commonHeading/CommonHeading";
import Techslider from "../Slider/Techslider";


const HomeTechnologies = ({heading,product1,product2,product3,product4,product5,product6,product_name1,product_name2,product_name3,product_name4,product_name5,product_name6}) => {
  return (
    <div className="home_technologies_Wrap">
      <CommonHeading mainB1={heading} />
      <div className="slider">
        <Techslider
          product1={product1}
          product_name1={product_name1}
          product2={product2}
          product_name2={product_name2}
          product3={product3}
          product_name3={product_name3}
          product4={product4}
          product_name4={product_name4}
          product5={product5}
          product_name5={product_name5}
          product6={product6}
          product_name6={product_name6}
        />
      </div>
    </div>
  );
};

export default HomeTechnologies;
