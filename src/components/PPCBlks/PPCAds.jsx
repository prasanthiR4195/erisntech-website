import React from "react";
import CommonHeading from "../commonHeading/CommonHeading";
import Button from "../CommonButton/Button";
import { AiOutlineArrowRight } from "react-icons/ai";

const PPCAds = ({
  head,  para,  subhead1,  img1,  para1, 
  subhead2,  img2,  para2,  subhead3,  img3,  para3,
  subhead4,  img4,  para4,  subhead5,  img5,  para5,
}) => {
  return (
    <div className="PPCAds_cover">
      <CommonHeading mainB1={head} />
      {para ? <p className="PPCAds_head_para">{para}</p> : ""}

      <div className="PPCAds_inner">
        <div className="PPCAds_row">
          <div className="PPCAds_img">
            <span>{subhead1}</span>
            <img src={img1} />
          </div>
          <div className="PPCAds_para">
            <p>{para1}</p>
            <Button
              type="button"
              buttonStyle="btn--primary--solid"
              style={{ borderRadius: "0" }}
            >
              Get a Quote <AiOutlineArrowRight className="arrow" />
            </Button>
          </div>
        </div>
        <div className="PPCAds_row">
          <div className="PPCAds_para">
            <p>{para2}</p>
            <Button
              type="button"
              buttonStyle="btn--primary--solid"
              style={{ borderRadius: "0" }}
            >
              Get a Quote <AiOutlineArrowRight className="arrow" />
            </Button>
          </div>
          <div className="PPCAds_img">
            <span>{subhead2}</span>
            <img src={img2} />
          </div>
        </div>
        <div className="PPCAds_row">
          <div className="PPCAds_img">
            <span>{subhead3}</span>
            <img src={img3} />
          </div>
          <div className="PPCAds_para">
            <p>{para3}</p>
            <Button
              type="button"
              buttonStyle="btn--primary--solid"
              style={{ borderRadius: "0" }}
            >
              Get a Quote <AiOutlineArrowRight className="arrow" />
            </Button>
          </div>
        </div>
        {subhead4 ? (
          <div className="PPCAds_row">
            <div className="PPCAds_para">
              <p>{para4}</p>
              <Button
                type="button"
                buttonStyle="btn--primary--solid"
                style={{ borderRadius: "0" }}
              >
                Get a Quote <AiOutlineArrowRight className="arrow" />
              </Button>
            </div>
            <div className="PPCAds_img">
              <span>{subhead4}</span>
              <img src={img4} />
            </div>
          </div>
        ) : (
          ""
        )}
        {subhead5 ? (
          <div className="PPCAds_row">
            <div className="PPCAds_img">
              <span>{subhead5}</span>
              <img src={img5} />
            </div>
            <div className="PPCAds_para">
              <p>{para5}</p>
              <Button
                type="button"
                buttonStyle="btn--primary--solid"
                style={{ borderRadius: "0" }}
              >
                Get a Quote <AiOutlineArrowRight className="arrow" />
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PPCAds;
