import axios from "axios";
import { csv } from "csvtojson";
import {
  CONFIRMED,
  RECOVERED,
  DEATH,
  LINK_CONFIRMED_CASES,
  LINK_DEATH_CASES,
  LINK_RECOVERED_CASES
} from "../utils/Covid19Constants";

import { processAndMergeJsonData } from "../utils/Covid19Utils";

export const fetchJHCSSEData = async callback => {
  const confirmedJson = await fetchConfirmedData();
  const casesColumns = confirmedJson[0] || [];
  const recoveredJson = await fetchRecoveredData();
  const deathJson = await fetchDeathData();
  const lastDate = confirmedJson[0][confirmedJson[0].length - 1];
  const processedData = processAndMergeJsonData(
    casesColumns,
    confirmedJson,
    recoveredJson,
    deathJson
  );

  sessionStorage.setItem("cases-columns", casesColumns);
  sessionStorage.setItem("last-date", lastDate);
  sessionStorage.setItem("cases-data", JSON.stringify(processedData));
  sessionStorage.setItem(CONFIRMED + "-cases", processedData[CONFIRMED].cases);
  sessionStorage.setItem(RECOVERED + "-cases", processedData[RECOVERED].cases);
  sessionStorage.setItem(DEATH + "-cases", processedData[DEATH].cases);
  callback(processedData);
};

const fetchConfirmedData = async () => {
  const confirmedCsv = await axios.get(LINK_CONFIRMED_CASES);
  return convertCsvToJson(confirmedCsv.data);
};

const fetchRecoveredData = async () => {
  const recoveredCsv = await axios.get(LINK_RECOVERED_CASES);
  return convertCsvToJson(recoveredCsv.data);
};

const fetchDeathData = async () => {
  const deathCsv = await axios.get(LINK_DEATH_CASES);
  return convertCsvToJson(deathCsv.data);
};

const convertCsvToJson = async data => {
  return await csv({
    noheader: true,
    output: "csv"
  }).fromString(data);
};
