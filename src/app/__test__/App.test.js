import React from "react";
import App from "../App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Footer should render", () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(getByTestId("app-testid")).toMatchSnapshot();
});
