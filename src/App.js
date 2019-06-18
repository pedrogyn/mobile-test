import React, { Component } from "react";
import { AsyncStorage, View, Text } from "react-native";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

import reducers from "./reducers";
import Home from "./views/Home";
import TableView from "./views/TableView";

export const store = applyMiddleware(multi, thunk, promise)(createStore)(
  reducers
);

// let dispatch = store.dispatch;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TableView />
      </Provider>
    );
  }
}

export default App;
