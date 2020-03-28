import "./App.scss";
import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";

const App = () => {
  return (
    <div className="app-container">
      <div className="app-header bg-panel-border-bottom">
        <Header />
      </div>
      <div className="app-main">
        <Main />
      </div>
      <div className="app-footer bg-panel-border-top">
        <Footer />
      </div>
    </div>
  );
};

export default App;
