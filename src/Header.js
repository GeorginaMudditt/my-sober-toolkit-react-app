import React from "react";
import "./Header.css";
import logo from "./images/sober-toolkit-logo-grey.png";
import navbar_logo from "./images/toolkit-navbar-icon.png";

function Header() {
  return (
    <div className="Header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="https://varstar-web.com/">
            <img className="navbar-logo" src={navbar_logo} alt="Navbar logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#resources-section">
                  Resources
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#counter-section">
                  Sobriety counter
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about-section">
                  About this project
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <img className="main-logo" src={logo} alt="Sober Toolkit logo" />
    </div>
  );
}

export default Header;
