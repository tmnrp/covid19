import React, { useState, useEffect } from "react";
import { fetchJHCSSEData } from "../services/Covid19Service";
import { addCls, removeCls } from "../util/StyleHelpers";
import { SELECTOR_CLASS, CLS_LOADER, CLS_IS_ACTIVE } from "../util/Constants";

export const Covid19Context = React.createContext();

const Covid19ServiceContextProvider = (props) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    addCls(SELECTOR_CLASS, CLS_LOADER, CLS_IS_ACTIVE);
    fetchJHCSSEData((data) => callback(data, setRecords));
  }, []);

  return (
    <Covid19Context.Provider
      data-testid="covid19-context-provider"
      value={{ records: records, setRecords: setRecords }}
    >
      {props.children}
    </Covid19Context.Provider>
  );
};

export const callback = (data, setRecords) => {
  if (typeof setRecords === "function") {
    setRecords(data);
  }
  removeCls(SELECTOR_CLASS, CLS_LOADER, CLS_IS_ACTIVE);
};

export default Covid19ServiceContextProvider;
