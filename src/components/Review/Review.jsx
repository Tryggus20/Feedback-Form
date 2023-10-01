import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
export default function Review() {
  const history = useHistory();
  const dispatch = useDispatch();
  //get inputs from reducer
  const feedback = useSelector((state) => state.feedbackReducer);
  console.log(feedback, "feedback");
  const submitFeedback = (event) => {
    event.preventDefault();
    axios.post('/feedback', feedback ).then((response) => {
        console.log(response.data);
        //clear data due to it getting added to the database
        dispatch({type: "CLEAR_FEEDBACK"})
    }).catch((error) => {
        console.log("error on POST", error);
    })
    //move to thank you page
    history.push("/thankYou");
  };

  return (
    <>
      <h1>Review Your Feedback</h1>
      <br />
      <div key={feedback.id}>
        <p>Feeling: {feedback.feeling}</p>
        <p>Understanding: {feedback.understanding}</p>
        <p>Support: {feedback.support}</p>
        <p>Comments: {feedback.comments}</p>
      </div>

      <button onClick={submitFeedback}>Submit</button>
    </>
  );
}
