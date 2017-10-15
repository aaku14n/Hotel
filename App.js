import React from "react";
import { createStore ,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/index";
import HomeContainer from "./containers/HomeContainer";
import thunk from "redux-thunk";
import * as api from "./lib/apiRequest.js";

const store =  createStore(
  allReducers,
  applyMiddleware(thunk.withExtraArgument(api))
);
export default class App extends React.Component {
  render = () => {
      return (<Provider store={ store }>
        <HomeContainer />
      </Provider>
    );
  }
}


