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

import react from "../../assets/homepage/react.png";
import swift from "../../assets/homepage/swift.png";
import flutter from "../../assets/homepage/flutter.png";
import kotlin from "../../assets/homepage/kotlin.png";
import codeigniter from "../../assets/homepage/codeigniter.png";
import php from "../../assets/homepage/php.png";

 
const Home = () => {
  return (
    <div className="erisn__home">
      <MainBanner
        smallhead="Your Search ends here"
        mainHeadB1="Innovative Solutions"
        mainHeadB2="  for your Business"
        bannerDesc="Elevate your business with erisntech, a theme design for all types of modern degital agencies, whatever their expertise might be!"
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerImg={<HomeBanner/>}
      />
      <HomeBlock />
      <HomeTechnologies 
      heading="Technologies we work with"
       product1={react}
       product_name1="React JS"
       product2={swift}
       product_name2="Swift"
       product3={flutter}
       product_name3="Flutter"
       product4={kotlin}
       product_name4="Kotlin"
       product5={codeigniter}
       product_name5="Codeigniter"
       product6={php}
       product_name6="PHP" />
      <Homeproducts />
      <HomeEnquiry/>
      <CommonSlider subHead="OUR SERVICES" mainB1="What Services We Offering" />
      <Slider/>
      <Testimonial />
      <Services />
  
      <Contact />
    </div>
  );
};

export default Home;
