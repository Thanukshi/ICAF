import React from "react";
//import { render } from "react-dom";
import ReactDOM from "react-dom";
import App from "./App";
import DataProvider from "./redux/store";

ReactDOM.render(
    <DataProvider>
      <App />
    </DataProvider>,
  document.getElementById("root")
);
