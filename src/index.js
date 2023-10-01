import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

//adding initial state outside so the reducer looks a little bit cleaner
const initialState = {
  feeling: "",
  understanding: "",
  support: "",
  comments: "",
};
// trying just 1 reducer for all 4 inputs
const feedbackReducer = (state = initialState, action) => {
  console.log("Current State:", state);
  console.log("Action Type:", action.type);
  console.log("Action Payload:", action.payload);
  switch (action.type) {
    case "SET_ALL_FEEDBACK":
      return action.payload;
    case "ADD_FEELING":
      return { ...state, feeling: action.payload };
    case "ADD_UNDERSTANDING":
      return { ...state, understanding: action.payload };
    case "ADD_SUPPORT":
      return { ...state, support: action.payload };
    case "ADD_COMMENTS":
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  feedbackReducer,
}); // turns out you can have combineReducers with just one reducer.
//It wouldn't work without it or I just wasn't doing it right.
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
