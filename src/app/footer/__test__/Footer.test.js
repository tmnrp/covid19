import React from "react";
import Footer from "../Footer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Footer should render", () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId("footer-testid")).toMatchSnapshot();
});
