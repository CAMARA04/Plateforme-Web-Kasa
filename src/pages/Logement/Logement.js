import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";
import logementsData from "../../datas/logements.json";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

import "./Logement.scss";

const Logement = () => {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <Navigate to="/erreur" />;
  }

  return (
    <main className="logement">
      <ScrollToTop />
      <section className="carrousel">
        <Slideshow images={logement.pictures} />
      </section>
      <section className="infos_logement">
        <div className="left-bloc">
          <div className="title">
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
          </div>
          <Tags tags={logement.tags} className="tags" />
        </div>
        <div className="right-bloc">
          <Host name={logement.host.name} picture={logement.host.picture} />
          <Rating rating={parseFloat(logement.rating)} />
        </div>
      </section>

      <section className="collapses-logement">
        {" "}
        <Collapse
          title="Description"
          content={logement.description}
          className="description-logement"
        />
        <Collapse
          title="Équipement"
          content={logement.equipments}
          className="equipement-logement"
        />
      </section>
    </main>
  );
};

export default Logement;
