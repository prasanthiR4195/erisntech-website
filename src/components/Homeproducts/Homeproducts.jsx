import React from "react";
import "./Homeproducts.css";
import TabContent from "../TabContent/TabContent";
import CommonHeading from "../commonHeading/CommonHeading";

import product1 from "../../assets/homepage/product-1.png";
import product2 from "../../assets/homepage/product-2.png";
import product3 from "../../assets/homepage/POS.png";
import product4 from "../../assets/homepage/HRM.png";
import TabContent2 from "../TabContent/TabContent2";

const Homeproducts = () => {
  
  return (
    <div className="pro-outer">
      <CommonHeading
        subHead="OUR SAAS PRODUCTS"
        mainB1="We Have Varities Of SAAS Products For You"
      />
      <div className="pro-inner" >
        <TabContent
          main="LMS"
          img={product1}
          title="Erisn Classroom"
          desc="A one of its kind, dynamic Learning Management System furnishing incredibly wonderful and distinct features, thereby catering to the various different requirements of school administration, teachers and students alike."
        />
        <TabContent2
          main="HMS"
          img={product2}
          title="ErisnTech Hospital Management System"
          desc="Our ErisnTech HMS automates workflows, enables online bookings, stores electronic records and delivers notifications in an entirely digitized environment. 25+ modules with 8 inbuilt users make it ready for every hospital, medical institution, patient and doctor out there."
        />
        <TabContent
         main="POS"
         img={product3}
         title="ErisnTech Inventory with POS"
         desc="A one-of-a-kind LMS built to create, customize and collate courses that match the curriculum. Showcase your expertise while aligning with the vast requirements of school administrations, students and teachers alike."
         />
        <TabContent2
         main="HRM"
         img={product4}
         title="ErisnTech HRM System"
         desc="Our ErisnTech HMS automates workflows, enables online bookings, stores electronic records and delivers notifications in an entirely digitized environment. 25+ modules with 8 inbuilt users make it ready for every hospital, medical institution, patient and doctor out there."
         />

      </div>
    </div>
  );
};

export default Homeproducts;
