import React from "react";
import "../../assets/css/Hero.css";
import profile_img from "../../assets/img/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profile-img-cls" />
      <h1>
        <span>I'm Bhargav Gohel,</span> Full-Stack developer based in India.
      </h1>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink href="#contact" className="anchor-link" offset={50}>
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <AnchorLink href="#resume" className="anchor-link" offset={50}>
            My resume
          </AnchorLink>
        </div>
      </div>
    </div>
  );
}

export default Hero;
