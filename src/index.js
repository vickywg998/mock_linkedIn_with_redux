import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import usersReducer, { initialState } from "./reducers/usersReducer";
import 'bootstrap/dist/css/bootstrap.min.css';

import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  usersReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);


serviceWorker.unregister();
