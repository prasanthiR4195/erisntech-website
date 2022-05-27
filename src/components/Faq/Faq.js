import React from "react";
import "./Faq.css";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails"; 
import {IoIosArrowDown} from "react-icons/io";
import CommonHeading from "../commonHeading/CommonHeading";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Faq = () => {
  const classes = useStyles();
  return (
    <div className="faq_wrap">
      <CommonHeading  
          mainB1="Frequently Asked Questions from Our Support "
           />
          <div className="faq_inner_wrap">
      <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          What is Website development?
        </AccordionSummary>
        <AccordionDetails>1</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          Which technology is better for your Business Website?
        </AccordionSummary>
        <AccordionDetails>2</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
         Which Web Development services do you provide?
        </AccordionSummary>
        <AccordionDetails>3</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
         Why should I choose your company?
        </AccordionSummary>
        <AccordionDetails>4</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
         How much time takes to complete the Website?
        </AccordionSummary>
        <AccordionDetails>5</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
         Are you providing SEO friendly Website?
        </AccordionSummary>
        <AccordionDetails>6</AccordionDetails>
      </Accordion>
      </div>
       
    </div>
  );
};

export default Faq;
