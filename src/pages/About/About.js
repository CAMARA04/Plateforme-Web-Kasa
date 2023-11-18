import bannerImageAbout from "../../assets/img/Paysage-montagne.webp";
import React from "react";
import "../About/About.scss";
import Dropdown from "../../components/Dropdown";
import Banner from "../../components/Banner/Banner";
import "../../components/Banner/Banner.scss";

const About = () => {
  return (
    <main>
      <Banner imageUrl={bannerImageAbout} imageAlt="Paysage montage" title="" />

      <div className="liste-about">
        <Dropdown />
      </div>
    </main>
  );
};

export default About;
