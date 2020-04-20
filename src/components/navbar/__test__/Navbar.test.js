import { Navbar, getPages } from "../Navbar";
import "@testing-library/react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

let isClicked = false;
const clickCallback = () => {
  isClicked = true;
};
const pages = [
  { name: "page 1", icon: "icon 1" },
  { name: "page 2", icon: "icon 2" }
];

test("Get pages renders properly", () => {
  expect(getPages(pages, clickCallback)).toMatchSnapshot();
});

test("Get pages click testing", () => {
  const { getByTestId } = render(
    Navbar({ pages: pages, clickCallback: clickCallback })
  );
  expect(isClicked).toBeFalsy();
  fireEvent.click(getByTestId("navbar").querySelector("li"));
  expect(isClicked).toBeTruthy();
});

test("Navbar renders properly", () => {
  expect(
    Navbar({ pages: pages, clickCallback: clickCallback })
  ).toMatchSnapshot();
});
