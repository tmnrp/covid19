import "./Loader.scss";
import React from "react";
import { FaSyncAlt } from "react-icons/fa";

const Loader = () => {
  return (
    <div id="loadmask" className={`loader-container  overlay`}>
      <FaSyncAlt className="spining primary-color" />
    </div>
  );
};
export default Loader;
