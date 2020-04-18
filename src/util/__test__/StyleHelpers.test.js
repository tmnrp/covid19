import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {
  getEl,
  toggleCls,
  addCls,
  getCls,
  removeCls,
  replaceCls,
} from "../StyleHelpers";

// getEL
test("Check if getEl functions exists", () => {
  expect(typeof getEl).toEqual("function");
});

test("getEl should returns ele for id", () => {
  const { getByTestId } = render(
    <div data-testid="myid" id="myid">
      ABC
    </div>
  );
  expect(getByTestId("myid")).toEqual(getEl("id", "myid"));
});

test("getEl should returns ele for class", () => {
  const { getByTestId } = render(
    <div data-testid="myid" className="myclass">
      ABC
    </div>
  );
  expect(getByTestId("myid")).toEqual(getEl("class", "myclass"));
});

test("getEl empty params", () => {
  expect(getEl()).toBeNull();
});

test("getEl valid id, invalid selector", () => {
  expect(getEl("id", "")).toBeFalsy();
});

test("getEl valid class, invalid selector", () => {
  expect(getEl("class", "")).toBeFalsy();
});

// toggleCls
test("Check if toggleCls functions exists", () => {
  expect(typeof toggleCls).toEqual("function");
});

test("toggleCls valid input", () => {
  const { getByTestId } = render(
    <div data-testid="myid" id="myid" className="myclass">
      ABC
    </div>
  );
  toggleCls("id", "myid", "mytoggle");
  expect(getByTestId("myid")).toHaveClass("myclass mytoggle");

  toggleCls("id", "myid", "mytoggle");
  expect(getByTestId("myid")).toHaveClass("myclass");
});

test("toggleCls empty params", () => {
  const { getByTestId } = render(
    <div data-testid="myid" id="myid" className="myclass">
      ABC
    </div>
  );
  toggleCls();
  expect(getByTestId("myid")).toHaveClass("myclass");
});

test("toggleCls invalid cls input", () => {
  const { getByTestId } = render(
    <div data-testid="myid" id="myid" className="myclass">
      ABC
    </div>
  );
  toggleCls("id", "myid", "");
  expect(getByTestId("myid")).toHaveClass("myclass");
});

//addCls
test("Check if addCls functions exists", () => {
  expect(typeof addCls).toEqual("function");
});

test("addCls valid input", () => {
  const { getByTestId } = render(
    <div data-testid="myid" id="myid" className="myclass">
      ABC
    </div>
  );
  addCls("id", "myid", "myadd-1");
  expect(getByTestId("myid")).toHaveClass("myclass myadd-1");

  addCls("id", "myid", "myadd-2");
  expect(getByTestId("myid")).toHaveClass("myclass myadd-1 myadd-2");
});

test("addCls empty params", () => {
  const { getByTestId } = render(
    <div data-testid="myid" id="myid" className="myclass">
      ABC
    </div>
  );
  addCls();
  expect(getByTestId("myid")).toHaveClass("myclass");
});

test("addCls invalid cls input", () => {
  const { getByTestId } = render(
    <div data-testid="myid" id="myid" className="myclass">
      ABC
    </div>
  );
  addCls("id", "myid", "");
  expect(getByTestId("myid")).toHaveClass("myclass");
});

// removeCls
test("Check if removeCls functions exists", () => {
  expect(typeof removeCls).toEqual("function");
});

test("removeCls valid input", () => {
  const { getByTestId } = render(
    <div data-testid="myid" id="myid" className="myclass myadd-1 myadd-2">
      ABC
    </div>
  );
  removeCls("id", "myid", "myadd-2");
  expect(getByTestId("myid")).toHaveClass("myclass myadd-1");

  removeCls("id", "myid", "myadd-1");
  expect(getByTestId("myid")).toHaveClass("myclass");
});

test("removeCls empty params", () => {
  const { getByTestId } = render(
    <div data-testid="myid" id="myid" className="myclass">
      ABC
    </div>
  );
  removeCls();
  expect(getByTestId("myid")).toHaveClass("myclass");
});

test("removeCls invalid cls input", () => {
  const { getByTestId } = render(
    <div data-testid="myid" id="myid" className="myclass">
      ABC
    </div>
  );
  removeCls("id", "myid", "");
  expect(getByTestId("myid")).toHaveClass("myclass");
});

// replaceCls
test("Check if replaceCls functions exists", () => {
  expect(typeof replaceCls).toEqual("function");
});

test("replaceCls valid input", () => {
  const { getByTestId } = render(
    <div data-testid="myid" id="myid" className="myclass-old">
      ABC
    </div>
  );
  replaceCls("id", "myid", "myclass-old", "myclass-new");
  expect(getByTestId("myid")).toHaveClass("myclass-new");

  replaceCls("id", "myid", "myclass-new", "myclass-old");
  expect(getByTestId("myid")).toHaveClass("myclass-old");
});

test("replaceCls empty params", () => {
  const { getByTestId } = render(
    <div data-testid="myid" id="myid" className="myclass">
      ABC
    </div>
  );
  replaceCls();
  expect(getByTestId("myid")).toHaveClass("myclass");
});

test("replaceCls invalid cls input", () => {
  const { getByTestId } = render(
    <div data-testid="myid" id="myid" className="myclass">
      ABC
    </div>
  );
  replaceCls("id", "myid", "", "");
  expect(getByTestId("myid")).toHaveClass("myclass");
});

test("replaceCls invalid cls input", () => {
  const { getByTestId } = render(
    <div data-testid="myid" id="myid" className="myclass">
      ABC
    </div>
  );
  replaceCls("id", "myid", "", "myclass-new");
  expect(getByTestId("myid")).toHaveClass("myclass");

  replaceCls("id", "myid", "myclass-old", "");
  expect(getByTestId("myid")).toHaveClass("myclass");
});

// getCls
test("Check if getCls functions exists", () => {
  expect(typeof getCls).toEqual("function");
});

test("getCls valid input", () => {
  render(
    <div
      data-testid="myid"
      id="myid"
      className="myclass myclass-old myclass-new"
    >
      ABC
    </div>
  );
  expect(getCls("id", "myid")).toEqual("myclass myclass-old myclass-new");
});

test("getCls no input", () => {
  render(
    <div
      data-testid="myid"
      id="myid"
      className="myclass myclass-old myclass-new"
    >
      ABC
    </div>
  );
  expect(getCls()).toBeNull();
});

test("getCls invalid empty string params", () => {
  render(
    <div data-testid="myid" id="myid" className="myclass">
      ABC
    </div>
  );
  expect(getCls("", "")).toBeNull();
});
