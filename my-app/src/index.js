import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { ThemeProvider, CssBaseline } from "@mui/material";

var Airtable = require("airtable");
//create a new Airtable object in React
new Airtable({ apiKey: "keyWXBX6EWJI83bal" }).base("appxk50hiFHmnhcsi");
//base endpoint to call with each request
axios.defaults.baseURL =
  "https://api.airtable.com/v0/appxk50hiFHmnhcsi/Tracker/";
//content type to send with all POST requests
axios.defaults.headers.post["Content-Type"] = "application/json";
//authenticate to the base with the API key
axios.defaults.headers["Authorization"] = "Bearer keyWXBX6EWJI83bal";

const app = () => (
  <ThemeProvider>
    <CssBaseline />
    <App />
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
