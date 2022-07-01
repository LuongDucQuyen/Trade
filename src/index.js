import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DataPovider } from "./dataContext";
import { TabPovider } from "./TabContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TabPovider>
      <DataPovider>
        <App />
      </DataPovider>
    </TabPovider>
  </React.StrictMode>
)
reportWebVitals();
