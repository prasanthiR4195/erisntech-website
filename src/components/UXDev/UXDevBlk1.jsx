import React from "react";
import CommonHeading from "../../components/commonHeading/CommonHeading";
import BusinessBlk from "../../components/Business/BusinessBlk";
import business0 from "../../assets/UXDev/debrief.png";
import business1 from "../../assets/UXDev/define.png";
import business2 from "../../assets/UXDev/design.png";
import business3 from "../../assets/UXDev/develop.png";
import "../../containers/UXDev/UXDev.css";
const UXDevBlk1 = () => {
  return (
    <div className="UXDevBlk1_cover">
      <CommonHeading
        subHead="OUR SERVICES"
        mainB1="What Services We Offering"
      />
      <div className="UXDevBlk1">
        <BusinessBlk
          img={business0}
          title="Debrief"
          desc="Lorem Ipsum is simply dummy text of he printing and all of it"
          bg="#E3163D"
        />
        <BusinessBlk
          img={business1}
          title="Define"
          desc="Lorem Ipsum is simply dummy text of he printing and all of it"
          bg="#4E81EE"
        />
        <BusinessBlk
          img={business2}
          title="Design"
          desc="Lorem Ipsum is simply dummy text of he printing and all of it"
          bg="#63BC6F"
        />
        <BusinessBlk
          img={business3}
          title="Develop"
          desc="Lorem Ipsum is simply dummy text of he printing and all of it"
          bg="#F5C228"
        />
      </div>
    </div>
  );
};

export default UXDevBlk1;
