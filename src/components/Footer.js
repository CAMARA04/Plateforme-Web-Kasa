import React from "react";
import LogoFooter from "../assets/img/LOGO-footer.png";
import Copyright from "../assets/img/© 2020 Kasa. All rights reserved.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-footer">
        <img
          className="logo-kasa-footer"
          src={LogoFooter}
          alt="logo Kasa footer"
        />
      </div>

      <div className="copyright-footer">
        <img className="copyright" src={Copyright} alt="copyright footer" />
      </div>
    </div>
  );
};

export default Footer;
