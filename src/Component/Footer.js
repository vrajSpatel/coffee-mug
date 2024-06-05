import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footerMain">
      <div className="footerLogo">Coffee Mug</div>
      <div className="sections">
        <div className="section1">
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contactUs">Contact Us</Link>
        </div>
        <div className="section2">
          <Link to="/install">Download App</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms Of Use</Link>
        </div>
        <div className="section3">
          <span className="followTitle">Follow Us</span>
          <div className="links">
            <Link to="https://linkedin.com/company/coffeemug-ai/">
              linkedIn
            </Link>
            <Link to="https://twitter.com/coffeemug_ai/">twitter</Link>
          </div>
        </div>
        <div className="section4">
          <span className="copyRight">Dalgona Technologies Pte. Ltd.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
