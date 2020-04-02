import axios from "axios";
import { csv } from "csvtojson";
import {
  MODE_CONFIRMED,
  MODE_RECOVERED,
  MODE_DEATH,
  COLUMN_PROVINCE_STATE,
  COLUMN_COUNTRY_REGION,
  COLUMN_LAT,
  COLUMN_LONG,
  LINK_CONFIRMED_CASES,
  LINK_DEATH_CASES,
  LINK_RECOVERED_CASES
} from "../util/Constants";

/**
 * Process and merge the jsondata.
 */
export const processAndMergeJsonData = (
  columnHeaders,
  confirmed,
  recovered,
  death
) => {
  // Initiate the object with default headers.
  const processedAndMergedData = { columnHeaders: columnHeaders };
  doProcessAndMergeJsonData(
    confirmed,
    initDoProcessAndMergeJsonData(processedAndMergedData, MODE_CONFIRMED),
    MODE_CONFIRMED
  );
  doProcessAndMergeJsonData(
    recovered,
    initDoProcessAndMergeJsonData(processedAndMergedData, MODE_RECOVERED),
    MODE_RECOVERED
  );
  doProcessAndMergeJsonData(
    death,
    initDoProcessAndMergeJsonData(processedAndMergedData, MODE_DEATH),
    MODE_DEATH
  );
  return processedAndMergedData;
};

const doProcessAndMergeJsonData = (
  data,
  processedAndMergedData,
  appendString
) => {
  const headers = data.splice(0, 1)[0];
  let individualCaseCount;
  const caseType = processedAndMergedData[appendString];

  data.forEach((record, index) => {
    individualCaseCount = 0;
    caseType["data"][index] = getKnowInitialDataStructure();
    record.forEach((item, i) => {
      if (item) {
        const headerKey = headers[i];
        if (!getKnownHeaders().includes(headerKey)) {
          item = parseInt(item) || 0;
          individualCaseCount = item;
        }
        caseType["data"][index][headerKey] = item;
      }
    });
    caseType.cases += individualCaseCount;
  });
};

/**
 * Provide a structure for data to be merged back into.
 */
const initDoProcessAndMergeJsonData = (
  processedAndMergedData,
  appendString
) => {
  if (!processedAndMergedData[appendString]) {
    processedAndMergedData[appendString] = {
      data: [],
      cases: 0
    };
  }
  return processedAndMergedData;
};

const getKnownHeaders = () => {
  return [
    COLUMN_PROVINCE_STATE,
    COLUMN_COUNTRY_REGION,
    COLUMN_LAT,
    COLUMN_LONG
  ];
};

const getKnowInitialDataStructure = () => {
  return {
    [COLUMN_PROVINCE_STATE]: "",
    [COLUMN_COUNTRY_REGION]: "",
    [COLUMN_LAT]: "",
    [COLUMN_LONG]: ""
  };
};

export const fetchConfirmedData = async () => {
  const confirmedCsv = await axios.get(LINK_CONFIRMED_CASES);
  return convertCsvToJson(confirmedCsv.data);
};

export const fetchRecoveredData = async () => {
  const recoveredCsv = await axios.get(LINK_RECOVERED_CASES);
  return convertCsvToJson(recoveredCsv.data);
};

export const fetchDeathData = async () => {
  const deathCsv = await axios.get(LINK_DEATH_CASES);
  return convertCsvToJson(deathCsv.data);
};

const convertCsvToJson = async data => {
  return await csv({
    noheader: true,
    output: "csv"
  }).fromString(data);
};
