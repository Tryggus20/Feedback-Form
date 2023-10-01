import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";

// trying just 1 reducer for all 4 inputs
const feedbackReducer = (state = [], action) => {
  switch (action.type) {
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

const store = legacy_createStore(feedbackReducer);

ReactDOM.render(
  <Provider store={store}>
    ,
    <App />,
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
