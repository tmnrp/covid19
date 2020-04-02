import React from "react";
import ReactDOM from "react-dom";
import HamburgerButton from "../HamburgerButton";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Renders with out crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HamburgerButton />, div);
});

it("Snapshot the hamburger menu", () => {
  const tree = renderer.create(<HamburgerButton />);
  expect(tree).toMatchSnapshot();
});
