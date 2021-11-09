import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Library of icons added globally. More info in https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
import "./fontawesome";

// Libraries of bootstrap added globally. More info in https://www.creative-tim.com/blog/web-design/how-to-use-bootstrap-with-reactjs/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
