import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";

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
          <Route path="/" exact>
            <Feeling />
          </Route>

          <Route path="/understanding" exact>
            <Understanding />
          </Route>

          <Route path="/support">
            <Support />
            </Route>

          <Route path="/comments" exact>
            <Comments />
          </Route>

          <Route path="/review" exact>
            {/* <Review /> */}
          </Route>

          <Route path="/thankYou" exact>
            {/* <ThankYou /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
