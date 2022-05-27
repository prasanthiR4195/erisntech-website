import React, { useState,useEffect } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import erisnLogo from "../../assets/homepage/erisn-logo-dark.png";  

const Menu = () => { 

  return (
    <>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/">Services</Link>
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

const Navbar = ( ) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const loc = useLocation();
  const[nav,setNav] = useState(false)

  useEffect(() => {
    if(loc.pathname == '/'){
      console.log("homepage",loc.pathname)
      setNav(true) 
    }else{
      console.log("other pages" ,loc.pathname)
      setNav(false) 
    } 
    return () => {
      
    }
  }, [loc.pathname ]) 
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 100){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return ( 
    
    <div  className={colorChange ? 'erisn__navbar navbar_scroll' : 'erisn__navbar'} >
      <div className="erisn__navbar-links">
        <div className="erisn__navbar-links_logo">
          <img src={erisnLogo} alt="erisn-logo" />
        </div>
        <div className={`${nav ? 'erisn__navbar-links_container'  :  "erisn__navbar-links_container navColor" }`}>
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
