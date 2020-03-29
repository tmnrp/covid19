import "./Loader.scss";
import React from "react";
import { FaSyncAlt } from "react-icons/fa";
import { CLS_IS_ACTIVE } from "../../util/Constants";

const Loader = () => {
  return (
    <div id="loadmask" className={`loader-container  overlay`}>
      <FaSyncAlt className="spining primary-color" />
    </div>
  );
};
/*${CLS_IS_ACTIVE}*/
export default Loader;
