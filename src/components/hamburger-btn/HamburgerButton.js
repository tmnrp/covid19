import "./HamburgerButton.scss";
import React from "react";
import { FaBars } from "react-icons/fa";

const HamburgerButton = () => {
  return (
    <div className="hamburger-btn primary-color">
      <FaBars />
    </div>
  );
};

export default HamburgerButton;
