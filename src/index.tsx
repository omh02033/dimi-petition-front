import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import { CookiesProvider } from "react-cookie";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import PetitionProvider from "components/PetitionProvider";

axios.defaults.baseURL = "http://localhost:80";
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <PetitionProvider>
        <App />
      </PetitionProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
