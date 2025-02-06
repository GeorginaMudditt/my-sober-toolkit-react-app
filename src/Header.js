import React from "react";
import "./Header.css";
import logo from "./images/sober-toolkit-logo-grey.png";

function Header() {
  return (
    <div className="Header">
      <img className="main-logo" src={logo} alt="Sober Toolkit logo" />
    </div>
  );
}

export default Header;
