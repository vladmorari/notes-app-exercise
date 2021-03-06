import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";

import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers/reducer";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
