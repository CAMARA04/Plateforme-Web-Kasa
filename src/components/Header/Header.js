// Importation des éléments
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo_kasa_desktop.png";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";

//Définition du composant
const Header = () => {
  return (
    //Elément Header
    <header>
      <NavLink to="/" className="logo-container">
        <img src={logo} alt="logo Kasa" />
      </NavLink>

      <Navigation />
    </header>
  );
};

export default Header;
