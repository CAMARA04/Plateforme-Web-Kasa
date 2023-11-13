import Banner from "../components/Banner";
import PhotoPaysage from "../assets/img/Paysage-montagne.webp";

import React from "react";

const About = () => {
  return (
    <div>
      <header>
        <Banner />
      </header>

      <main>
        <img
          src={PhotoPaysage}
          alt="Paysage montagne"
          className="paysage-about"
        />
      </main>
    </div>
  );
};

export default About;
