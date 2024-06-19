import React from "react";
import logo from "../../assets/img/palestine-isd-2.webp";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  const nav_titles = [
    {
      path: "/",
      display: "HOME",
    },
    {
      path: "/plants",
      display: "SERVICES",
    },
    {
      path: "/courses",
      display: "COURSES",
    },
    {
      path: "/aboutus",
      display: "ABOUT US",
    },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="nav_container">
          <div className="logo">
            <div className="logo-img">
              <img src={logo} alt="logo-img" />
            </div>
            <h2>School Of Palestina AI</h2>
          </div>

          <div className="navigation">
            <ul className="menu">
              {nav_titles.map((item, id) => (
                <li className="nav_item">
                  <Link key={id} to={item.path}>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
