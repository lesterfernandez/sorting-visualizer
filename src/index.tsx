import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AlgoContext from "./components/utils/AlgoContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <AlgoContext>
      <App />
    </AlgoContext>
  </React.StrictMode>,
  document.getElementById("root")
);
