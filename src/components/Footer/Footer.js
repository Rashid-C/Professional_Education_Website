import React from "react";
import "./Footer.css";
import footer from "../../assets/img/footer.png";
import { Link } from "react-router-dom";
function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer-box">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="img not found" />
              </div>
              <h2>School Of Palestina AI</h2>
            </div>
            <p>
              Women and girls' presence has increased at all education levels in
              Palestine.
            </p>
          </div>

          <div className="footer-box">
            <h4 className="footer_title">Company</h4>
            <ul className="footer_links">
              <li>
                <Link onClick={handleClick} to="/courses">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link onClick={handleClick} to="/plants">
                  Our Plan
                </Link>
              </li>
              <li>
                <a href="">Become a member</a>
              </li>
            </ul>
          </div>

          <div className="footer-box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
              <li>
                <Link onClick={handleClick} to="/aboutus">
                  About us
                </Link>
              </li>
              <li>
                <Link onClick={handleClick} to="/contact">
                  Contact us
                </Link>
              </li>
              <li>
                <Link onClick={handleClick} to='/support'>Support us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
