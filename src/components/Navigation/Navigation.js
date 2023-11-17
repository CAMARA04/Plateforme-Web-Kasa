import React from "react";
import { NavLink } from "react-router-dom";
import "../Navigation/Navigation.scss";

const Navigation = () => {
  return (
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
