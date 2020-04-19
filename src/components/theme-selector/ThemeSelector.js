import "./ThemeSelector.scss";
import React from "react";
import { FaPaintBrush } from "react-icons/fa";
import { THEMES_LIST } from "../../util/Constants";
import { getCls, replaceCls } from "../../util/StyleHelpers";

export const ThemeSelector = () => {
  return (
    <div
      className="theme-selector-container primary-color"
      data-testid="theme-selector-container"
    >
      <FaPaintBrush />
      <select
        id="theme-selector"
        className="primary-border bg-panel-bg-color primary-color"
        onChange={(e) => onThemeChange(e, "body", e.currentTarget.value)}
      >
        {getThemesList()}
      </select>
    </div>
  );
};

export const getThemesList = () => {
  return THEMES_LIST.map((theme) => {
    return (
      <option
        key={theme}
        value={theme}
        className="theme-selector-item"
        data-testid="theme-selector-item"
      >
        {theme}
      </option>
    );
  });
};

export const onThemeChange = (e, selector, value) => {
  const oldCls = getCls(null, selector);
  const newCls = value;
  replaceCls(null, selector, oldCls, newCls);
};

export default ThemeSelector;
