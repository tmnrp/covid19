import "./Loader.scss";
import React from "react";
import { FaSyncAlt } from "react-icons/fa";
import { addCls, removeCls } from "../../util/StyleHelpers";
import {
  SELECTOR_CLASS,
  CLS_LOADER,
  CLS_IS_ACTIVE
} from "../../util/Constants";

export const Loader = () => {
  return (
    <div
      id="loadmask"
      className={`loader-container  overlay`}
      data-testid="loadmask"
    >
      <FaSyncAlt className="spining primary-color" />
    </div>
  );
};

export const showLoader = () => {
  addCls(SELECTOR_CLASS, CLS_LOADER, CLS_IS_ACTIVE);
};

export const hideLoader = () => {
  removeCls(SELECTOR_CLASS, CLS_LOADER, CLS_IS_ACTIVE);
};

export default Loader;
