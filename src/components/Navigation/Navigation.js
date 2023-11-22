//Importation des éléments
import React from "react";
import { NavLink } from "react-router-dom";
import "../Navigation/Navigation.scss";

// Définition du composant fonctionnel
const Navigation = () => {
  return (
    //Elément de navigation
    <nav className="navigation-container">
      <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        Acueil
      </NavLink>
      <NavLink
        to="/About"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        A Propos
      </NavLink>
    </nav>
  );
};

export default Navigation;
