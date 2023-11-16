import PhotoPaysage from "../assets/img/Paysage-montagne.webp";
import React from "react";
import Dropdown from "../components/Dropdown";

const About = () => {
  return (
    <main>
      <img
        src={PhotoPaysage}
        alt="Paysage montagne"
        className="paysage-about"
      />
      <div className="liste-about">
        <Dropdown />
      </div>
    </main>
  );
};

export default About;
