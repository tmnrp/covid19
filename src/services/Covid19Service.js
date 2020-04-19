import axios from "axios";
import { csv } from "csvtojson";
import {
  LINK_CONFIRMED_CASES,
  LINK_DEATH_CASES,
  LINK_RECOVERED_CASES,
  MODE_CONFIRMED,
  DEFAULT_COLUMNS,
  CONST_RECORDS,
  CONST_CASES,
  MODE_RECOVERED,
  MODE_DEATH
} from "../util/Constants";

/**
 * This method fetches the data from the provided url,
 * process the data into usable json and return it to
 * the callback function.
 */
export const fetchJHCSSEData = async (callback) => {
  const confirmedJson = await fetchConfirmedData();
  const recoveredJson = await fetchRecoveredData();
  const deathJson = await fetchDeathData();

  // column headers
  const columnHeaders = getColumnHeaders(confirmedJson);

  // get processed and merged data
  const processedData = processAndMergeJsonData(
    columnHeaders,
    confirmedJson,
    recoveredJson,
    deathJson
  );

  callback(processedData);
};

/**
 * Returns the first row from the data.
 */
export const getColumnHeaders = (data) => {
  return data && Array.isArray(data) && data.length > 0 ? data[0] : [];
};

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

  // Process and merge the confirmed cases
  processedAndMergedData[MODE_CONFIRMED] = doProcessAndMergeJsonData(confirmed);
  processedAndMergedData[MODE_RECOVERED] = doProcessAndMergeJsonData(recovered);
  processedAndMergedData[MODE_DEATH] = doProcessAndMergeJsonData(death);
  return processedAndMergedData;
};

// UTC Complete
export const doProcessAndMergeJsonData = (data) => {
  data = data === null || data === undefined ? [] : data;
  const headers = data.splice(0, 1)[0];
  const processedAndMergedData = { [CONST_RECORDS]: [], [CONST_CASES]: 0 };

  data.forEach((record, index) => {
    let shouldInitiateDefaultColumns = true;

    // Update the total case-count
    processedAndMergedData[CONST_CASES] += getLastCaseCount(record);

    record.forEach((recordValue, i) => {
      if (recordValue) {
        const recordKey = headers[i];

        // initiate the default columns for each record (state, province,  lat and long).
        if (shouldInitiateDefaultColumns) {
          processedAndMergedData[CONST_RECORDS][
            index
          ] = initiateDefaultColumns();
          shouldInitiateDefaultColumns = false;
        }

        // Insert the value into processed data
        processedAndMergedData[CONST_RECORDS][index][recordKey] = recordValue;
      }
    });
  });

  return processedAndMergedData;
};

// UTC Complete
export const getLastCaseCount = (record) => {
  if (
    record !== null &&
    record !== undefined &&
    Array.isArray(record) &&
    record.length > 0
  ) {
    // Check if the last value is integer parsable or not
    const value = parseInt([...record].reverse()[0]);
    if (!isNaN(value)) {
      return value;
    }
  }
  return 0;
};

// UTC Complete
// returns object of default columns
export const initiateDefaultColumns = () => {
  const defaultColumns = {};
  DEFAULT_COLUMNS.forEach((column) => {
    defaultColumns[column] = "";
  });

  return defaultColumns;
};

// UTC Complete
export const fetchConfirmedData = async () => {
  const confirmedCsv = await axios.get(LINK_CONFIRMED_CASES);
  return convertCsvToJsonFromString(confirmedCsv.data);
};

// UTC Complete
export const fetchRecoveredData = async () => {
  const recoveredCsv = await axios.get(LINK_RECOVERED_CASES);
  return convertCsvToJsonFromString(recoveredCsv.data);
};

// UTC Complete
export const fetchDeathData = async () => {
  const deathCsv = await axios.get(LINK_DEATH_CASES);
  return convertCsvToJsonFromString(deathCsv.data);
};

// UTC Complete
export const convertCsvToJsonFromString = async (data) => {
  return await csv({
    noheader: true,
    output: "csv"
  }).fromString(data || "");
};
