//Importation Bibliotheque REACT
import React from "react";

//Définition du composant
const Banner = (props) => {
  //Rendu du composant
  return (
    <div className="banner">
      <img src={props.imageUrl} alt={props.imageAlt} />
      <div className="banner-text">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default Banner;
