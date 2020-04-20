import React from "react";
import Main from "../Main";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Footer should render", () => {
  const { getByTestId } = render(<Main />);
  expect(getByTestId("main-testid")).toMatchSnapshot();
});
