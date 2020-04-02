import React from "react";
import { FaHashtag, FaTable, FaChartLine } from "react-icons/fa";
import {
  IoMdCheckmarkCircleOutline,
  IoMdFitness,
  IoMdFlower
} from "react-icons/io";

// Randoms
export const CONST_RECORDS = "records";
export const CONST_CASES = "cases";
export const CONST_DATA = "data";

// cls
export const SELECTOR_ID = "id";
export const SELECTOR_CLASS = "class";
export const CLS_IS_ACTIVE = "is-active";
export const CLS_LOADER = "loader-container";

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

// Modes
export const MODE_CONFIRMED = "confirmed";
export const MODE_CONFIRMED_ICON = <IoMdCheckmarkCircleOutline />;
export const MODE_RECOVERED = "recovered";
export const MODE_RECOVERED_ICON = <IoMdFitness />;
export const MODE_DEATH = "death";
export const MODE_DEATH_ICON = <IoMdFlower />;
export const MODES_LIST = [
  { name: MODE_CONFIRMED, icon: MODE_CONFIRMED_ICON },
  { name: MODE_RECOVERED, icon: MODE_RECOVERED_ICON },
  { name: MODE_DEATH, icon: MODE_DEATH_ICON }
];

// Columns
export const COLUMN_HEADERS = "columnHeaders";
export const COLUMN_PROVINCE_STATE = "Province/State";
export const COLUMN_PROVINCE = "Province";
export const COLUMN_COUNTRY_REGION = "Country/Region";
export const COLUMN_COUNTRY = "Country";
export const COLUMN_LAT = "Lat";
export const COLUMN_LONG = "Long";

export const DEFAULT_COLUMNS = [
  COLUMN_PROVINCE_STATE,
  COLUMN_COUNTRY_REGION,
  COLUMN_LAT,
  COLUMN_LONG
];
export const DEFAULT_DISPLAY_NAME_COLUMNS = [COLUMN_PROVINCE, COLUMN_COUNTRY];

// Data link
export const LINK_CONFIRMED_CASES =
  "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";

export const LINK_RECOVERED_CASES =
  "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv";

export const LINK_DEATH_CASES =
  "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv";
