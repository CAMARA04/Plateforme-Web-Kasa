import bannerImageAbout from "../../assets/img/Paysage-montagne.webp";
import React from "react";
import "../About/About.scss";
import Dropdown from "../../components/Dropdown";
import Banner from "../../components/Banner/Banner";
import "../../components/Banner/Banner.scss";
import Collapse from "../../components/Collapse/Collapse";

const About = () => {
  const collapsItems = [
    {
      title: "Fiabilité",
      content: "Contenu de la fiabilité pour la page About",
    },
    { title: "Respect", content: "Contenu du respect pour la page About" },
    { title: "Service", content: "Contenu du respect pour la page About" },
    { title: "Sécurité", content: "Contenu du respect pour la page About" },
  ];

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
