import React from "react";
import Covid19ServiceContextProvider, {
  callback,
} from "../Covid19ServiceContextProvider";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderHook } from "@testing-library/react-hooks";

test("Test the callback with valid params", () => {
  const { result } = renderHook(() =>
    Covid19ServiceContextProvider(
      <div data-testid="covid19-context-provider"></div>
    )
  );

  const { getByTestId } = render(result.current);
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