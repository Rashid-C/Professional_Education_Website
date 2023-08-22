import React from "react";
import "./AboutUs.css";
import anu from "../../../assets/img/anu.jpg";
function AboutUs() {
  return (
    <div className="container">
      <div className="about-us-container">
        <div className="team-member">
          <h2>Our Team</h2>
          <div className="member-card">
            <img
              className="member-image"
              src={anu}
              alt="images not found by Anu"
            />
            <h3 className="member-name">Rashid C</h3>
            <p className="member-role">Founder & CEO</p>
          </div>
        </div>
        <div className="about-us-description">
          <h1 className="about-us-heading">About us</h1>
          <p>
            With a passion for empowering leaners of all ages,our mission is to
            make education accessible,engaging,and personalized through our
            cutting-edge educational technology platform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
