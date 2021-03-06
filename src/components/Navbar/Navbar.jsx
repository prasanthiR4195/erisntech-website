import React, { useState, useEffect } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import erisnLogo from "../../assets/homepage/erisn-logo-dark.png";

const Menu = () => {
  const [showmenu, setShowmenu] = useState(false);
  const [webApp, setWebApp] = useState(false);
  const [mobileDev, setMobileDev] = useState(false);
  const [branding,setBranding] = useState(false);
  const [digital,setDigital] = useState(false);
  const submenuHandler = () => {
    setShowmenu(!showmenu);
  };
  const submenuClose = () => {
    setShowmenu(false);
    setWebApp(false);
    setMobileDev(false)
    setBranding(false)
    setDigital(false)
  };
  const submenuwebShow = () => {
    setWebApp(!webApp);
    setMobileDev(false)
    setBranding(false)
    setDigital(false)
  };
  const submenuMobShow =() =>{
    setMobileDev(!mobileDev);
    setWebApp(false)
    setBranding(false)
    setDigital(false)
  }
  const submenuBrandingShow = () =>{
    setBranding(!branding);
    setWebApp(false)
    setMobileDev(false)
  }
  const submenuDigitalShow = () =>{
    setDigital(!digital)
    setWebApp(false)
    setMobileDev(false)
    setBranding(false)
  }
   return (
    <>
      <p>
        <Link to="/erisntech-website/">Home</Link>
      </p>
      <p>
        <a className="submenu" onClick={submenuHandler}>
          Services
        </a>
        {showmenu ? (
          <div className="submenu_inner">
            <h5>Services</h5>
            <div className="submenu_block">
              <ul className="submenu_main">
                <Link to="/webdev">
                  <li className="web_app" onMouseEnter={submenuwebShow} >
                    <h6>Web Application Development</h6>
                    <p>We build digital platforms that drive the value chain for global</p>
                  </li>
                </Link>
                <Link to="/mobiledev" onMouseEnter={submenuMobShow}>
                  <li>
                    <h6>Mobile Application Development</h6>
                    <p>We build digital platforms that drive the value chain for global</p>
                  </li>
                </Link>
                <Link to="/uxdesign" onMouseEnter={submenuBrandingShow}>
                  <li>
                    <h6>Branding & Designing</h6>
                    <p>We build digital platforms that drive the value chain for global </p>
                  </li>
                </Link>
              </ul>
              {webApp ? (
                <ul className="submenu_sub_right">
                  <Link to="/webdev" onClick={submenuClose}>
                    <li>
                      <h6>Custom Website Development</h6>
                      <p> We build digital platforms that drive the value chain for global </p>
                    </li>
                  </Link>
                  <li>
                    <h6>CMS Website Development</h6>
                    <p>We build digital platforms that drive the value chain for global </p>
                  </li>
                  <li>
                    <h6>e-Commerce Development</h6>
                    <p>We build digital platforms that drive the value chain for global</p>
                  </li>
                </ul>
              ) : (
                ""
              )}
              {mobileDev ? <ul className="submenu_sub_right">
                  <Link to="/androiddev" onClick={submenuClose}>
                    <li>
                      <h6>Android App Development</h6>
                      <p> We build digital platforms that drive the value chain for global </p>
                    </li>
                  </Link>
                  <Link to="/iosdev" onClick={submenuClose}> 
                  <li>
                    <h6>IOS App Development</h6>
                    <p>We build digital platforms that drive the value chain for global </p>
                  </li>
                  </Link>
                  <Link to="/hybridapp" onClick={submenuClose}>
                  <li>
                    <h6>Hybrid App Development</h6>
                    <p>We build digital platforms that drive the value chain for global</p>
                  </li>
                  </Link>
                </ul> : "" }


              {branding ? <ul className="submenu_sub_right">
                  <Link to="/uxdev" onClick={submenuClose}>
                    <li>
                      <h6>Website/App UI/UX Designing </h6>
                      <p> We build digital platforms that drive the value chain for global </p>
                    </li>
                  </Link>
                  <Link to="/brochure" onClick={submenuClose}> 
                  <li>
                    <h6>Brochures Designing </h6>
                    <p>We build digital platforms that drive the value chain for global </p>
                  </li>
                  </Link>
                  <Link to="/logodesign" onClick={submenuClose}>
                  <li>
                    <h6>Logo Designing</h6>
                    <p>We build digital platforms that drive the value chain for global</p>
                  </li>
                  </Link>
                  <Link to="/corporate" onClick={submenuClose}> 
                  <li>
                    <h6>Corporate Designs</h6>
                    <p>We build digital platforms that drive the value chain for global</p>
                  </li>
                  </Link>
                </ul> : ""}

              <ul className="submenu_main">
                <Link to="/softwaredev" onClick={submenuClose}>
                  <li>
                    <h6>Custom Software Development</h6>
                    <p> We build digital platforms that drive the value chain for global </p>
                  </li>
                </Link>
                <Link to="/digitalmarketing" onMouseEnter={submenuDigitalShow}>
                  <li>
                    <h6>Digital marketing</h6>
                    <p>We build digital platforms that drive the value chain for global</p>
                  </li>
                </Link>
              </ul>
              {digital ? <ul className="submenu_sub_left">
                  <Link to="/uxdev" onClick={submenuClose}>
                    <li>
                      <h6>Website/App UI/UX Designing </h6>
                      <p> We build digital platforms that drive the value chain for global </p>
                    </li>
                  </Link>
                  <Link to="/brochure" onClick={submenuClose}> 
                  <li>
                    <h6>Brochures Designing </h6>
                    <p>We build digital platforms that drive the value chain for global </p>
                  </li>
                  </Link>
                  <Link to="/logodesign" onClick={submenuClose}>
                  <li>
                    <h6>Logo Designing</h6>
                    <p>We build digital platforms that drive the value chain for global</p>
                  </li>
                  </Link>
                  <Link to="/corporate" onClick={submenuClose}> 
                  <li>
                    <h6>Corporate Designs</h6>
                    <p>We build digital platforms that drive the value chain for global</p>
                  </li>
                  </Link>
                </ul> : "" }
            </div>
          </div>
        ) : (
          ""
        )}
      </p>
      <p>
        <Link to="/">Technology used</Link>
      </p>
      <p>
        <Link to="/contactus">Contact Us</Link>
      </p>
      <p>
        <Link to="/blogs">Blogs</Link>
      </p>
      <p>
        <Link to="/about">About Us</Link>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const loc = useLocation();
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (loc.pathname === "/erisntech-website/") {
      console.log("homepage", loc.pathname);
      setNav(true);
      window.scrollTo(0, 0);
    } else if (loc.pathname === "/about") {
      console.log("about", loc.pathname); 
      setNav(false);
      window.scrollTo(0, 0);
    } else {
      console.log("other pages", loc.pathname);
      setNav(false);
      window.scrollTo(0, 0);
    }
    return () => {};
  }, [loc.pathname]);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div
      className={colorChange ? "erisn__navbar navbar_scroll" : "erisn__navbar"}
    >
      <div className="erisn__navbar-links">
        <div className="erisn__navbar-links_logo">
          <img src={erisnLogo} alt="erisn-logo" />
        </div>
        <div
          className={`${
            nav
              ? "erisn__navbar-links_container"
              : "erisn__navbar-links_container navColor"
          }`}
        >
          <Menu />
        </div>
      </div>
      <div className="erisn__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="erisn__navbar-menu_container scale-up-center">
            <div className="erisn__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
