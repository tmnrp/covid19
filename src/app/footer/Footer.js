import "./Footer.scss";
import React from "react";
import { replaceCls, getCls } from "../../util/StyleHelpers";

const Footer = () => {
  return (
    <div>
      <div>Footer</div>
      <select onChange={e => onThemeChange(e)}>
        <option value="light">light</option>
        <option value="light-blue">light-blue</option>
        <option value="dark">dark</option>
        <option value="dark-blue">dark-blue</option>
      </select>
    </div>
  );
};

const onThemeChange = e => {
  const oldCls = getCls("body");
  const newCls = e.currentTarget.value;
  replaceCls("body", oldCls, newCls);
};

export default Footer;
