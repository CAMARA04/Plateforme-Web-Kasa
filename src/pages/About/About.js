//Importation des éléments
import bannerImageAbout from "../../assets/img/Paysage-montagne.webp";
import React from "react";
import "../About/About.scss";
import Banner from "../../components/Banner/Banner";
import "../../components/Banner/Banner.scss";
import Collapse from "../../components/Collapse/Collapse";

const About = () => {
  // Définition des items pour les Collapse avec titre et contenu
  const collapsItems = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme. ",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la prioritéde Kasa.Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respctés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  // Rendu du composant About
  return (
    <main>
      <Banner
        imageUrl={bannerImageAbout}
        imageAlt="Paysage montagne"
        title=""
      />

      <div className="collapse-about">
        {collapsItems.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </main>
  );
};

export default About;
