import React from "react";
import MainBanner from "../../components/Banner/MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai";
import SocialMediaMarketingBanner from "./SocialMediaMarketingBanner";
import SpecialistBlk1 from "../../components/SpecialistBlks/SpecialistBlk1";
import WebDevClients from "../../components/WebDevClients/WebDevClients";
import Faq from "../../components/Faq/Faq";
import Contact from "../../components/Contact/Contact";
import PPCAds from "../../components/PPCBlks/PPCAds";
import new_audience from "../../assets/social/new_audience.png";
import stronger_relationships from "../../assets/social/stronger_relationships.png";
import leads_n_conversions from "../../assets/social/leads_n_conversions.png";
import leg_up from "../../assets/social/leg_up.png";
import const_effective from "../../assets/social/const_effective.png";
import SocialServices from "../../components/SocialBlocks/SocialServices";
import WebDevExplained from "../../components/WebDevExplained/WebDevExplained";
import social_media from "../../assets/social/social_media.png";

const SocialMediaMarketing = () => {
  return (
    <div className="socialmedia_cover">
      <MainBanner
        smallhead="Digital Marketing"
        mainHeadB1="What Is Social Media Marketing?"
        bannerDesc="Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod.Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod"
        btnOrang={["Get a Quote", <AiOutlineArrowRight className="arrow" />]}
        bannerImg={<SocialMediaMarketingBanner />}
      />
      <SpecialistBlk1
        head="Why Is Social Media Marketing Important Today?"
        para="Your customers and prospects are using social media channels every single day, multiple times a day. Check out this blog to know how much time an average person spends on social media. Social media is an id- eal place for brands looking to gain insights into their audience’s interests and tastes. The way experts see it, smart companies will continue to invest in social media to achieve sustainable business growth."
      />
      <PPCAds
        head="Different Types of PPC Ads"
        para="The concept of social media marketing has evolved over the years. A few years ago, the sole purpose of using social media channels was to ge- nerate website traffic. Today, it has developed into something more than just a place to broadcast content. You can have a social media marketing strategy in place to achieve a broad range of benefits from creating two-way conversations with potential customers to expand the reach of whatever you’re selling. I am going to mention the top 5 benefits of social media marketing:"
        subhead1="New Audience "
        img1={new_audience}
        para1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim- en book."
        subhead2="Stronger Relationships"
        img2={stronger_relationships}
        para2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim- en book."
        subhead3="Leads & Conversions"
        img3={leads_n_conversions}
        para3="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim- en book."
        subhead4="Leg Up On Competitors"
        img4={leg_up}
        para4="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim- en book."
        subhead5="Cost-Effective"
        img5={const_effective}
        para5="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim- en book."
      />
      <SocialServices />
      <WebDevClients />
      <WebDevExplained
        headB1="How Often Should You Post On Social Media?"
        para="If you post too infrequently, your followers will forget your brand. If you post too often, they might find your brand overcrowding their feed. On Facebook, businesses with less than 10,000 followers that post more than 60 times a month receive 60% fewer clicks per post than those co- mpanies that post 5 or fewer times a month. Don’t over- whelm your audience with content. Be selective about what you’re sharing."
        subhead3="Pro tips for creating the best social media experiences for your audience"
        para2="Be responsive Engage with those who respond to your content or share something on your pages - responsiveness encour- ages more conversions."
        img={social_media}
      />

      <Faq />
      <Contact />
    </div>
  );
};

export default SocialMediaMarketing;
