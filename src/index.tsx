import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import { CookiesProvider } from "react-cookie";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import rootReducer from "./modules";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

axios.defaults.baseURL = "https://petition-api.dimigo.hs.kr";
axios.defaults.withCredentials = true;
axios.interceptors.response.use((response: any) => {
  if (response.data.status === 401) {
    window.localStorage.removeItem("user_data");
  }

  return response;
});

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Seoul");

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
