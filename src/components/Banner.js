import React from "react";
import logo from "../assets/img/logo_kasa_desktop.png";
import Navigation from "./Navigation";

const Banner = () => {
  return (
    <div className="banner">
      <div className="logo-container">
        <img className="logo-banner" src={logo} alt="logo Kasa" />
      </div>

      <div className="navigation">
        <Navigation />
      </div>
    </div>
  );
};

export default Banner;
