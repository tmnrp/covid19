import "./Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";
import { PAGES_LIST } from "../../util/Constants";

const Navbar = () => {
  return <ul id="navbar">{getPages()}</ul>;
};

const getPages = () => {
  return PAGES_LIST.map(page => {
    return (
      <li key={page}>
        <span className="page-icon"></span>
        <Link to={`/covid19/${page}`} className="page-name">
          {page.toUpperCase()}
        </Link>
      </li>
    );
  });
};

export default Navbar;
