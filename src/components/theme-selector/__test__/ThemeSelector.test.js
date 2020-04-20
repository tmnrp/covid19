import React from "react";
import "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { onThemeChange, getThemesList, ThemeSelector } from "../ThemeSelector";

const el = (
  <p data-testid="myid" id="myid" className="light">
    ABC
  </p>
);

test("onThemeChange with valid inputs", () => {
  const { getByTestId } = render(el);
  onThemeChange("p", "light-blue");
  expect(getByTestId("myid")).toHaveClass("light-blue");
  expect(getByTestId("myid")).not.toHaveClass("light");
});

test("onThemeChange with no inputs", () => {
  const { getByTestId } = render(el);
  onThemeChange();
  expect(getByTestId("myid")).toHaveClass("light");
});

test("onThemeChange with in valid inputs", () => {
  const { getByTestId } = render(el);
  onThemeChange(null, "abc", 50);
  expect(getByTestId("myid")).toHaveClass("light");

  onThemeChange(null, null, null);
  expect(getByTestId("myid")).toHaveClass("light");
});

//getThemesList
test("getThemesList", () => {
  const { getAllByTestId } = render(getThemesList());
  expect(getAllByTestId("theme-selector-item")).toMatchSnapshot();
});

//ThemeSelector
test("ThemeSelector", () => {
  const { getAllByTestId } = render(ThemeSelector());
  expect(getAllByTestId("theme-selector-container")).toMatchSnapshot();
});

//ThemeSelector fireevent onChange
test("ThemeSelector", () => {
  const { getByTestId } = render(
    <div>
      <p data-testid="tsp-container" className="light"></p>
      <ThemeSelector selector="p" />
    </div>
  );
  fireEvent.change(
    getByTestId("theme-selector-container").querySelector("select"),
    { target: { value: "dark-blue" } }
  );
  expect(getByTestId("tsp-container")).toHaveClass("dark-blue");
});
