import {
  CONFIRMED,
  RECOVERED,
  DEATH,
  PROVINCE_STATE,
  COUNTRY_REGION,
  LAT,
  LONG
} from "../utils/Covid19Constants";

export const processAndMergeJsonData = (
  casesColumns,
  confirmed,
  recovered,
  death
) => {
  const processedAndMergedData = { casesColumns: casesColumns };
  doProcessAndMergeJsonData(
    confirmed,
    initDoProcessAndMergeJsonData(processedAndMergedData, CONFIRMED),
    CONFIRMED
  );
  doProcessAndMergeJsonData(
    recovered,
    initDoProcessAndMergeJsonData(processedAndMergedData, RECOVERED),
    RECOVERED
  );
  doProcessAndMergeJsonData(
    death,
    initDoProcessAndMergeJsonData(processedAndMergedData, DEATH),
    DEATH
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
  return [PROVINCE_STATE, COUNTRY_REGION, LAT, LONG];
};

const getKnowInitialDataStructure = () => {
  return {
    [PROVINCE_STATE]: "",
    [COUNTRY_REGION]: "",
    [LAT]: "",
    [LONG]: ""
  };
};
