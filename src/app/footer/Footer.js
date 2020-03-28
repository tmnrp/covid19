import "./Footer.scss";
import React from "react";
import ThemeSelector from "../../components/theme-selector/ThemeSelector";

const Footer = () => {
  return (
    <div className="footer-container">
      <ThemeSelector />
    </div>
  );
};

export default Footer;
