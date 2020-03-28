import "./Header.scss";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Logo from "../../components/logo/Logo";
import logo from "../../resources/images/coronavirus.svg";
import HamburgerButton from "../../components/hamburger-btn/HamburgerButton";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <Logo logo={logo} />
      </div>

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
