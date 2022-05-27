import React from "react";
import "./Business.css";
import CommonHeading from "../commonHeading/CommonHeading";
import BusinessBlk from "./BusinessBlk";

import business1 from '../../assets/homepage/business-1.png';
import business2 from '../../assets/homepage/business-2.png';
import business3 from '../../assets/homepage/business-3.png';
import business4 from '../../assets/homepage/business-4.png';
import business5 from '../../assets/homepage/business-5.png';
import business6 from '../../assets/homepage/business-6.png';
import business7 from '../../assets/homepage/business-7.png';
import business8 from '../../assets/homepage/business-8.png'; 

const Business = () => {
  return (
    <div className="business_outer_wrap">
      <CommonHeading
      subHeadwithBg="OUR SERVICES"
        mainB1="What we can do for your "
        mainR="Business "
        mainB2="  for your success"
      />
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
        <div className="business_wrap_inner">
            <BusinessBlk img={business1} title="SEO Consultancy" desc="Etiam vel placerat enim dapibus varius massa sodales lacinia" />
            <BusinessBlk img={business2} title="Competitor Analysis" desc="Etiam vel placerat enim dapibus varius massa sodales lacinia" /> 
            <BusinessBlk img={business3} title="Social Marketing" desc="Etiam vel placerat enim dapibus varius massa sodales lacinia" />
            <BusinessBlk img={business4} title="Reportyng & Analysis" desc="Etiam vel placerat enim dapibus varius massa sodales lacinia" />
            <BusinessBlk img={business5} title="Graphic Design" desc="Etiam vel placerat enim dapibus varius massa sodales lacinia" />
            <BusinessBlk img={business6} title="Web Design" desc="Etiam vel placerat enim dapibus varius massa sodales lacinia" />
            <BusinessBlk img={business7} title="Development" desc="Etiam vel placerat enim dapibus varius massa sodales lacinia" />
            <BusinessBlk img={business8} title="Motion Graphics" desc="Etiam vel placerat enim dapibus varius massa sodales lacinia" />

        </div>
    </div>
  );
};

export default Business;
