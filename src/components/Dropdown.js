import React, { useState } from "react";
import customArrowIcon from "../assets/icones/arrow_back_ios-24px 2.png";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState([false, false, false, false]);

  // Pour basculer l'état d'ouverture d'un élément
  const toggleDropdown = (index, event) => {
    // Vérifier si l'élément sur lequel vous avez cliqué est la flèche
    if (!event.target.classList.contains("arrow-icon")) {
      return;
    }

    const updatedOpenState = [...isOpen];
    updatedOpenState[index] = !updatedOpenState[index];

    setIsOpen(updatedOpenState);
  };

  return (
    <ul className="liste-deroulante-about">
      {["Fiabilité", "Respect", "Service", "Sécurité"].map((element, index) => (
        <li key={index}>
          <div
            onClick={(event) => toggleDropdown(index, event)}
            className="titre-liste"
          >
            {element}{" "}
            <img
              src={customArrowIcon}
              alt="Show-texte"
              className={`arrow-icon ${isOpen[index] ? "active" : ""}`}
            />
          </div>
          {isOpen[index] && (
            <div className="dropdown-content">
              {element === "Fiabilité" && (
                <p>
                  Les annonces postées sur Kasa garantissent une fiabilité
                  totale. Les photos sont conformes aux logements, et toutes les
                  informations sont régulièrement vérifiées par nos équipes.
                </p>
              )}
              {element === "Respect" && (
                <p>
                  Mon élément Respect : Votre respect envers la communauté Kasa
                  est essentiel. Nous vous encourageons à traiter les autres
                  membres avec respect et à contribuer à créer une atmosphère
                  positive.
                </p>
              )}
              {element === "Service" && <p>Le texte service se deplie </p>}
              {element === "Sécurité" && <p> le texte se déplie </p>}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
