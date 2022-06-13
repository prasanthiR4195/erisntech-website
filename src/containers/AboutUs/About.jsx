import React from "react"; 
import BlockSection from "../../components/BlockSection/BlockSection";
import Contact from "../../components/Contact/Contact";
import Teams from "../../components/Teams/Teams"; 
import mobile_explained from "../../assets/about/innovate_your_way.png";
import WebdevExplainedRev from "../../components/WebDevExplained/WebdevExplainedRev";
import CommonHeading from "../../components/commonHeading/CommonHeading";
import './About.css'
import WebDevClients from "../../components/WebDevClients/WebDevClients";
import Faq from "../../components/Faq/Faq";
import MainBanner from "../../components/Banner/MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai"; 
import bannerBG from "../../assets/about/banner-bg.png"; 
import AboutBanner from "./AboutBanner";

const About = () => {
  return (
    <div>
        <MainBanner
        smallhead="About ErisnTech"
        mainHeadB1="We work for your incredible success."
        bannerDesc="Erisn empowers organizations to transform their businesses by accelerating digital transformation and offers a complete bunch of It and software development services to help businesses address their key technology challenges, enhance productivity & control costs."
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerStyle="banner-content-left"
        bannerImg={<AboutBanner/>}
        bannerBG={bannerBG}
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
