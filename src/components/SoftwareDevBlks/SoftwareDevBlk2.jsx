import React from "react";
import Button from "../CommonButton/Button";
import "./SoftwareDeBlk1.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import swimg1 from "../../assets/softwaredev/swImg1.png";
import SwBlocks from "./SwBlocks";
import color1 from "../../assets/softwaredev/color1.png";
import color2 from "../../assets/softwaredev/color2.png";
import color3 from "../../assets/softwaredev/color3.png";
import color4 from "../../assets/softwaredev/color4.png";
import color5 from "../../assets/softwaredev/color5.png";
import AOS from "aos";

const SoftwareDevBlk2 = () => {
  AOS.init();
  return (
    <div className="swDevBlk2_wrap_cover">
      <div className="swDevBlk2_wrap">
        <div className="swDevBlk2_left">
          <img src={swimg1} data-aos="fade-right" data-aos-delay="300" />
          <img
            src={color2}
            className="colorY"
            data-aos="fade-left"
            data-aos-delay="300"
          />
        </div>
        <div className="swDevBlk2_right">
          <h2>
            Product Lifecycle Management <span>(PLM)</span>
          </h2>
          <p>
            This model covers everything from customer service support, sales
            and marketing strategies, deployment, and implementation. All you
            need are your technical documentation that should describe what
            product features are used.
          </p>
          <Button
            type="button"
            buttonStyle="btn--primary--solid"
            style={{ borderRadius: "0" }}
          >
            Get a Quote <AiOutlineArrowRight className="arrow" />
          </Button>
        </div>
      </div>
      <div className="sw_block_cover">
        <SwBlocks
          num="1"
          color={color1}
          head="Data Migrations and Upgrades"
          para="Lorem Ipsum is simply dummy text of he printing and all of it. Lorem Ipsum is simply dummy text of he printing and all of it Lorem Ipsum is simply dummy text of he printing"
        />
        <SwBlocks
          num="2"
          color={color2}
          head="Infrastructure Support Services"
          para="Lorem Ipsum is simply dummy text of he printing and all of it. Lorem Ipsum is simply dummy text of he printing and all of it Lorem Ipsum is simply dummy text of he printing"
        />
        <SwBlocks
          num="3"
          color={color3}
          head="Data Back-up and disaster Recovery"
          para="Lorem Ipsum is simply dummy text of he printing and all of it. Lorem Ipsum is simply dummy text of he printing and all of it Lorem Ipsum is simply dummy text of he printing"
        />
        <SwBlocks
          num="4"
          color={color4}
          head="IT Security Services"
          para="Lorem Ipsum is simply dummy text of he printing and all of it. Lorem Ipsum is simply dummy text of he printing and all of it Lorem Ipsum is simply dummy text of he printing"
        />
        <SwBlocks
          num="5"
          color={color5}
          head="SLA Support Services"
          para="Lorem Ipsum is simply dummy text of he printing and all of it. Lorem Ipsum is simply dummy text of he printing and all of it Lorem Ipsum is simply dummy text of he printing"
        />
        <SwBlocks
          num="6"
          color={color2}
          head="Quality Assurance (QA) Testing"
          para="Lorem Ipsum is simply dummy text of he printing and all of it. Lorem Ipsum is simply dummy text of he printing and all of it Lorem Ipsum is simply dummy text of he printing"
        />
      </div>
    </div>
  );
};

export default SoftwareDevBlk2;
