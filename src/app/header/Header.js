import "./Header.scss";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { getCovid19SVG } from "../../util/SVG";
import HamburgerButton from "../../components/hamburger-btn/HamburgerButton";
import { PAGES_LIST } from "../../util/Constants";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header-container">
      <div className="logo-container">{getCovid19SVG()}</div>

      <div className="navbar-container">
        <Navbar
          pages={PAGES_LIST}
          clickCallback={(e, page) => onNavItemClick(e, page, history)}
        />
      </div>

      <div className="hamburger-container">
        <HamburgerButton clickCallback={e => onHamClick(e)} />
      </div>
    </div>
  );
};

const onNavItemClick = (e, page, history) => {
  history.push(`/covid19/${page}`);
};

const onHamClick = () => {
  document.querySelector("#navbar").classList.toggle("is-active");
};

export default Header;
