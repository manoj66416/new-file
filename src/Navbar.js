import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../src/Arrows-Right-Round-icon.png";
import "../src/Navbar.css";
import Home from "./Home";
const Navbar = () => {
  const [isMobile, setisMobile] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="nav-menu">
          <div>
            <h1>DBQ Pro</h1>
          </div>
          <div className="nav-listss">
            <ul
              className={isMobile ? "nav-links-mobile" : "nav-links"}
              onClick={() => setisMobile(false)}
            >
              <Link to="/home" className="homes">
                <li>Home</li>
              </Link>
              <Link to="/about" className="abouts">
                <li>About Us</li>
              </Link>

              <Link to="/service" className="a4s">
                <li>Services</li>
              </Link>
              <Link to="/" className="logins">
                <li>Get In Touch</li>
                <img src={img} alt="loading" className="right" />
              </Link>
            </ul>
            <button
              className="mobile-menu-icon"
              onClick={() => setisMobile(!isMobile)}
            >
              {isMobile ? (
                <i className="fa-solid fa-bars"></i>
              ) : (
                <i className="fa-solid fa-xmark"></i>
              )}
            </button>
          </div>
        </div>
      </nav>
      <Home />
    </div>
  );
};

export default Navbar;
