import "./Header.scss";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { getCovid19SVG } from "../../util/SVG";
import HamburgerButton from "../../components/hamburger-btn/HamburgerButton";
import { PAGES_LIST, CLS_IS_ACTIVE } from "../../util/Constants";
import { useHistory } from "react-router-dom";
import { toggleCls } from "../../util/StyleHelpers";

export const Header = () => {
  const history = useHistory();
  return (
    <div className="header-container" data-testid="header-container">
      <div className="logo-container">{getCovid19SVG()}</div>

      <div className="navbar-container">
        <Navbar
          data-testid="navbar-testid"
          pages={PAGES_LIST}
          clickCallback={(e, page) => onNavItemClick(page, history)}
        />
      </div>

      <div className="hamburger-container">
        <HamburgerButton
          data-testid="hamburger-testid"
          clickCallback={(e) => onHamClick(e)}
        />
      </div>
    </div>
  );
};

export const onNavItemClick = (page, history) => {
  history.push(`/covid19/${page}`);
};

export const onHamClick = () => {
  toggleCls("id", "navbar", CLS_IS_ACTIVE);
};

export default Header;
