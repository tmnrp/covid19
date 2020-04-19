import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Covid19ServiceContextProvider, {
  onCmpMount,
  callback
} from "../Covid19ServiceContextProvider";

test("Test the callback with valid params", () => {
  const { container } = render(
    <Covid19ServiceContextProvider>
      <p>Testing</p>
    </Covid19ServiceContextProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Test the callback with valid params", () => {
  let record = [];
  const expectedRecord = [1, 2, 3];
  const setRecords = (data) => {
    record = data;
  };

  const { getByTestId } = render(
    <div data-testid="myid" id="myid" className="loader-container is-active">
      ABC
    </div>
  );

  callback(expectedRecord, setRecords);
  expect(getByTestId("myid")).not.toHaveClass("loader-container is-active");
  expect(record).toEqual(expectedRecord);
});

test("Test the callback with invalid typeof for setRecords", () => {
  let record = [];
  const expectedRecord = [1, 2, 3];
  const setRecords = "";

  const { getByTestId } = render(
    <div data-testid="myid" id="myid" className="loader-container is-active">
      ABC
    </div>
  );

  callback(expectedRecord, setRecords);
  expect(getByTestId("myid")).not.toHaveClass("loader-container is-active");
  expect(record).toEqual(record);
});

test("onCmpMount", () => {
  const { getByTestId } = render(
    <div data-testid="loadmask" id="loadmask" className="loader-container">
      ABC
    </div>
  );

  let record = [];
  const expectedRecord = [1, 2, 3];
  const setRecords = (data) => {
    record = data;
  };
  const fetchJHCSSEData = (callback) => {
    callback(expectedRecord, setRecords);
  };

  onCmpMount(fetchJHCSSEData, setRecords, callback);
  expect(getByTestId("loadmask")).toHaveClass("loader-container");
  expect(record).toEqual(expectedRecord);
});
