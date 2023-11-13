import React from "react";
import logo from "../assets/logo_kasa_desktop.png";
import "../styles/Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="logo-container">
        <img src={logo} alt="logo Kasa" />
      </div>

      <div className="navigation">
        <a href="">Accueil</a>
        <a href="">A propos</a>
      </div>
    </div>
  );
};

export default Banner;
