import "./Loader.scss";
import React from "react";
import { FaSyncAlt } from "react-icons/fa";
import { CLS_IS_ACTIVE } from "../../util/Constants";

const Loader = () => {
  return (
    <div className={`loader-container ${CLS_IS_ACTIVE} overlay`}>
      <FaSyncAlt className="spining primary-color" />
    </div>
  );
};

export default Loader;
