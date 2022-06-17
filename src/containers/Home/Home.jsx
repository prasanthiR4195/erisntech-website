import React from "react"; 
import MainBanner from "../../components/Banner/MainBanner";   

import Contact from "../../components/Contact/Contact";
import HomeBlock from "../../components/HomeBlock/HomeBlock"; 
import Services from "../../components/Services/Services"; 
import { AiOutlineArrowRight } from "react-icons/ai";
import Testimonial from "../../components/Testimonial/Testimonial"; 
import HomeTechnologies from "../../components/Hometechnologies/HomeTechnologies";
import Homeproducts from "../../components/Homeproducts/Homeproducts";
import CommonSlider from "../../components/Slider/CommonSlider";
import Slider from "../../components/Slider/Slider";
import HomeBanner from "./HomeBanner";
import HomeEnquiry from "../../components/HomeEnquiry/HomeEnquiry"; 
import './home.css'

const Home = () => {
  return (
    <div className="erisn__home">
      <MainBanner
        smallhead="Your Search ends here"
        mainHeadB1="Innovative Solutions"
        mainHeadB2="  for your Business"
        bannerDesc="Elevate your business with erisntech, a theme design for all types of modern degital agencies, whatever their expertise might be!"
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerStyle="banner-content-left" 
        bannerImg={<HomeBanner/>}
      />
      <HomeBlock />
      <HomeTechnologies />
      <Homeproducts />
      <HomeEnquiry/>
      <CommonSlider subHead="OUR SERVICES" mainB1="What Services We Offering" />
      <Slider/>
      <Testimonial />
      <Services />
 
      {/* <Tabsection />
      <BlackSection />
      <ITSolution />
      <Tabsection2 />
      <Banner
        subHeadwithBg="CONNECT WITH US"
        mainHeadB1="Interested in Custom "
        mainHeadR=" Website Development? "
        subhead="Schedule a Call With Experts Now"
        btnOrang={["Contact Us", <AiOutlineArrowRight className="arrow" />]}
        img={banner2}
        bannerStyle="banner-content-left"
        btnGrey=""
      />
      <Business /> */}
      <Contact />
    </div>
  );
};

export default Home;
