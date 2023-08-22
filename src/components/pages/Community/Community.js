import React from "react";
import "./Community.css";
import tc from "../../../assets/img/tc.png";
function Community() {
  const handleClick = () => {
    window.open("https://www.whatsapp.com/", "_blank");
  };
  return (
    <div className="container">
      <div className="start-wrapper">
        <div className="start-img">
          <img src={tc} alt="images not found" />
        </div>
        <div className="start-content">
          <h2 className="section-title">Join Our Free Tech Community</h2>
          <p>
            unlock the power knowlegde and innovation by joining our vibrant and
            Whatsapp tech community
          </p>
          <button className="register-btn" onClick={handleClick}>
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Community;
