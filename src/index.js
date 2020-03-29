import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import Loader from "./components/loader/Loader";
import Covid19ContextProvider from "./services/Covid19ContextProvider";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Covid19ContextProvider>
        <App />
        <Loader />
      </Covid19ContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
