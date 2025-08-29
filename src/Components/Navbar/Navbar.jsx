import React, { useState } from "react";
import "../../assets/css/Navbar.css";
import logo from "../../assets/img/logo.png";
import underline from "../../assets/img/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="" className="imgClass" />
      <ul className="nav-menu">
        <li>
          <AnchorLink href="#home" className="anchor-link">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <> </>}
        </li>
        <li>
          <AnchorLink href="#about" className="anchor-link" offset={50}>
            <p onClick={() => setMenu("about")}>About me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <> </>}
        </li>
        <li>
          <AnchorLink href="#services" className="anchor-link" offset={50}>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="" /> : <> </>}
        </li>
        <li>
          <AnchorLink href="#work" className="anchor-link" offset={50}>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="" /> : <> </>}
        </li>
        <li>
          <AnchorLink href="#contact" className="anchor-link" offset={50}>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <> </>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink href="#contact" className="anchor-link" offset={50}>
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};
