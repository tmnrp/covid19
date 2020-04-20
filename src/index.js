import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import Loader from "./components/loader/Loader";
import { BrowserRouter as Router } from "react-router-dom";
import Covid19ServiceContextProvider from "./services/Covid19ServiceContextProvider";

export const Index = ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Covid19ServiceContextProvider>
        <App />
        <Loader />
      </Covid19ServiceContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
