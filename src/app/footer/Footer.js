import "./Footer.scss";
import React from "react";
import ThemeSelector from "../../components/theme-selector/ThemeSelector";

const Footer = () => {
  return (
    <div className="footer-container" data-testid="footer-testid">
      <ThemeSelector selector="body"/>
    </div>
  );
};

export default Footer;
