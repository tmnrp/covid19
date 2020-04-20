import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CLS_IS_ACTIVE } from "../../../util/Constants";
import { Header, onNavItemClick, onHamClick } from "../Header";

test("Header should render", () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router history={history}>
      <Header />
    </Router>
  );
  expect(getByTestId("header-container")).toMatchSnapshot();
});

//
test("Header render + on nav click", () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router history={history}>
      <Header />
    </Router>
  );

  fireEvent.click(getByTestId("navbar").querySelector("li"));
  expect(history.location.pathname).toEqual("/covid19/cases");
});

test("Header on nav click", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Header />
    </Router>
  );
  onNavItemClick("page_uno", history);
  expect(history.location.pathname).toEqual("/covid19/page_uno");
});

//
test("Header render + hamburger click", () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router history={history}>
      <div data-testid="navbar-testid" id="navbar" className="navbar"></div>
      <Header />
    </Router>
  );

  fireEvent.click(getByTestId("hamburger-btn"));

  expect(getByTestId("navbar-testid")).toHaveClass(CLS_IS_ACTIVE);
});

test("Header on hamburger click", () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router history={history}>
      <div data-testid="navbar-testid" id="navbar" className="navbar"></div>
      <Header />
    </Router>
  );
  onHamClick();
  expect(getByTestId("navbar-testid")).toHaveClass(CLS_IS_ACTIVE);
});
