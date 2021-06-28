import React from "react";
import { render } from "react-dom";
import App from "./App";
import DataProvider from "./redux/store";

render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
