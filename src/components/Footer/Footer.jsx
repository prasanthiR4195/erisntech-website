import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import {
  erisnLogo,
  footer1,
  footer2,
  footer3,
  footer4,
  fbLogo,
  twitterLogo,
  linkedinLogo,
  instaLogo,
} from "./imports"; 

const Footer = () => {
  return (
    <div className="erisn__footer footer-gradient-bg">
      <div className="erisn__footer-content">
        <div className="erisn__footer-content-left">
          <img src={erisnLogo} alt="erisn-logo" />
          <p>
            No 46, 3rd Floor, Sadath Center, Beside Canara Bank, VP Deenadayalu
            Naidu Rd, near Airtel Office, Jayamahal Extension, Jayamahal,
            Bengaluru, Karnataka 560046
          </p>
        </div>
        <div className="erisn__footer-content-middle">
          <h5>Services</h5>
          <div className="erisn__footer-content-middle__links">
            <p>
              <Link to="/webdev">Web Development</Link>
            </p>
            <p>
              <Link to="/softwaredev">Software Development</Link>
            </p>
            <p>
              <Link to="/mobiledev">Mobile App Development</Link>
            </p>
            <p>
              <Link to="/uxdesign">UI/UX Design Service</Link>
            </p>
            <p>
              <Link to="/">Ecommerce Development</Link>
            </p>
            <p>
              <Link to="/digitalmarketing">Digital Marketing</Link>
            </p>
          </div>
        </div>
        <div className="erisn__footer-content-middle">
          <h5>Product</h5>
          <div className="erisn__footer-content-middle__links">
            <p>
              <Link to="/">Erisn Classroom</Link>
            </p>
            <p>
              <Link to="/">Hostpital Management System</Link>
            </p>
            <p>
              <Link to="/">ErisnTech Inventory with POS</Link>
            </p>
            <p>
              <Link to="/">ErisnTech HRM System</Link>
            </p>
          </div>
        </div>
        <div className="erisn__footer-content-middle-end">
          <h5>Quick link</h5>
          <div className="erisn__footer-content-middle__links">
            <p>
              <Link to="/">Blog</Link>
            </p>
            <p>
              <Link to="/">Portfolio</Link>
            </p>
            <p>
              <Link to="/">Contact Us</Link>
            </p>
            <p>
              <Link to="/privacy">Privacy Policy</Link>
            </p>
            <p>
              <Link to="/term">Term of Payment</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="erisn__footer-icons">
        <div className="erisn__footer-icons__achievements">
          <img src={footer1} alt="" />
          <img src={footer2} alt="" />
          <img src={footer3} alt="" />
          <img src={footer4} alt="" />
        </div>
        <div className="erisn__footer-icons__socials">
          <h5>Find us on social media.</h5>
          <div className="erisn__footer-icons__socials-icons">
            <img src={fbLogo} alt="fb-logo" />
            <img src={twitterLogo} alt="twitter-logo" />
            <img src={linkedinLogo} alt="linkedin-logo" />
            <img src={instaLogo} alt="insta-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
