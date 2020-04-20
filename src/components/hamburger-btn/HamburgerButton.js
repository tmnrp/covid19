import "./HamburgerButton.scss";
import React from "react";
import { FaBars } from "react-icons/fa";

const HamburgerButton = props => {
  return (
    <div
      className="hamburger-btn primary-color primary-color-darken-hover"
      onClick={e => props.clickCallback(e)}
      data-testid="hamburger-btn"
    >
      <FaBars />
    </div>
  );
};

export default HamburgerButton;
