import Banner from "../components/Banner";
import PhotoPaysage from "../assets/img/Paysage-montagne.webp";
import React from "react";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="page-about">
      <header>
        <Banner />
      </header>

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

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default About;
