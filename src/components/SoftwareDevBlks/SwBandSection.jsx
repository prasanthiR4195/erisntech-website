import React from "react";
import Button from "../CommonButton/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./SoftwareDeBlk1.css";
import Fade from 'react-reveal/Fade';

const SwBandSection = ({para}) => {
  return (
    <Fade bottom>
    <div className="software_band_wrap">
      <p>{para}</p>
      <Button
        type="button"
        buttonStyle="btn--primary--solid"
        style={{ borderRadius: "0" }}
      >
        Get a Quote <AiOutlineArrowRight className="arrow" />
      </Button>
    </div>
    </Fade>
  );
};

export default SwBandSection;
