import React, { useState } from "react";
import "./ContactUs.css";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  makeStyles,Box
} from "@material-ui/core"; 
import { AiOutlineArrowRight } from "react-icons/ai";
import contact from '../../assets/contact/contact.png'

const useStyle = makeStyles((theme) => ({
  textField: {
    marginBottom: "15px",
  },
}));

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  let data = {
    email: email,
    name: name,
    number: number,
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(data, "data");
    setEmail("");
    setName("");
    setNumber("");
    alert('email :',email,'name :',name,'number :', number)
  };

  const classes = useStyle();

  return (
    <div className="contactUs_wrap">
      <div className="contactUs_left">
        <div className="common_head">
          CONTACT US 
        </div>
        <h2 className="contact_heading">
          Excited about the works?
          <br /> Please
            get in touch. 
        </h2>
        <p>Let's turn your business dreams into reality</p>
        <div className="contact_sec">
          <div className="contact_subhead">
            Contact Us 
          </div>
          <p>
            No 46, 3rd Floor, Sadath Center, Beside Canara Bank, Nandi Durga Rd,
            Jayamahal, Bengaluru, Karnataka 560046
          </p>
        </div>

        <div className="contact_sec">
          <div className="contact_subhead">
            General Enquiries 
          </div>
          <p>info@erisn.com</p>
        </div>

        <div className="contact_sec">
          <div className="contact_subhead">
            Phone Number 
          </div>
          <p>+91-73378 96392</p>
        </div>
      </div>
      <div className="contactUs_right">
      <div className="contact_form_bg">
       <div className="contact_form_head">
       <h2 className="contact_heading">
          Let???s Work Together & <br />
            Create Magic   </h2>
            <img src={contact} className="contactForm_img"/>
       </div>
        <form>
          <div className="textField">
            <TextField
              id="standard-basic"
              label="Name*"
              variant="standard"
              style={{ width: "100%", marginBottm: "15px", fontWeight: "800" }}
              className={classes.textField}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <TextField
              id="standard-basic"
              label="Email*"
              variant="standard"
              style={{ width: "100%", marginBottm: "15px", fontWeight: "800" }}
              className={classes.textField}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              id="standard-basic"
              label="Contact Number*"
              variant="standard"
              style={{ width: "100%", marginBottm: "15px", fontWeight: "800" }}
              className={classes.textField}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              value={number}
            />
          </div>
          {/* <div className="contact_subhead">
            Services you <span className="red_font">need</span>
          </div> */}
          <div className="contact_sec">
            <ul>
              <li>
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{
                        color:' #fff',
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
                        color:' #fff',
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
                        color:' #fff',
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
                        color:' #fff',
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
                        color:' #fff',
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
          <button className="contactUs_button" onClick={submitHandler}>
            Submit <AiOutlineArrowRight className="arrow" />
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
