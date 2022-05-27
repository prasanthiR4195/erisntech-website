import React from "react";
import Banner2 from "../../components/Banner/Banner2";
import Block2 from "../../components/BlockSection/Block2";
import TwoBlock from "../../components/BlockSection/TwoBlock";
import CommonHeading from "../../components/commonHeading/CommonHeading";
import Contact from "../../components/Contact/Contact";
import classes from "./PartnerWithUs.module.css"; 


const PartnerWithUs = () => {
  return (
    <div className={classes.wrap}>
      <Banner2 />
      <div className={classes.heading}>
        <CommonHeading mainB1="Partner " mainR="Programs" />
      </div>
      <div className={classes.block_section_one}>
        <TwoBlock
          img="assets/partnerwithus/icon1.png"
          title="Business Partner"
          desc="By partnering with us, businesses of all sizes can take full advantage of our resources and grow in the marketplace. Erisn uses a slew of the latest tools and technology to help an organization improve its business capabilities."
        />
        <TwoBlock
          img="assets/partnerwithus/icon2.png"
          title="Sales Partner"
          desc="Erisn helps in enabling a unified view of customers in order to drive user experience and facilitate effective cross-selling"
        />
        <TwoBlock
          img="assets/partnerwithus/icon3.png"
          title="Referral Partner"
          desc="As a referral partner, you will refer strong sales leads to Erisn. The referral partner will share the sales lead's contact information who could be turned into potential leads for the business."
        />
      </div>
      <CommonHeading mainB1="Why do we have the best  " mainR="solutions?" />
      <div className={classes.block_section_two}>
        <Block2
          titleB="Smart"
          desc="We deliver smart solutions as per the requirement of the business to help the organization thrive in the competitive marketplace."
        />
        <Block2
          titleB="Latest "
          titleR="Technology"
          desc="We use the latest technology to build and design products that can yield the best results for the business."
        />
        <Block2
          titleB="Dedicated "
          titleR="Team"
          desc="Our team of experienced and dedicated professionals provides the best solutions within the stipulated time period."
        />
        <Block2
          titleB="Robust"
          desc="Our robust solutions ensure effective and profitable results for the business."
        />
        <Block2
          titleB="Value for "
          titleR="Money"
          desc="Our profit-oriented approach allows us to provide the best services that are valued for money."
        />
        <Block2
          titleB="Customized "
          titleR="Solutions"
          desc="Our team of experienced and dedicated professionals provides the best solutions within the stipulated time period."
        />
      </div>
      <Contact />
    </div>
  );
};

export default PartnerWithUs;
