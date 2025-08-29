import React from "react";
import "../../assets/css/Contact.css";
import theme_pattern from "../../assets/img/theme_pattern.svg";
import mail_icon from "../../assets/img/mail_icon.svg";
import location_icon from "../../assets/img/location_icon.svg";
import call_icon from "../../assets/img/call_icon.svg";
import { toast } from "react-toastify";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "520e75f8-5bc2-408c-83dd-7878b3b7684d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Thank you! Your message has been sent successfully.");
      event.target.reset();
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently open to new opportunities and collaborations. Feel
            free to reach out!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>bhargavgohel10@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 8866091992</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Bengaluru, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <label htmlFor="">Your Message</label>
          <textarea
            placeholder="Enter your message"
            name="message"
            rows={8}
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
