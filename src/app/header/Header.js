import "./Header.scss";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { getCovid19SVG } from "../../util/SVG";
import HamburgerButton from "../../components/hamburger-btn/HamburgerButton";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">{getCovid19SVG()}</div>

      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="hamburger-container" onClick={() => onHamClick()}>
        <HamburgerButton onClick={() => onHamClick()} />
      </div>
    </div>
  );
};

const onHamClick = () => {
  document.querySelector("#navbar").classList.toggle("is-active");
};

export default Header;
