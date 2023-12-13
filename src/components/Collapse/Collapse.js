//Importation des modules/icones et styles scss
import React, { useState } from "react";
import PropTypes from "prop-types";
import customArrowIcon from "../../assets/icones/arrow_back_ios-24px 2.png";
import "../Collapse/Collapse.scss";

//Composant fonctionnel Collapse
const Collapse = ({ title, content }) => {
  //Utilisation du Hook
  const [isOpen, setIsOpen] = useState(false);

  // Gestion de l'ouverture et fermeture
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  //Rendu du composant collapse
  return (
    <div className={`collapse-item ${isOpen ? "open" : ""}`}>
      <div className="item-header">
        <span className="item-title">{title}</span>
        <img
          src={customArrowIcon}
          alt="Custom-Arrow"
          className={`arrow-icon ${isOpen ? "open" : ""}`}
          onClick={toggleCollapse}
        />
      </div>

      {isOpen && <div className="content">{content}</div>}
    </div>
  );
};

//Définition des Proptypes attendus
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Collapse;
