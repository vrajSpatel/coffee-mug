import React from "react";
import coffeemuglogo from "../assests/coffee-mug_logo.png";
import "./css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ onlyLogo }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={coffeemuglogo} alt="logo" />
        </Link>

        {!onlyLogo && (
          <>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                
                <li className="nav-item">
                  <Link className="nav-link active link-warning" to="/jobs">
                    Jobs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active link-warning" to="/feed">
                    Investor List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active link-warning" to="/">
                    Startups
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active link-warning" to="/mentors">
                    Mentors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link target='_blank' className="nav-link active link-warning" to="https://coffeemug.ai/blog/">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active link-warning" to="/downloadapp">
                    Download App
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-orange" to='/signin'>Login</Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
