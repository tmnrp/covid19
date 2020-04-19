import React, { useState, useEffect } from "react";
import { fetchJHCSSEData } from "../services/Covid19Service";
import { showLoader, hideLoader } from "../components/loader/Loader";

export const Covid19Context = React.createContext();

const Covid19ServiceContextProvider = (props) => {
  const [records, setRecords] = useState([]);

  useEffect(() => onCmpMount(fetchJHCSSEData, setRecords, callback), []);

  return (
    <Covid19Context.Provider
      data-testid="covid19-context-provider"
      value={{ records: records, setRecords: setRecords }}
    >
      {props.children}
    </Covid19Context.Provider>
  );
};

export const onCmpMount = (fetchJHCSSEData, setRecords, callback) => {
  showLoader();
  fetchJHCSSEData((data) => callback(data, setRecords));
};

export const callback = (data, setRecords) => {
  if (typeof setRecords === "function") {
    setRecords(data);
  }
  hideLoader();
};

export default Covid19ServiceContextProvider;
