import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

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
  const handleUnderstandingChange = (event) => {
    setUnderstanding(event.target.value);
  };
  return (
    <>
      <h1>How well are you understanding the content?</h1>
      <br />
      <p>Understanding?</p>
      <input
        type="number"
        min={1}
        max={5}
        value={understanding}
        onChange={handleUnderstandingChange}
      />
      <button type="button" onClick={addUnderstanding}>
        NEXT
      </button>
    </>
  );
}
