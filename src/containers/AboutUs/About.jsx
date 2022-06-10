import React from "react";
import Banner from "../../components/Banner/Banner";
import BlockSection from "../../components/BlockSection/BlockSection";
import Contact from "../../components/Contact/Contact";
import Teams from "../../components/Teams/Teams";
import banner from "../../assets/about/banner.png";
import mobile_explained from "../../assets/about/innovate_your_way.png";
import WebdevExplainedRev from "../../components/WebDevExplained/WebdevExplainedRev";
import CommonHeading from "../../components/commonHeading/CommonHeading";
import './About.css'
import WebDevClients from "../../components/WebDevClients/WebDevClients";
import Faq from "../../components/Faq/Faq";

const About = () => {
  return (
    <div>
      <Banner
        common_headB="ABOUT "
        common_headR="ERISNTECH"
        bannerDesc="Erisn empowers organizations to transform their businesses by accelerating digital transformation and offers a complete bunch of It and software development services to help businesses address their key technology challenges, enhance productivity & control costs."
        btnOrang="Discuss Your Project"
        btnGrey="Our Services"
        img={banner}
        subHeadB1="We work for your"
        subHeadR="incredible "
        subHeadB2="success."
        bannerStyle="banner-content-center"
        bannerImage="full_image"
      />
      <BlockSection />
      <div className="about_webdev_cover">
        <CommonHeading
          mainB1="Innovate Your Way"
          subHead="Why Wait for Your Audience to Find You ?"
        />
        <WebdevExplainedRev
          para="It's no longer enough turning a great idea into a working application. You need to strive towards excellence by taking your ideas beyond the finished product. At ErisnTech we wed software development services with custom ux design and full-service digital marketing. Our unique, all-in-one agency was created to revolutionize industries and make our client’s products not only survive but thrive!"
          img={mobile_explained}
        />
      </div>

      <Teams />
      <WebDevClients />
      <Faq/>
      <Contact />
    </div>
  );
};

export default About;
