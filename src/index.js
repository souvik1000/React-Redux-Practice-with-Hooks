// import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/CounterSlice";
import themeReducer from "./features/theme/themeSlice";
import { Provider } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
