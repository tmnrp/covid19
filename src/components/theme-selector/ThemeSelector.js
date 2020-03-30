import "./ThemeSelector.scss";
import React from "react";
import { FaPaintBrush } from "react-icons/fa";
import { THEMES_LIST } from "../../util/Constants";
import { getCls, replaceCls } from "../../util/StyleHelpers";

const ThemeSelector = () => {
  return (
    <div className="theme-selector-container primary-color">
      <FaPaintBrush />
      <select
        id="theme-selector"
        className="primary-border bg-panel-bg-color primary-color"
        onChange={e => onThemeChange(e)}
      >
        {getThemesList()}
      </select>
    </div>
  );
};

const getThemesList = () => {
  return THEMES_LIST.map(theme => {
    return (
      <option key={theme} value={theme} className="theme-selector-item">
        {theme}
      </option>
    );
  });
};

const onThemeChange = e => {
  const oldCls = getCls(null, "body");
  const newCls = e.currentTarget.value;
  replaceCls(null, "body", oldCls, newCls);
};

export default ThemeSelector;
