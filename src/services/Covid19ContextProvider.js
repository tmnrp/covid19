import React, { useState, useEffect } from "react";
import { fetchJHCSSEData } from "./Covid19Service";
import { addCls, removeCls } from "../util/StyleHelpers";
import {
  MODE_CONFIRMED,
  MODE_RECOVERED,
  MODE_DEATH,
  CLS_IS_ACTIVE,
  CLS_LOADER,
  DEFAULT_COLUMNS,
  COLUMN_HEADERS,
  SELECTOR_CLASS
} from "../util/Constants";

export const Covid19Context = React.createContext();

const Covid19ContextProvider = props => {
  const [columns, setColumns] = useState(DEFAULT_COLUMNS);
  const [confirmedData, setConfirmedData] = useState([]);
  const [confirmedCases, setConfirmedCases] = useState(0);
  const [recoveredData, setRecoveredData] = useState([]);
  const [recoveredCases, setRecoveredCases] = useState(0);
  const [deathData, setDeathData] = useState([]);
  const [deathCases, setDeathCases] = useState(0);
  //
  useEffect(() => {
    // Start loadmask
    addCls(SELECTOR_CLASS, CLS_LOADER, CLS_IS_ACTIVE);

    setTimeout(() => {
      fetchJHCSSEData(data =>
        jhcsseCallback(
          data,
          setColumns,
          setConfirmedData,
          setConfirmedCases,
          setRecoveredData,
          setRecoveredCases,
          setDeathData,
          setDeathCases
        )
      );
    }, 0);
  }, []);

  return (
    <Covid19Context.Provider
      value={{
        columns,
        confirmedCases,
        confirmedData,
        recoveredCases,
        recoveredData,
        deathCases,
        deathData
      }}
    >
      {props.children}
    </Covid19Context.Provider>
  );
};

const jhcsseCallback = (
  data,
  setColumns,
  setConfirmedData,
  setConfirmedCases,
  setRecoveredData,
  setRecoveredCases,
  setDeathData,
  setDeathCases
) => {
  setColumns(data[COLUMN_HEADERS]);
  setConfirmedData(data[MODE_CONFIRMED].data);
  setConfirmedCases(data[MODE_CONFIRMED].cases);
  setRecoveredData(data[MODE_RECOVERED].data);
  setRecoveredCases(data[MODE_RECOVERED].cases);
  setDeathData(data[MODE_DEATH].data);
  setDeathCases(data[MODE_DEATH].cases);
  removeCls(SELECTOR_CLASS, CLS_LOADER, CLS_IS_ACTIVE);
};

export default Covid19ContextProvider;
