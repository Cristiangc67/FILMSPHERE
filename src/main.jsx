import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import ShowsState from "./context/shows/ShowState.jsx";
import AlertState from "./context/alerts/AlertState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShowsState>
      <AlertState>
        <App />
      </AlertState>
    </ShowsState>
  </React.StrictMode>
);
