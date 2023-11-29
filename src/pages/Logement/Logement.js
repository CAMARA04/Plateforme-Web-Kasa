import React from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import PropTypes from "prop-types";
import logementsData from "../../datas/logements.json"; // Importez vos données de logements

const Logement = () => {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logement">
      {/* <h2>{logement.title}</h2> */}

      <Slideshow images={logement.pictures} />
    </div>
  );
};

Logement.propTypes = {
  title: PropTypes.string.isRequired,
  coverPhoto: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Logement;
