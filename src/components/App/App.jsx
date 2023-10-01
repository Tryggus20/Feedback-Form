import { HashRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import { useDispatch } from "react-redux";
import ThankYou from "../ThankYou/ThankYou";
import "./App.css";

function App() {
  const dispatch = useDispatch;
  const displayFeedback = () => {
    // //////////////////
    axios
      .get("/")
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "SET_ALL_FEEDBACK", payload: response.data });
      })
      .catch((error) => {
        console.log("error on GET to display feedback reducer", error);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Switch>
          {/*Starting the survey right away with feeling question */}
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
            <Review />
          </Route>

          <Route path="/thankYou" exact>
            <ThankYou />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
