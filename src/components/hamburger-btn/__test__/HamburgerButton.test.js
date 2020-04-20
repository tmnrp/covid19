import React from "react";
import HamburgerButton from "../HamburgerButton";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("Renders with out crashing", () => {
  const { getByTestId } = render(<HamburgerButton />);
  expect(getByTestId("hamburger-btn")).toMatchSnapshot();
});

it("On hamburger click", () => {
  let isClicked = false;
  const clickCallback = () => {
    isClicked = true;
  };
  const { getByTestId } = render(
    <HamburgerButton clickCallback={clickCallback} />
  );
  expect(isClicked).toBeFalsy();
  fireEvent.click(getByTestId("hamburger-btn"));
  expect(isClicked).toBeTruthy();
});
