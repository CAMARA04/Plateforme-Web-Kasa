import React from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
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
    <main className="logement">
      <section className="carrousel">
        <Slideshow images={logement.pictures} />
      </section>
      <section className="infos_logement">
        <div className="first-line">
          <div className="title">
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
          </div>
          <Host name={logement.host.name} picture={logement.host.picture} />
        </div>
        <div className="second-line">
          <Tags tags={logement.tags} />
          <Rating rating={logement.rating} />
        </div>
      </section>
    </main>
  );
};

Logement.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  coverPhoto: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default Logement;
