import {
  fetchConfirmedData,
  fetchRecoveredData,
  fetchDeathData,
  processAndMergeJsonData
} from "./Covid19Utils";

/**
 * This method fetches the data from the provided url,
 * process the data into usable json and return it to
 * the callback function.
 */
export const fetchJHCSSEData = async callback => {
  const confirmedJson = await fetchConfirmedData();
  const recoveredJson = await fetchRecoveredData();
  const deathJson = await fetchDeathData();

  // column headers
  const columnHeaders = confirmedJson[0] || [];

  const processedData = processAndMergeJsonData(
    columnHeaders,
    confirmedJson,
    recoveredJson,
    deathJson
  );

  callback(processedData);
};
