import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import AlgoContext from "./utils/AlgoContext";

ReactDOM.render(
  <React.StrictMode>
    <AlgoContext>
      <App />
    </AlgoContext>
  </React.StrictMode>,
  document.getElementById("root")
);
