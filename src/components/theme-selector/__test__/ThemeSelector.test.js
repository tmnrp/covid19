import React from "react";
import { render } from "@testing-library/react";
import { onThemeChange, getThemesList, ThemeSelector } from "../ThemeSelector";
import "@testing-library/jest-dom/extend-expect";

test("onThemeChange with valid inputs", () => {
  const { getByTestId } = render(
    <p data-testid="myid" id="myid" className="light">
      ABC
    </p>
  );
  onThemeChange(null, "p", "light-blue");
  expect(getByTestId("myid")).toHaveClass("light-blue");
  expect(getByTestId("myid")).not.toHaveClass("light");
});

test("onThemeChange with no inputs", () => {
  const { getByTestId } = render(
    <p data-testid="myid" id="myid" className="light">
      ABC
    </p>
  );
  onThemeChange();
  expect(getByTestId("myid")).toHaveClass("light");
});

test("onThemeChange with in valid inputs", () => {
  const { getByTestId } = render(
    <p data-testid="myid" id="myid" className="light">
      ABC
    </p>
  );
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
