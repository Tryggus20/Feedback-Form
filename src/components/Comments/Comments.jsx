import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from 'react-bootstrap';


export default function Comments() {
  const dispatch = useDispatch();
  const [comments, setComments] = useState("");
  const history = useHistory();
  const addComments = (event) => {
    event.preventDefault();

    console.log("comments: ", comments);
    // add comments to reducer and move to the review page
    dispatch({ type: "ADD_COMMENTS", payload: comments });
    history.push("/review");
  };
  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };
  return (
    <div className="Comments-container">
      <h1 className="Comments-heading">Any comments you want to leave?</h1>
      <br />
      <Form>
        <Form.Group controlId="comments">
          <Form.Label>Comments: </Form.Label>
          <Form.Control
            type="text"
            value={comments}
            onChange={handleCommentsChange}
          />
        </Form.Group>
        </Form>
        <br />
        <Button type="button" className="Comments-button" onClick={addComments}>
          NEXT
        </Button>
    </div>
  );
}
