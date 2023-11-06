import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';


export default function Support() {
  const dispatch = useDispatch();
  const [support, setSupport] = useState("");
  const history = useHistory();
  const addSupport = (event) => {
    event.preventDefault();
    if (support !== "") {
      console.log("support: ", support);
      // add support to reducer and move to the understanding question
      dispatch({ type: "ADD_SUPPORT", payload: support });
      history.push("/comments");
    } else {
      alert("Please fill in the input field before continuing.");
    }
  };
  const handleRatingChange = (event) => {
    const newRating = parseInt(event.target.value, 10);
    setSupport(newRating);
  };
  return (
    <>
      <h1>How well are you being supported?</h1>
      <br />
      <Form>
      <Form.Group as={Row} controlId="formRating">

      <Form.Label column sm={3}>
          Support (1-5):
        </Form.Label>
        <Col sm={9}>
          <InputGroup>
            {[1, 2, 3, 4, 5].map((value) => (
              <InputGroup.Radio
                key={value}
                name="support"
                id={`support-${value}`}
                value={value}
                checked={support === value}
                onChange={handleRatingChange}
              />
            ))}
            <p>{support}</p>
          </InputGroup>
        </Col>
        </Form.Group>
      </Form>
      <br />
      <Button type="button" className="button" onClick={addSupport}>
        NEXT
      </Button>
    </>
  );
}
