import React from "react";
import expert from "../../assets/iosdev/ios_expert.png";
import Button from "../CommonButton/Button";
import { AiOutlineArrowRight } from "react-icons/ai";

const IosDevBlk2 = () => {
  return (
    <div className="IosDevBlk2_cover">
      <div className="IosDevBlk2_left">
        <h2>A Team of iOS Development Experts at Your Service</h2>
        <p>
          We deliver on our promises and can help anyone needing the insight of
          dedicated iOS app development professionals. With our expertise, you
          can get started quickly to deliver exceptional experiences to your
          users.
        </p>
        <Button
          type="button"
          buttonStyle="btn--primary--solid"
          style={{ borderRadius: "0" }}
        >
          Get a Quote <AiOutlineArrowRight className="arrow" />
        </Button>
      </div>
      <div className="IosDevBlk2_right">
        <img src={expert} />
      </div>
    </div>
  );
};

export default IosDevBlk2;
