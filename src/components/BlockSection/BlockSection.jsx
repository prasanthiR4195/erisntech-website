import React from "react";
import CommonHeading from "../commonHeading/CommonHeading";
import Block from "./Block";
import "./BlockSection.css";

const BlockSection = () => {
  return (
    <div className="block_section_wrap">
      <div className="block_section_one_wrap">
        <div className="block_section_one">
          <div className="block_img">
            <img src="assets/about/what_do.png" alt="What we can do" />
          </div>
          <div className="block_text">
            <h4>
              What
              <br /> We Can Do?
            </h4>
            <p>
              We put a strong focus on the needs of your business to figure out
              solutions that best fit your demand and nail it.
            </p>
          </div>
        </div>
        <div className="block_section_one">
          <div className="block_img">
            <img src="assets/about/partners.png" alt="What we can do" />
          </div>
          <div className="block_text">
            <h4>
              Become <br /> Our Partners?
            </h4>
            <p>
              Erisn’s preventive and progressive approach will help you take the
              lead while addressing possible threats in managing data.
            </p>
          </div>
        </div>
        <div className="block_section_one">
          <div className="block_img">
            <img src="assets/about/need_hand.png" alt="What we can do" />
          </div>
          <div className="block_text">
            <h4>
              Need <br /> A Hand?
            </h4>
            <p>
              Our support team is available 24/7 a day and can get ready for
              solving any of your situational rising problems.
            </p>
          </div>
        </div>
      </div>
      <div className="block_section_two_wrap">
        <CommonHeading
          subHeadwithBg="Our Mission and Values"
          mainB1=" The things we focused on for our"
          mainR="future"
          mainB2=""
        />
        <div className="block_section_two">
          <Block
            img="assets/about/client_focused.png"
            title="Client Focused"
            desc="Our main success derives from a deep understanding of our clients, to whom all our Erisn's team is committed to delivering exceptional service and value."
          />

          <Block
            img="assets/about/excellence.png"
            title="Excellence"
            desc="Our main success derives from a deep understanding of our clients, to whom all our Erisn's team is committed to delivering exceptional service and value."
          />
          <Block
            img="assets/about/aspirations.png"
            title="Aspirations"
            desc="Our main success derives from a deep understanding of our clients, to whom all our Erisn's team is committed to delivering exceptional service and value."
          />
          <Block
            img="assets/about/results.png"
            title="Results"
            desc="Our main success derives from a deep understanding of our clients, to whom all our Erisn's team is committed to delivering exceptional service and value."
          />
          <Block
            img="assets/about/commitment.png"
            title="Commitment"
            desc="Our main success derives from a deep understanding of our clients, to whom all our Erisn's team is committed to delivering exceptional service and value."
          />
        </div>
      </div>
    </div>
  );
};

export default BlockSection;
