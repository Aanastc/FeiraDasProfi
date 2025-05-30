import React from "react";
import ReactDOM from "react-dom";
import "./folhaDeEstilo.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { sendToVercelAnalytics } from "./vitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(sendToVercelAnalytics);
