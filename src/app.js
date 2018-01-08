import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import { textFilter, setTextFilter } from "./actions/filters";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize"; // needed for _datepicker to work (https://github.com/airbnb/react-dates/issues/845)
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector("#app"));
