import React from "react";
import { FaHashtag, FaTable, FaChartLine } from "react-icons/fa";

// cls
export const CLS_IS_ACTIVE = "is-active";

// Themes
export const THEMES_LIST = ["light", "light-blue", "dark", "dark-blue"];

// Pages
export const PAGE_CASES = "cases";
export const PAGE_CASES_ICON = <FaHashtag />;
export const PAGE_TABLES = "tables";
export const PAGE_TABLES_ICON = <FaTable />;
export const PAGE_CHARTS = "charts";
export const PAGE_CHARTS_ICON = <FaChartLine />;
export const PAGES_LIST = [
  { name: PAGE_CASES, icon: PAGE_CASES_ICON },
  { name: PAGE_TABLES, icon: PAGE_TABLES_ICON },
  { name: PAGE_CHARTS, icon: PAGE_CHARTS_ICON }
];
