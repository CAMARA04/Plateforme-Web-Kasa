import React from "react";
import "./Erreur.scss";
import { Link } from "react-router-dom";

const Erreur = () => {
  return (
    <main className="main-erreur">
      <section className="afichage-erreur">
        <div className="code-erreur">
          <h2>404</h2>
        </div>
        <div className="texte-erreur">
          <p>Oups!La page que vous demandez n'existe pas.</p>
        </div>
      </section>

      <section className="back-home">
        <Link to="./">Retourner sur la page d'accueil</Link>
      </section>
    </main>
  );
};

export default Erreur;
