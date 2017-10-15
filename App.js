import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/index";
import HomeContainer from "./containers/HomeContainer";

import {Text , View ,StyleSheet} from "react-native";

const store =  createStore(allReducers);
export default class App extends React.Component {
  render = () => {
      
      return (<Provider store={ store }>
        <HomeContainer />
      </Provider>
    );
  }
}


