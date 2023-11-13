import React from "react";
import logo from "../assets/img/logo_kasa_desktop.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="logo-container">
        <img className="logo-banner" src={logo} alt="logo Kasa" />
      </div>

      <div className="navigation-container">
        <ul className="navigation">
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/">A propos</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
