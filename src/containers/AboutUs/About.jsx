import React from "react";
import Banner from "../../components/Banner/Banner";
import BlockSection from "../../components/BlockSection/BlockSection";
import Contact from "../../components/Contact/Contact";
import Teams from "../../components/Teams/Teams";
import banner from '../../assets/about/banner.png'

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
      <Teams />
      <Contact />
    </div>
  );
};

export default About;
