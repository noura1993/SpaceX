import React from "react";
import "./Logo.css";
import spacex from "../assets/spacex-logo.png";

const Logo = () => {
  return (
    <div className="logo-with-title">
        <img className="logo" src={spacex} alt='spacex logo' />
        <span className="logo-title">LAUNCHES</span>
    </div>
  );
};

export default Logo;
