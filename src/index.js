import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import Loader from "./components/loader/Loader";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Loader />
  </React.StrictMode>,
  document.getElementById("root")
);
