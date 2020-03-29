import "./Navbar.scss";
import React from "react";

const Navbar = props => {
  return (
    <ul id="navbar" className="primary-border bg-panel-bg-color fade-in-down">
      {getPages(props.pages, props.clickCallback)}
    </ul>
  );
};

const getPages = (pages, clickCallback) => {
  return pages.map(page => {
    return (
      <li
        key={page.name}
        className="navbar-items-container bg-panel-bg-darken-hover"
        onClick={e => clickCallback(e, page.name)}
      >
        <div className="page-icon primary-color">{page.icon}</div>
        <div className="page-name-link primary-color">
          {page.name.toUpperCase()}
        </div>
      </li>
    );
  });
};

export default Navbar;
