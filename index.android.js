import React from "react";
import {
    AppRegistry
} from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/index";
import App from "./App";
const store =  createStore(allReducers);


const ReduxApp = () => (

    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent("hotel", () => ReduxApp);