import React, {useEffect, useState} from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import axios from "axios";

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
          <Route path="/" exact></Route>
          <Route path="/feeling" exact></Route>
          <Route path="/understanding" exact></Route>
          <Route path="/support"></Route>
          <Route path="/comments" exact></Route>
          <Route path="/review" exact></Route>
          <Route path="/thankyou" exact></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
