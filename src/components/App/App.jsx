import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding"

import "./App.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Switch>
          {/*Feeling is home */}
          <Route path="/" exact></Route>
          <Feeling />

          <Route path="/understanding" exact></Route>
           <Understanding /> 

          <Route path="/support"></Route>
          {/* <Support /> */}

          <Route path="/comments" exact></Route>
          {/* <Comments /> */}

          <Route path="/review" exact></Route>
          {/* <Review /> */}

          <Route path="/thankYou" exact></Route>
          {/* <ThankYou /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
