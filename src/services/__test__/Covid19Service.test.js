import {
  initiateDefaultColumns,
  getLastCaseCount,
  doProcessAndMergeJsonData,
  fetchConfirmedData,
  fetchRecoveredData,
  fetchDeathData,
  fetchJHCSSEData,
  convertCsvToJsonFromString
} from "../Covid19Service";

test("test convert to json from string : undefined", async () => {
  const response = await convertCsvToJsonFromString(undefined);
  expect(response).toEqual([]);
});

test("test convert to json from string : null", async () => {
  const response = await convertCsvToJsonFromString(null);
  expect(response).toEqual([]);
});

test("test convert to json from string : empty string", async () => {
  const response = await convertCsvToJsonFromString("");
  expect(response).toEqual([]);
});

test("test convert to json from string : actual usecase", async () => {
  const data = "name,age\ntony,30";
  const response = await convertCsvToJsonFromString(data);
  expect(response).toEqual([
    ["name", "age"],
    ["tony", "30"]
  ]);
});

test("test initiateDefaultColumns : should return object of default columns", () => {
  const defaultColumns = {
    "Country/Region": "",
    Lat: "",
    Long: "",
    "Province/State": ""
  };
  expect(initiateDefaultColumns()).toEqual(defaultColumns);
});

test("test getLastCaseCount valid usecase", () => {
  const data = ["abc", "xyz", "1", "23", "45", "67", "89"];
  expect(getLastCaseCount(data)).toEqual(89);
});

test("test getLastCaseCount invalid usecase", () => {
  const data = ["abc", "xyz", "1", "23", "45", "67", "89", "lolwa"];
  expect(getLastCaseCount(data)).toEqual(0);
});

test("test getLastCaseCount should return 0 if data is empty object", () => {
  const data = undefined;
  expect(getLastCaseCount(data)).toEqual(0);
});

test("test getLastCaseCount should return 0 if data is empty object", () => {
  const data = null;
  expect(getLastCaseCount(data)).toEqual(0);
});

test("test getLastCaseCount should return 0 if data is empty object", () => {
  const data = [];
  expect(getLastCaseCount(data)).toEqual(0);
});

test("test getLastCaseCount should return 0 if data is empty object", () => {
  const data = {};
  expect(getLastCaseCount(data)).toEqual(0);
});

test("Test the finale of doProcessAndMergeJsonData : valid case", async () => {
  const data = [
    ["Country/Region", "Province/State", "Lat", "Long", "3/11", "4/12", "5/16"],
    ["India", "", "10", "12", "100", "105", "106"],
    ["Thailand", "", "11", "13", "150", "155", "156"]
  ];

  const expectedData = {
    records: [
      {
        "Province/State": "",
        "Country/Region": "India",
        Lat: "10",
        Long: "12",
        "3/11": "100",
        "4/12": "105",
        "5/16": "106"
      },
      {
        "Province/State": "",
        "Country/Region": "Thailand",
        Lat: "11",
        Long: "13",
        "3/11": "150",
        "4/12": "155",
        "5/16": "156"
      }
    ],
    cases: 262
  };
  expect(doProcessAndMergeJsonData(data)).toEqual(expectedData);
});

test("Test the finale of doProcessAndMergeJsonData : Only one row", async () => {
  const data = [
    ["Country/Region", "Province/State", "Lat", "Long", "3/11", "4/12", "5/16"],
    ["India", "", "10", "12", "100", "105", "106"]
  ];

  const expectedData = {
    records: [
      {
        "Province/State": "",
        "Country/Region": "India",
        Lat: "10",
        Long: "12",
        "3/11": "100",
        "4/12": "105",
        "5/16": "106"
      }
    ],
    cases: 106
  };
  expect(doProcessAndMergeJsonData(data)).toEqual(expectedData);
});

test("Test the finale of doProcessAndMergeJsonData : No headers", async () => {
  const data = [["India", "", "10", "12", "100", "105", "106"]];

  const expectedData = {
    records: [],
    cases: 0
  };
  expect(doProcessAndMergeJsonData(data)).toEqual(expectedData);
});

test("Test the finale of doProcessAndMergeJsonData : Only header and no rows", async () => {
  const data = [
    ["Country/Region", "Province/State", "Lat", "Long", "3/11", "4/12", "5/16"]
  ];

  const expectedData = {
    records: [],
    cases: 0
  };
  expect(doProcessAndMergeJsonData(data)).toEqual(expectedData);
});

test("Test the finale of doProcessAndMergeJsonData : Empty data array of 0th array", async () => {
  const data = [[]];

  const expectedData = {
    records: [],
    cases: 0
  };
  expect(doProcessAndMergeJsonData(data)).toEqual(expectedData);
});

test("Test the finale of doProcessAndMergeJsonData : Empty data array", async () => {
  const data = [];

  const expectedData = {
    records: [],
    cases: 0
  };
  expect(doProcessAndMergeJsonData(data)).toEqual(expectedData);
});

test("Test the finale of doProcessAndMergeJsonData : null data", async () => {
  const data = null;

  const expectedData = {
    records: [],
    cases: 0
  };
  expect(doProcessAndMergeJsonData(data)).toEqual(expectedData);
});

test("Test the finale of doProcessAndMergeJsonData : undefined data", async () => {
  const data = undefined;

  const expectedData = {
    records: [],
    cases: 0
  };
  expect(doProcessAndMergeJsonData(data)).toEqual(expectedData);
});

test("Test the finale of fetchJHCSSEData", async () => {
  const callback = data => {
    expect(data).not.toEqual([] || null || undefined);
  };

  await fetchJHCSSEData(callback);
});

test("csvToJson : Confirmed cases should not be empty", async () => {
  const data = await fetchConfirmedData();
  expect(data).not.toEqual([] || null || undefined);
});

test("csvToJson : Recovered cases should not be empty", async () => {
  const data = await fetchRecoveredData();
  expect(data).not.toEqual([] || null || undefined);
});

test("csvToJson : Death cases should not be empty", async () => {
  const data = await fetchDeathData();
  expect(data).not.toEqual([] || null || undefined);
});
