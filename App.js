import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import PlacesNavigator from "./navigation/PlacesNavigator";
import placeR from "./store/reducers/placesR";
import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("initialized db");
  })
  .catch((err) => {
    console.log("initializing db failed");
    console.log(err);
  });

const rootReducer = combineReducers({ placeR });

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
