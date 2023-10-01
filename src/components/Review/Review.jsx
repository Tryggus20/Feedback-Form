import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function Review() {
  const history = useHistory();
  //get inputs from reducer
  const feedback = useSelector((state) => state.feedbackReducer);
  console.log(feedback, "feedback");
  const submitFeedback = (event) => {
    event.preventDefault();
    //move to thank you page
    history.push("/thankYou");
  };

  return (
    <>
      <h1>Review Your Feedback</h1>
      <br />
      <div key={feedback.id}>
        <p>Feelings: {feedback.feeling}</p>
        <p>Understanding: {feedback.understanding}</p>
        <p>Support: {feedback.support}</p>
        <p>Comments: {feedback.comments}</p>
      </div>

      <button onClick={submitFeedback}>Submit</button>
    </>
  );
}
