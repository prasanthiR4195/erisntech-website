import React, { useState } from "react"; 
import "./Contact.css";
import { TextField, makeStyles } from "@material-ui/core"; 
import { AiOutlineArrowRight } from "react-icons/ai";  
import Button from "../CommonButton/Button";
import { 
  Checkbox,
  FormControlLabel,Box
} from "@material-ui/core";

const Contact = () => {
  const useStyle = makeStyles((theme) => ({
    textField: {
      marginBottom: "20px",
    },
  }));
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

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
    <div className="contact_wrap">
      <div className="contact_left">
        <div className="contact_left_content">
          <h1>
            Let's get in <br /> <span className="red_font">Touch</span>
          </h1>
          <p>
            We Pride Ourselves On Declaring a Prompt, Reliable and Helpful
            Services
          </p>
         
        </div>
      </div>
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
          <div className="contact_sec">
            <ul>
              <li>
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{
                        color: "#F23801",
                        transform: "scale(.8)",
                      }}
                    />
                  }
                  style={{ fontSize: "13px" }}
                  label={
                    <Box component="div" fontSize={15}>
                      Website Development
                    </Box>
                  }
                />
              </li>
              <li>
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{
                        color: "#F23801",
                        transform: "scale(.8)",
                      }}
                    />
                  }
                  style={{ fontSize: "13px" }}
                  label={
                    <Box component="div" fontSize={15}>
                      Ecommerce Development
                    </Box>
                  }
                />
              </li>
              <li>
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{
                        color: "#F23801",
                        transform: "scale(.8)",
                      }}
                    />
                  }
                  style={{ fontSize: "13px" }}
                  label={
                    <Box component="div" fontSize={15}>
                      SEO Service
                    </Box>
                  }
                />
              </li>
            </ul> 
            <ul>
              <li>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      style={{
                        color: "#F23801",
                        transform: "scale(.8)",
                      }}
                    />
                  }
                  style={{ fontSize: "13px" }}
                  label={
                    <Box component="div" fontSize={15}>
                      Mobile App Development
                    </Box>
                  }
                />
              </li>
              <li>
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{
                        color: "#F23801",
                        transform: "scale(.8)"
                      }}
                    />
                  }
                  style={{ fontSize: "13px" }}
                  label={
                    <Box component="div" fontSize={15}>
                      Digital Marketing
                    </Box>
                  }
                />
              </li>
            </ul> 
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
  );
};

export default Contact;
