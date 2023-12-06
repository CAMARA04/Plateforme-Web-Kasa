//Importation: Bibliotheque REACT, IMAGES, styles Scss
import React from "react";
import LogoFooter from "../../assets/img/LOGO-footer.png";

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
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
