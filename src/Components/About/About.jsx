import React from "react";
import "../../assets/css/About.css";
import theme_pattern from "../../assets/img/theme_pattern.svg";
import profile_img from "../../assets/img/profile_img2.jpg";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" className="profile-img-cls" />
        </div>
        <div className="about-right">
          <div className="about-param">
            <p>
              With over 7 years of hands-on experience in software development.
            </p>
            <p>
              Innovative Technologist: Passionate about exploring and mastering
              emerging technologies, I seek opportunities to drive innovative
              solutions and stay ahead of industry trends.
            </p>
            <p>
              Excellence in Development: Dedicated to crafting high-quality
              software, I maintain a relentless commitment to excellence,
              ensuring scalability, performance, and client satisfaction.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>NodeJs</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>ExpressJs</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>MySQL</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>PHP & Laravel</p>
              <hr style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>7+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>40+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
}

export default About;
