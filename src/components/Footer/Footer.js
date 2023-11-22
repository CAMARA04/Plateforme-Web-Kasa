//Importation: Bibliotheque REACT, IMAGES, styles Scss
import React from "react";
import LogoFooter from "../../assets/img/LOGO-footer.png";
import Copyright from "../../assets/img/© 2020 Kasa. All rights reserved.png";
import "../Footer/Footer.scss";

//Définition du composant
const Footer = () => {
  return (
    //Elément du Footer
    <footer>
      <img
        className="logo-kasa-footer"
        src={LogoFooter}
        alt="logo Kasa footer"
      />
      <img className="copyright" src={Copyright} alt="copyright footer" />
    </footer>
  );
};

export default Footer;
