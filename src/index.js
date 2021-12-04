import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Library of icons added globally. More info in https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
import "./fontawesome";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
