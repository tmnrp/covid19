import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Loader, showLoader, hideLoader } from "../Loader";
import { CLS_IS_ACTIVE } from "../../../util/Constants";

test("Loader renders", () => {
  const { getByTestId } = render(<Loader />);
  expect(getByTestId("loadmask")).toMatchSnapshot();
});

test("Show loader", () => {
  const { getByTestId } = render(<Loader />);
  showLoader();
  expect(getByTestId("loadmask")).toHaveClass(CLS_IS_ACTIVE);
});

test("Hide after loader", () => {
  const { getByTestId } = render(<Loader />);
  showLoader();
  expect(getByTestId("loadmask")).toHaveClass(CLS_IS_ACTIVE);
  hideLoader();
  expect(getByTestId("loadmask")).not.toHaveClass(CLS_IS_ACTIVE);
});
