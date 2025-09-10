import React from "react";
import "../../assets/css/Footer.css";
import logo from "../../assets/img/logo.png";
import user_icon from "../../assets/img/user_icon.svg";

function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        {/* <div className="footer-top-left">
          <img src={logo} alt="" className="imgClass" />
          <p>
            I'm Bhargav Gohel, full-Stack developer based in India. With over 7
            years of hands-on experience in software development.
          </p>
        </div> */}
        {/* <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input
              type="email"
              placeholder="Enter your email"
              name="email_sub"
            />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div> */}
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left"></p>
        <div className="footer-bottom-right">
          © 2025 Bhargav Gohel. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
