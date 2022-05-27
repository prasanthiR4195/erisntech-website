import React from "react";
import "./TestimonialBox.css";

const TestimonialBox = ({ desc, clientName, img, job }) => {
  return (
    <div className="testimonial_box">
      <p>{desc}</p>
      <div className="test_footer">
        <h3>
          {clientName} <span>{job}</span>
        </h3>
      </div>
      <span className="test_img">
        <img src={img} alt="" />
      </span>
    </div>
  );
};

export default TestimonialBox;
