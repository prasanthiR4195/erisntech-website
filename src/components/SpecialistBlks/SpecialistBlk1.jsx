import React, { useState } from "react"; 

import { TextField, makeStyles } from "@material-ui/core"; 
import { AiOutlineArrowRight } from "react-icons/ai";  
import Button from "../CommonButton/Button";
import { 
  Checkbox,
  FormControlLabel,Box
} from "@material-ui/core";

const SpecialistBlk1 = () => {
 
    const useStyle = makeStyles((theme) => ({
        textField: {
          marginBottom: "20px",
        },
      }));
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    
      let data = {
        name: name,
        company: company,
        email: email,
        number: number,
        message: message,
      };
      const submitHandle = () => {
        console.log(data, "data");
        setName("");
        setCompany("");
        setEmail("");
        setNumber("");
        setMessage("");
      };
    
    const classes = useStyle();
  return (
    <div className='SpecialistBlk1_cover'>

        <div className='SpecialistBlk1_left'>
            <div className="SpecialistBlk1_left_inner">
                <h2>Search Engine Optimization Services</h2>
                <span className='heading_underline'></span>
                <p>Hiring Erisn, a leading SEO service provider company, can let your business gain a solid foothold in today’s digital landscape. Our affordable, professional, and effective Search Engine Optimization services can help your digital marketing campaign succeed.</p>
            </div>
        </div>
        <div className='SpecialistBlk1_right'>
            <div className="contact_right">
            <form>
          <div className="row">
            <div className="col-md-6">
              <TextField
                id="outlined-basic"
                label="Name*"
                variant="outlined"
                className={classes.textField}
                style={{
                  backgroundColor: "#EFEFEF",
                  marginBottom: "10px",
                  color: "#000000",
                }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </div>
            <div className="col-md-6">
              <TextField
                id="outlined-basic"
                label="Company Name*"
                variant="outlined"
                className={classes.textField}
                style={{
                  backgroundColor: "#EFEFEF",
                  marginBottom: "10px",
                  color: "#000000",
                }}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
                value={company}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <TextField
                id="outlined-basic"
                label="Email*"
                variant="outlined"
                className={classes.textField}
                style={{
                  backgroundColor: "#EFEFEF",
                  marginBottom: "10px",
                  color: "#000000",
                }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div className="col-md-6">
              <TextField
                id="outlined-basic"
                label="Contact Number"
                variant="outlined"
                className={classes.textField}
                style={{
                  backgroundColor: "#EFEFEF",
                  marginBottom: "10px",
                  color: "#000000",
                }}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                value={number}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <TextField
                id="outlined-basic"
                label="Describe*"
                multiline
                minRows={4}
                variant="outlined"
                className={classes.textField}
                style={{
                  width: "100%",
                  backgroundColor: "#EFEFEF",
                  marginBottom: "10px",
                  color: "#000000",
                }}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
              />
            </div>
          </div>
          
          <div style={{  marginTop: "20px" }}>
            <Button
              type="button"
              buttonStyle="btn--primary--solid"
              style={{ borderRadius: "0" }}
              onClick={submitHandle}
            >
              Submit <AiOutlineArrowRight className="arrow" />
            </Button>
          </div>
        </form>
            </div>
        </div>
    </div>
  )
}

export default SpecialistBlk1