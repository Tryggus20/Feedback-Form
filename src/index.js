import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";


// trying just 1 reducer to rule them all!
const feedbackReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FEELING":
      return [...state, action.payload];
    case "ADD_UNDERSTANDING":
      return [...state, action.payload];
    case "ADD_SUPPORT":
      return [...state, action.payload];
    case "ADD_COMMENTS":
      return [...state, action.payload];
    default:
      return state;
  }
};

const store= createStore(
    feedbackReducer)


ReactDOM.render(
  <Provider store={store}>,
    <App />, 
  </Provider>,
    document.getElementById('root')
    );
    registerServiceWorker();
