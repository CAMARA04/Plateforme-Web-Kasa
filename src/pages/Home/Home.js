import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import bannerImageHome from "../../assets/img/Photo_Banner_Home.webp";
import "../../pages/Home/Home.scss";
import "../../pages/Home/Home.scss";
import logementsData from "../../datas/logements.json";
import Card from "../../components/LocationCard/Card";

const Home = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(logementsData);

    console.log("Logements Data:", logementsData);
  }, []);

  return (
    <main>
      <section className="banner-home">
        <Banner
          imageUrl={bannerImageHome}
          imageAlt="Paysage montagne"
          title="Chez vous, partout et ailleurs"
        />
      </section>

      <section className="section-logements">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            coverPhoto={logement.cover}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
