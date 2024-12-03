import React from 'react';
import "./Footer.css";
import A20 from "../../images/A20.png";
import A21 from "../../images/A21.png";
import A22 from "../../images/A22.png";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className='footer-container'>
     <hr />
     <div className="footer">
        <div className="social-links">
        <img src={A20} alt="" />
        <img src={A21} alt="" />
        <img src={A22} alt="" />
     </div>
       <div className="logo-f">
        <img src={logo} alt="" />
       </div>
    </div>
    <div className="blur blur-f-1"></div>
    <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;