import React from "react";
import "./Homeproducts.css";
import TabContent from "../TabContent/TabContent";
import CommonHeading from "../commonHeading/CommonHeading";

import LMS from "../../assets/homepage/LMS.png";
import HMS1 from "../../assets/homepage/HMS1.png";
import POS from "../../assets/homepage/POS.png";
import HRM from "../../assets/homepage/HRM.png";
import TabContent2 from "../TabContent/TabContent2";

const Homeproducts = () => {
  const data = [
    {
      main: "LMS",
      img: LMS,
      title: "Erisn Classroom",
      desc: "A one of its kind, dynamic Learning Management System furnishing incredibly wonderful and distinct features, thereby catering to the various different requirements of school administration, teachers and students alike.",
    },
    {
      main: "HMS ",
      img: HMS1,
      title: "ErisnTech Hospital Management System ",
      desc: "Our ErisnTech HMS automates workflows, enables online bookings, stores electronic records and delivers notifications in an entirely digitized environment. 25+ modules with 8 inbuilt users make it ready for every hospital, medical institution, patient and doctor out there.",
    },
    {
      main: "POS ",
      img: POS,
      title: "ErisnTech Inventory with POS ",
      desc: "A one-of-a-kind LMS built to create, customize and collate courses that match the curriculum. Showcase your expertise while aligning with the vast requirements of school administrations, students and teachers alike.",
    },
    {
      main: "HRM",
      img: HRM,
      title: " ErisnTech HRM System",
      desc: "Our ErisnTech HMS automates workflows, enables online bookings, stores electronic records and delivers notifications in an entirely digitized environment. 25+ modules with 8 inbuilt users make it ready for every hospital, medical institution, patient and doctor out there.",
    },
  ];
  return (
    <div className="pro-outer">
      <CommonHeading
        subHead="OUR SAAS PRODUCTS"
        mainB1="We Have Varities Of SAAS Products For You"
      />
      <div className="pro-inner">
        {data.map((index) => {
          return <TabContent main={index.main} img={index.img} title={index.title} desc={index.desc} />;
        })}
      </div>
    </div>
  );
};

export default Homeproducts;
