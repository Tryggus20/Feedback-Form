import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';


export default function Understanding() {
  const dispatch = useDispatch();
  const [understanding, setUnderstanding] = useState("");
  const history = useHistory();
  const addUnderstanding = (event) => {
    event.preventDefault();

    if (understanding !== "") {
      console.log("understanding: ", understanding);
      // add understanding to reducer and move to the understanding question
      dispatch({ type: "ADD_UNDERSTANDING", payload: understanding });
      history.push("/support");
    } else {
      alert("Please fill in the input field before continuing.");
    }
  };
  const handleRatingChange = (event) => {
    const newRating = parseInt(event.target.value, 10);
    setUnderstanding(newRating);
  };
  return (
    <div className="Understanding-container">
      <h1 className="Understanding-heading">How well are you understanding the content?</h1>
      <br />
      <Form>
      <Form.Group as={Row} controlId="formRating">

      <Form.Label column sm={3}>
          Understanding (1-5):
        </Form.Label>
        <Col sm={9}>
          <InputGroup>
            {[1, 2, 3, 4, 5].map((value) => (
              <InputGroup.Radio
                key={value}
                name="understanding"
                id={`understanding-${value}`}
                value={value}
                checked={understanding === value}
                onChange={handleRatingChange}
                className=".custom-radio"
              />
            ))}
            <p className="Understanding-rating">{understanding}</p>
          </InputGroup>
        </Col>
        </Form.Group>
      </Form>
      <br />
      <Button type="button" className="button Understanding-button" onClick={addUnderstanding}>
        NEXT
      </Button>
    </div>
  );
}
