import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';


export default function Feeling() {
  const dispatch = useDispatch();
  const [feeling, setFeeling] = useState("");
  const history = useHistory();
  const addFeeling = (event) => {
    event.preventDefault();

    if (feeling !== "") {
      console.log("feeling: ", feeling);
      // add feeling to reducer and move to the understanding question
      dispatch({ type: "ADD_FEELING", payload: feeling });
      history.push("/understanding");
    } else {
      alert("Please fill in the input field before continuing.");
    }
  };
  
  const handleRatingChange = (event) => {
    const newRating = parseInt(event.target.value, 10);
    setFeeling(newRating);
  };
  return (
    <div className="Feeling-container">
      <h1 className="Feeling-heading">How are you feeling today?</h1>
      <br />
      <Form>
      <Form.Group as={Row} controlId="formRating">

      <Form.Label column sm={3}>
          Feeling (1-5):
        </Form.Label>
        <Col sm={9}>
          <InputGroup>
            {[1, 2, 3, 4, 5].map((value) => (
              <InputGroup.Radio
                key={value}
                name="feeling"
                id={`feeling-${value}`}
                value={value}
                checked={feeling === value}
                onChange={handleRatingChange}
              />
            ))}
            <p className="Feeling-rating">{feeling}</p>
          </InputGroup>
        </Col>
        </Form.Group>
      </Form>
      <br />
      <Button type="button" className="Feeling-button" onClick={addFeeling}>
        NEXT
      </Button>
    </div>
  );
}
