import React from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import PropTypes from "prop-types";
import logementsData from "../../datas/logements.json";
import "./Logement.scss";

const Logement = () => {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logement">
      <Slideshow images={logement.pictures} />
      <h2>{logement.title}</h2>
      <p>{logement.location}</p>
    </div>
  );
};

Logement.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  coverPhoto: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Logement;
