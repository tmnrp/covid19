import "./Navbar.scss";
import React from "react";
import { useHistory } from "react-router-dom";
import { PAGES_LIST } from "../../util/Constants";

let history;
const Navbar = () => {
  history = useHistory();
  return (
    <ul id="navbar" className="primary-border bg-panel-bg-color fade-in-down">
      {getPages()}
    </ul>
  );
};

const getPages = () => {
  return PAGES_LIST.map(page => {
    return (
      <li
        key={page}
        className="navbar-items-container bg-panel-bg-darken-hover"
        onClick={e => onNavItemClick(e, page)}
      >
        <div className="page-icon"></div>
        <div className="page-name-link primary-color">{page.toUpperCase()}</div>
      </li>
    );
  });
};

const onNavItemClick = (e, page) => {
  history.push(`/covid19/${page}`);
};

export default Navbar;
