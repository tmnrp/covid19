import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import Loader from "./components/loader/Loader";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Loader />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
