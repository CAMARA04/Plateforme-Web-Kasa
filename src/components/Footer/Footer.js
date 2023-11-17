import React from "react";
import LogoFooter from "../../assets/img/LOGO-footer.png";
import Copyright from "../../assets/img/© 2020 Kasa. All rights reserved.png";
import "../Footer/Footer.scss";

const Footer = () => {
  return (
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
