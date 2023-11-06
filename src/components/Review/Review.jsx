import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Container, Row, Col, Button, Table } from 'react-bootstrap';

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
    <Container>
      <h1 className="text-center">Review Your Feedback</h1>
      <div className="tableHolder">
      <Table striped bordered hover className="custom-table">
        <tbody>
          <tr>
            <td className="text-left">Feeling:</td>
            <td>{feedback.feeling}</td>
          </tr>
          <tr>
            <td className="text-left">Understanding:</td>
            <td>{feedback.understanding}</td>
          </tr>
          <tr>
            <td className="text-left">Support:</td>
            <td>{feedback.support}</td>
          </tr>
          <tr>
            <td className="text-left">Comments:</td>
            <td>{feedback.comments}</td>
          </tr>
        </tbody>
      </Table>
      </div>
      <br />
      <Button className="button" onClick={submitFeedback}>Submit</Button>
    </Container>
  );
}
